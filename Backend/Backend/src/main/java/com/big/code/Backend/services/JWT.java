package com.big.code.Backend.services;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JWT {
    private final String SECRET = "awsdawdsjawnsdawd6564dsa53s3a2s321a5a3sdasdawsdagwfsgd";
    private final Key secretKey = Keys.hmacShaKeyFor(SECRET.getBytes());

    public String generateToken(String email){
        return Jwts.builder().setSubject(email).setIssuedAt(new Date()).signWith(secretKey).compact();
    }

    public String extractEmail(String token){
        return Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateToken(String token){
        try {
            Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJwt(token);
            return true;
        }catch (Exception e){
            return false;
        }
    }
}
