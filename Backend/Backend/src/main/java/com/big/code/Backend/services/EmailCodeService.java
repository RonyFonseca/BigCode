package com.big.code.Backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.time.LocalDateTime;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;


@Service
public class EmailCodeService {

    @Autowired
    private EmailService emailService;

    private final Map<String, CodigoInfo> codigos = new ConcurrentHashMap<>();

    public void gerarEEnviarCodigo(String email){
        String codigo = gerarCodigo();
        codigos.put(email, new CodigoInfo(codigo, LocalDateTime.now().plusMinutes(10)));
        emailService.enviarCodigoDeVerificacao(email, codigo);
    }

    public boolean verificarCodigo(String email,String codigoDigitado){
        CodigoInfo info = codigos.get(email);
        if(info==null){
            return false;
        }

        boolean valido = info.codigo.equals(codigoDigitado) && info.expiraEm().isAfter(LocalDateTime.now());

        if(valido){
            codigos.remove(email);
        }

        return valido;
    }

    public String gerarCodigo(){
        return String.valueOf(100000 + new Random().nextInt(900000));
    }

    private record CodigoInfo(String codigo, LocalDateTime expiraEm){}

}
