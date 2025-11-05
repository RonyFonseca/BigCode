package com.big.code.Backend.repository;

import com.big.code.Backend.model.Questoes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestoesRepository extends JpaRepository<Questoes, Long> {
}
