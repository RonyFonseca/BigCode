package com.big.code.Backend.dataTransferObject;

import com.big.code.Backend.model.User;
import com.big.code.Backend.model.enums.TipoUsuario;

public class dtoConfirmacao {
    private String nickname;
    private String senha;
    private String email;
    private TipoUsuario tipo;
    private String codigo;

    public TipoUsuario getTipo() {
        return tipo;
    }

    public void setTipo(TipoUsuario tipo) {
        this.tipo = tipo;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }
}
