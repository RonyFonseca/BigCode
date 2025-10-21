package com.big.code.Backend.model;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "progresso_usuario")
public class ProgressoUsuario {

    @Id
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Mapeia a FK para a coluna 'user_id'
    private User user;

    @Id
    @ManyToOne
    @JoinColumn(name = "desafio_id", nullable = false) // Mapeia a FK para a coluna 'desafio_id'
    private Desafio desafio;

    // Atributos adicionais do relacionamento
    @Column(nullable = false, length = 20)
    private String status; // 'COMPLETO', 'TENTADO'

    private String melhorComplexidade; // Ex: O(n)

    private LocalDateTime dataConclusao;

}
