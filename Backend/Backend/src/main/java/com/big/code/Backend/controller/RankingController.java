package com.big.code.Backend.controller;


import com.big.code.Backend.dataTransferObject.ApiResponse;
import com.big.code.Backend.dataTransferObject.dtoRanking;
import com.big.code.Backend.model.User;
import com.big.code.Backend.repository.UserRepository;
import com.big.code.Backend.services.JWT;
import jakarta.persistence.Table;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ranking")
public class RankingController {
    private final UserRepository repositoryUser;
    private final JWT jwt;

    public RankingController(UserRepository repositoryUser, JWT jwt){
        this.repositoryUser = repositoryUser;
        this.jwt = jwt;
    }

    @GetMapping
    public ResponseEntity<ApiResponse> rankingAtual(@RequestHeader("Authorization") String token){
        token = token.split("Bearer ")[1];

        if(!jwt.validateToken(token)){
            return ResponseEntity.status(400).body(new ApiResponse("Token inválido"));
        }

        List<dtoRanking> users = repositoryUser.findTop5ByOrderByPontuacaoDesc();


        return ResponseEntity.status(200).body(new ApiResponse("Os melhores", users));
    }

}
