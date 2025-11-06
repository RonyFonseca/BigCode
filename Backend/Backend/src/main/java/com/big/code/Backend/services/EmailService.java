package com.big.code.Backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void enviarCodigoDeVerificacao(String email, String codigo){
        SimpleMailMessage mensage = new SimpleMailMessage();
        mensage.setFrom("ronyfonsecadelima24@gmail.com");
        mensage.setTo(email);//para quem é
        mensage.setSubject("Verificação"); //assunto a tratar
        mensage.setText("Seu código de verificação é: " +codigo+"\nVálido por 10 minutos.");
        mailSender.send(mensage);
    }

}
