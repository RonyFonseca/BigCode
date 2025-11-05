package com.big.code.Backend.controller;

import com.big.code.Backend.dataTransferObject.ApiResponse;
import com.big.code.Backend.dataTransferObject.dtoUser;
import com.big.code.Backend.model.User;
import com.big.code.Backend.model.enums.TipoUsuario;
import com.big.code.Backend.repository.UserRepository;
import com.big.code.Backend.services.JWT;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserRepository repository;
    private final JWT jwt;

    public UserController(UserRepository repository,JWT jwt){
        this.repository = repository;
        this.jwt = jwt;
    }

    @RequestMapping("/create/teacher")
    @PostMapping
    public ResponseEntity<ApiResponse> createUserAdm(@RequestBody User user){

        String emailTag = user.getEmail().split("@")[1];

        if(emailTag.equals("upe.br")){//Validação do usuário, validar email
            user.setNivel("Professor UPE");
        }else{
            user.setNivel("Professor");
        }

        user.setPontuacao(0);
        user.setTipo(TipoUsuario.ADM);

        if(repository.existsByEmail(user.getEmail())) {
            return ResponseEntity.status(409).body(new ApiResponse("Este usuário já existe !"));
        }

        BCryptPasswordEncoder senhaHash = new BCryptPasswordEncoder();
        String novaSenha = senhaHash.encode(user.getSenha());
        user.setSenha(novaSenha);

        repository.save(user);
        String token = jwt.generateToken(user.getEmail());

        return ResponseEntity.status(200).body(new ApiResponse("Usuário criado com sucesso !", token));
    }

    @RequestMapping("/create")
    @PostMapping
    public ResponseEntity<ApiResponse> createUser(@RequestBody User user){

        String emailTag = user.getEmail().split("@")[1];

        if(emailTag.equals("upe.br")){//Validação do usuário, validar email
            user.setNivel("UPE");
        }else{
            user.setNivel("Iniciante");
        }

        user.setPontuacao(0);
        user.setTipo(TipoUsuario.ALUNO);

        if(repository.existsByEmail(user.getEmail())) {
            return ResponseEntity.status(409).body(new ApiResponse("Este usuário já existe !"));
        }

        BCryptPasswordEncoder senhaHash = new BCryptPasswordEncoder();
        String novaSenha = senhaHash.encode(user.getSenha());
        user.setSenha(novaSenha);

        repository.save(user);
        String token = jwt.generateToken(user.getEmail());

        return ResponseEntity.status(200).body(new ApiResponse("Usuário criado com sucesso !", token));
    }

    @GetMapping
    public ResponseEntity<?> getAllUsers(){
        return ResponseEntity.status(200).body(repository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id){
        return ResponseEntity.status(200).body(repository.findById(id));
    }

    @PostMapping("/login")
    public ResponseEntity<ApiResponse> login(@RequestBody User user){

        if(!(repository.existsByEmail(user.getEmail()))){
            return ResponseEntity.status(400).body(new ApiResponse("Usuário não encontrado"));
        }

        User usuarioDoBanco = repository.findByEmail(user.getEmail());

        BCryptPasswordEncoder senhaHash = new BCryptPasswordEncoder();
        if(!(senhaHash.matches(user.getSenha(), usuarioDoBanco.getSenha()))){
            return ResponseEntity.status(400).body(new ApiResponse("Senha incorreta"));
        }

        return ResponseEntity.status(200).body(new ApiResponse("Logado",jwt.generateToken(usuarioDoBanco.getEmail())));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<ApiResponse> deleteUserById(@PathVariable Long id, @RequestHeader String token){
        token = token.split("Bearer ")[1];

        if(!(jwt.validateToken(token))){
            return ResponseEntity.status(400).body(new ApiResponse("Token inválido"));
        }

        User userToken = repository.findByEmail(jwt.extractEmail(token));

        Optional<User> usuarioDoBanco = repository.findById(id);
        if(usuarioDoBanco.isEmpty() || !usuarioDoBanco.get().getId().equals(userToken.getId())){
            return ResponseEntity.status(400).body(new ApiResponse("Você não pode remover uma conta que não é sua"));
        }
        repository.deleteById(userToken.getId());
        return ResponseEntity.status(200).body(new ApiResponse("Usuário deletado!"));

    }

    @PutMapping
    public ResponseEntity<ApiResponse> updateUser(@RequestBody dtoUser user, @RequestHeader String token){
        token = token.split("Bearer ")[1];

        if(!(jwt.validateToken(token))){
            return ResponseEntity.status(400).body(new ApiResponse("Token inválido"));
        }

        User userToken = repository.findByEmail(jwt.extractEmail(token));

        if(user.getNickname() != null && !user.getNickname().isBlank()){
            userToken.setNickname(user.getNickname());
        }

        repository.save(userToken);

        return ResponseEntity.status(200).body(new ApiResponse("Atualizado com sucesso !"));
    }

}
