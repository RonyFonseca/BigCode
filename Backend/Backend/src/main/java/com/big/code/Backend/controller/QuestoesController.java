package com.big.code.Backend.controller;


import com.big.code.Backend.dataTransferObject.ApiResponse;
import com.big.code.Backend.dataTransferObject.dtoQuest;
import com.big.code.Backend.model.enums.TipoUsuario;
import com.big.code.Backend.model.Questoes;
import com.big.code.Backend.model.User;
import com.big.code.Backend.repository.QuestoesRepository;
import com.big.code.Backend.repository.UserRepository;
import com.big.code.Backend.services.JWT;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Map;

@RestController
@RequestMapping("/questoes")
public class QuestoesController {
    private final QuestoesRepository repositoryQuest;
    private final UserRepository repositoryUser;
    private final JWT jwt;

    public QuestoesController(QuestoesRepository repositoryQuest, UserRepository repositoryUser, JWT jwt){
        this.repositoryQuest = repositoryQuest;
        this.repositoryUser = repositoryUser;
        this.jwt = jwt;
    }

    @RequestMapping("/create")
    @PostMapping
    public ResponseEntity<ApiResponse> criarQuestao(@RequestBody dtoQuest dto,  @RequestHeader("Authorization") String token){

        Questoes questao = new Questoes();
        token = token.split("Bearer ")[1];

        if(!jwt.validateToken(token)){
            return ResponseEntity.status(400).body(new ApiResponse("Token inválido"));
        };

        User userToken = repositoryUser.findByEmail(jwt.extractEmail(token));

        if(!(userToken.getTipo().equals(TipoUsuario.ADM))){
            return ResponseEntity.status(400).body(new ApiResponse("Usuário sem poder para tal ato !"));
        }

        questao.setEnunciado(dto.getEnunciado());
        questao.setAlternativas(dto.getAlternativas());
        questao.setAlternativaCorreta(dto.getAlternativaCorreta());
        questao.setDono(userToken);

        System.out.println(questao);

        //Validar
        //questão está com tudo completo

        repositoryQuest.save(questao);

        return ResponseEntity.status(201).body(new ApiResponse("Questão criada com sucesso !", questao));

    }

    @RequestMapping("/delete/{id}")
    @DeleteMapping
    public ResponseEntity<ApiResponse> deletarQuestao(@PathVariable Long id, @RequestHeader String token){
        token = token.split("Bearer ")[1];
        if(!(jwt.validateToken(token))){
            return ResponseEntity.status(400).body(new ApiResponse("Token inválido"));
        }

        User userToken = repositoryUser.findByEmail(jwt.extractEmail(token));
        Questoes questao = repositoryQuest.findById(id).orElse(null);

        if(!(userToken.getId().equals(questao.getDono().getId()))){
            return ResponseEntity.status(400).body(new ApiResponse("Você não pode deletar uma questão que não é sua !"));
        }

        repositoryQuest.deleteById(id);
        return ResponseEntity.status(200).body(new ApiResponse("Questão removida com sucesso !"));
    }

    @RequestMapping("/atualizar/{id}")
    @PutMapping
    public ResponseEntity<ApiResponse> atualizarQuestao(@PathVariable Long id, @RequestBody Questoes questao, @RequestHeader String token){
        token = token.split("Bearer ")[1];
        if(!(jwt.validateToken(token))){
            return ResponseEntity.status(400).body(new ApiResponse("Token inválido"));
        }

        User userToken = repositoryUser.findByEmail(jwt.extractEmail(token));
        Questoes questaoDoBanco = repositoryQuest.findById(id).orElse(null);

        if(!(userToken.getId().equals(questaoDoBanco.getDono().getId()))){
            return ResponseEntity.status(400).body(new ApiResponse("Você não pode deletar uma questão que não é sua !"));
        }

        questaoDoBanco.setAlternativaCorreta(questao.getAlternativaCorreta());
        questaoDoBanco.setAlternativas(questao.getAlternativas());
        questaoDoBanco.setEnunciado(questao.getEnunciado());

        repositoryQuest.save(questaoDoBanco);
        return ResponseEntity.status(200).body(new ApiResponse("Questão atualizada com sucesso !"));

    }

    @RequestMapping("/{id}")
    @GetMapping
    public ResponseEntity<?> pegarQuestao(@PathVariable Long id, @RequestHeader String token){
        token = token.split("Bearer ")[1];

        if(!(jwt.validateToken(token))){
            return ResponseEntity.status(400).body(new ApiResponse("Token inválido"));
        }

        return ResponseEntity.status(200).body(repositoryQuest.findById(id));
    }

    @RequestMapping("/responder/{id}")
    @PutMapping
    public ResponseEntity<ApiResponse> responderQuestao(@PathVariable Long id,  @RequestHeader("Authorization") String token, @RequestBody Map<String, String> body){
        token = token.split("Bearer ")[1];

        if(!(jwt.validateToken(token))){
            return ResponseEntity.status(400).body(new ApiResponse("Token inválido"));
        }

        Questoes questaoDoBanco = repositoryQuest.findById(id).orElse(null);
        User userToken = repositoryUser.findByEmail(jwt.extractEmail(token));

        User dono = repositoryUser.findById(questaoDoBanco.getDono().getId()).orElse(null);

// 1. O dono não pode responder a própria questão.
        if (!(dono.getId().equals(userToken.getId()))) {

            // 2. Verifica se a resposta selecionada está na lista de respostas corretas da questão.
            boolean respostaCorreta = questaoDoBanco.getRespostas().contains(questaoDoBanco);

            // 3. Calcula a pontuação APENAS UMA VEZ.
            if (respostaCorreta) {
                // Resposta Correta: Recompensa
                userToken.setPontuacao(userToken.getPontuacao() + 20); // Pontuação maior
            } else {
                // Resposta Incorreta: Penalidade ou pontuação mínima (ou zero)
                userToken.setPontuacao(userToken.getPontuacao() + 1);  // Pontuação mínima (ex: por tentar)
            }

            // 4. Recompensa o Dono da Questão (se alguém respondeu)
            dono.setPontuacao(dono.getPontuacao() + 30);

            // 5. Opcional: Salvar ambas as entidades (userToken e dono) no banco.
        }

        if(!(body.get("alternativaUsuario").toLowerCase().equals(questaoDoBanco.getAlternativaCorreta().toLowerCase()))) {
            return ResponseEntity.status(400).body(new ApiResponse("Resposta incorreta"));
        }
        repositoryUser.save(dono);
        repositoryUser.save(userToken);
        return ResponseEntity.status(200).body(new ApiResponse("Resposta Correta !"));
    }

    @GetMapping
    public ResponseEntity<?> pegarTodasQuestoes(){
        return ResponseEntity.status(200).body(repositoryQuest.findAll());
    }


}
