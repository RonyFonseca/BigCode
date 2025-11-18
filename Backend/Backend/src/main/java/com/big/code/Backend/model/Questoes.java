package com.big.code.Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;

@Entity
@Table(name = "questoes")
public class Questoes implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String enunciado;

    @Column(nullable = false)
    private ArrayList<String> alternativas = new ArrayList<>();

    @Column(nullable = false)
    private String alternativaCorreta;

    @Column(nullable = false)
    @JsonIgnore
    private ArrayList<Long> respostas= new ArrayList<>();

    //outra ponta do relacionamento n - 1
    @ManyToOne
    @JoinColumn(name="dono_id")
    @JsonIgnoreProperties({"senha","tipo","email","id"})
    private User dono;

    public ArrayList<Long> getRespostas() {
        return respostas;
    }

    public void setRespostas(Long id) {
        this.respostas.add(id);
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEnunciado() {
        return enunciado;
    }

    public void setEnunciado(String enunciado) {
        this.enunciado = enunciado;
    }

    public ArrayList<String> getAlternativas() {
        return alternativas;
    }

    public void setAlternativas(ArrayList<String> alternativas) {
        this.alternativas = alternativas;
    }

    public String getAlternativaCorreta() {
        return alternativaCorreta;
    }

    public void setAlternativaCorreta(String alternativaCorreta) {
        this.alternativaCorreta = alternativaCorreta;
    }

    public User getDono() {
        return dono;
    }

    public void setDono(User dono) {
        this.dono = dono;
    }
}