package com.big.code.Backend.model;


import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name="dasafios")
public class Desafio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idDesafio;

    @Column(nullable = false, length = 100)
    private String titulo;

    @Column(nullable = false, length = 400)
    private String descricao;

    @Column(nullable = false)
    private String complexidadeEsperada;

    @Column(nullable = false)
    private int nivel; //1 - 10xp 2-20xp 3-30px

    @OneToMany(mappedBy = "Desafio", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<ProgressoUsuario> progressos;

    public Long getIdDesafio() {
        return idDesafio;
    }

    public void setIdDesafio(Long idDesafio) {
        this.idDesafio = idDesafio;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getComplexidadeEsperada() {
        return complexidadeEsperada;
    }

    public void setComplexidadeEsperada(String complexidadeEsperada) {
        this.complexidadeEsperada = complexidadeEsperada;
    }

    public int getNivel() {
        return nivel;
    }

    public void setNivel(int nivel) {
        this.nivel = nivel;
    }

    public List<ProgressoUsuario> getProgressos() {
        return progressos;
    }

    public void setProgressos(List<ProgressoUsuario> progressos) {
        this.progressos = progressos;
    }
}
