package com.big.code.Backend.repository;

import com.big.code.Backend.dataTransferObject.dtoRanking;
import com.big.code.Backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    boolean existsByEmail(String email);

    User findByEmail(String email);

    List<dtoRanking> findTop5ByOrderByPontuacaoDesc();
}
