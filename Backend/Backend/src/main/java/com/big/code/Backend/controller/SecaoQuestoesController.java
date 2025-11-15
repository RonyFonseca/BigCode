package com.big.code.Backend.controller;

import com.big.code.Backend.dataTransferObject.ApiResponse;
import com.big.code.Backend.dataTransferObject.dtoSecao;
import com.big.code.Backend.model.Questoes;
import com.big.code.Backend.model.SecaoDeQuestoes;
import com.big.code.Backend.model.User;
import com.big.code.Backend.repository.QuestoesRepository;
import com.big.code.Backend.repository.SecaoQuestoesRepository;
import com.big.code.Backend.repository.UserRepository;
import com.big.code.Backend.services.JWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class SecaoQuestoesController {
    @Autowired
    private final SecaoQuestoesRepository secaoRepository;

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final QuestoesRepository questoesRepository;

    @Autowired
    private final JWT jwt;

    public SecaoQuestoesController(SecaoQuestoesRepository secaoRepository, QuestoesRepository questoesRepository,UserRepository userRepository, JWT jwt) {
        this.secaoRepository = secaoRepository;
        this.questoesRepository = questoesRepository;
        this.userRepository = userRepository;
        this.jwt = jwt;
    }

    @GetMapping("/pegarSecoes")
    public ResponseEntity<ApiResponse> pegarTodasSecoes(@RequestHeader("Authorization") String token){
        token = token.split("Bearer ")[1];

        if(!(jwt.validateToken(token))){
            return ResponseEntity.status(400).body(new ApiResponse("Token inválido"));
        }

        List<SecaoDeQuestoes> secao = secaoRepository.findAll();

        return ResponseEntity.status(200).body(new ApiResponse("todas seções", secao));
    }

    @GetMapping("/pegarQuestoes/secao/{idSecao}")
    public  ResponseEntity<ApiResponse> pegarQuestoeDaSecao(@PathVariable Long idSecao, @RequestHeader("Authorization") String token){
        token = token.split("Bearer ")[1];

        if(!(jwt.validateToken(token))){
            return ResponseEntity.status(400).body(new ApiResponse("Token inválido"));
        }

        SecaoDeQuestoes secao = secaoRepository.findById(idSecao).orElse(null);

        ArrayList<Questoes> questoes = secao.getQuestoesList();

        return ResponseEntity.status(200).body(new ApiResponse("todas questões", questoes));
    }

    @PostMapping("/create/secao")
    public ResponseEntity<ApiResponse> criarSecao(@RequestBody dtoSecao dto, @RequestHeader("Authorization") String token){

        token = token.split("Bearer ")[1];

        if(!(jwt.validateToken(token))){
            return ResponseEntity.status(400).body(new ApiResponse("Token inválido"));
        }

        User userToken = userRepository.findByEmail(jwt.extractEmail(token));

        SecaoDeQuestoes secao = new SecaoDeQuestoes(dto.getTitulo(), dto.getResumo(), userToken);

        secaoRepository.save(secao);
        return ResponseEntity.status(200).body(new ApiResponse("Seção criada"));
    }

    @PutMapping("/adicionar/secao/{idSecao}/{idQuest}")
    public ResponseEntity<ApiResponse> adicionarQuestaoNaSecao(@PathVariable Long idSecao,@PathVariable Long idQuest, @RequestHeader String token){
        token = token.split("Bearer ")[1];

        if(!(jwt.validateToken(token))){
            return ResponseEntity.status(400).body(new ApiResponse("Token inválido"));
        }

        User userToken = userRepository.findByEmail(jwt.extractEmail(token));
        SecaoDeQuestoes secao = secaoRepository.findById(idSecao).orElseThrow(() -> new RuntimeException("Seção não encontrada"));


        if(secao.getTitulo().isEmpty()){
            return ResponseEntity.status(400).body(new ApiResponse("Está seção nem existe primeiramente!"));
        }

        Questoes questoes = questoesRepository.findById(idQuest).orElse(null);

        if(questoes.getAlternativas().isEmpty()){
            return ResponseEntity.status(400).body(new ApiResponse("Está questão nem existe primeiramente!"));
        }

        boolean exist = secao.getQuestoesList().stream()
                .anyMatch(q ->
                        q.getEnunciado().equals(questoes.getEnunciado()) &&
                                q.getAlternativaCorreta().equals(questoes.getAlternativaCorreta())
                );

        if(exist){
            return ResponseEntity.status(400).body(new ApiResponse("Está questão já está dentro da seção", secao.getTitulo()));
        }

        if(!userToken.getId().equals(secao.getDono().getId())){
            return ResponseEntity.status(400).body(new ApiResponse("Você não pode adicionar uma questão em uma seção que não é sua!"));
        }

        secao.setQuestoesList(questoes);

        secaoRepository.save(secao);
        return ResponseEntity.status(200).body(new ApiResponse("Questão adicionada a seção", secao.getTitulo()));
    }

    @RequestMapping("/deletar/secao/questao/{idSecao}/{idQuest}")
    @PutMapping()
    public ResponseEntity<ApiResponse> deletarQuestaoDaSecao(@RequestHeader("Authorization") String token, @PathVariable Long idSecao,@PathVariable Long idQuest){
        token = token.split("Bearer ")[1];

        if(!(jwt.validateToken(token))){
            return ResponseEntity.status(400).body(new ApiResponse("Token inválido"));
        }

        User userToken = userRepository.findByEmail(jwt.extractEmail(token));
        SecaoDeQuestoes secao = secaoRepository.findById(idSecao).orElse(null);
        Questoes questoes = questoesRepository.findById(idQuest).orElse(null);

        if(!questoes.getAlternativas().isEmpty()){
            return ResponseEntity.status(400).body(new ApiResponse("Está questão nem existe primeiramente!"));
        }

        if(!userToken.getId().equals(secao.getDono().getId())){
            return ResponseEntity.status(400).body(new ApiResponse("Você não pode remover uma questão em uma seção que não é sua!"));
        }

        secao.getQuestoesList().removeIf(q -> q.getId().equals(idQuest));

        secaoRepository.save(secao);
        return ResponseEntity.status(200).body(new ApiResponse("Questão removida", secao.getQuestoesList()));
    }
}
