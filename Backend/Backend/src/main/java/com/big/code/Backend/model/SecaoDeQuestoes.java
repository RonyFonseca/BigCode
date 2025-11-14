
package com.big.code.Backend.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "secaoDeQuestoes")
public class SecaoDeQuestoes {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String titulo;

    @Column(nullable = false)
    private String resumo;

    private ArrayList<Questoes> questoesList = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name="dono_id")
    @JsonIgnoreProperties({"senha","tipo","email","id",})
    private User dono;

    public SecaoDeQuestoes(){}

    public SecaoDeQuestoes(String titulo, String resumo, User dono) {
        this.titulo = titulo;
        this.resumo = resumo;
        this.dono = dono;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getResumo() {
        return resumo;
    }

    public void setResumo(String resumo) {
        this.resumo = resumo;
    }

    public ArrayList<Questoes> getQuestoesList() {
        return questoesList;
    }

    public void setQuestoesList(Questoes questao) {
        this.questoesList.add(questao);
    }

    public User getDono() {
        return dono;
    }

    public void setDono(User dono) {
        this.dono = dono;
    }
}
