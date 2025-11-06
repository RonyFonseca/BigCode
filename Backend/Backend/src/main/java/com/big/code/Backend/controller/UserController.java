package com.big.code.Backend.controller;

import com.big.code.Backend.dataTransferObject.ApiResponse;
import com.big.code.Backend.dataTransferObject.dtoConfirmacao;
import com.big.code.Backend.dataTransferObject.dtoUser;
import com.big.code.Backend.model.User;
import com.big.code.Backend.model.enums.TipoUsuario;
import com.big.code.Backend.repository.UserRepository;
import com.big.code.Backend.services.EmailCodeService;
import com.big.code.Backend.services.JWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private final UserRepository repository;

    @Autowired
    private final JWT jwt;

    @Autowired
    private EmailCodeService emailCodeService;

    public UserController(UserRepository repository,JWT jwt){
        this.repository = repository;
        this.jwt = jwt;
    }

    @RequestMapping("/create")
    @PostMapping
    public ResponseEntity<ApiResponse> inicioCriacao(@RequestBody User user){
        if(repository.existsByEmail(user.getEmail())){
            return ResponseEntity.status(409).body(new ApiResponse("Este usuário já existe !"));
        }

        emailCodeService.gerarEEnviarCodigo(user.getEmail());
        return ResponseEntity.status(200).body(new ApiResponse("Foi enviado um email para: "+user.getEmail()));
    }

    @RequestMapping("/confirm/create")
    @PostMapping
    public ResponseEntity<ApiResponse> finalCriacao(@RequestBody dtoConfirmacao dto){

        String emailTag = dto.getEmail().split("@")[1];

        String nivel = "";
        TipoUsuario tipo =null;

        if(emailTag.equals("upe.br")){//Validação do usuário, validar email
            nivel = "UPE";
        }else{
            nivel = "Iniciante";
        }

        if(dto.getTipo().equals(TipoUsuario.ADM) || dto.getTipo().equals(TipoUsuario.ALUNO)){
            tipo = dto.getTipo();
        }

        User user = new User(dto.getNickname(), dto.getEmail(), dto.getSenha(), tipo, nivel);
        String codigo = dto.getCodigo();

        boolean emailValido = emailCodeService.verificarCodigo(user.getEmail(), codigo);

        if(!(emailValido)){
            return ResponseEntity.status(409).body(new ApiResponse("Email inválido ou expirado !"));
        }

        user.setPontuacao(0);

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
