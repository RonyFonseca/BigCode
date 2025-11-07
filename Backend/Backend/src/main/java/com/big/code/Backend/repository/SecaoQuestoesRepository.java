package com.big.code.Backend.repository;

import com.big.code.Backend.model.SecaoDeQuestoes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SecaoQuestoesRepository extends JpaRepository<SecaoDeQuestoes, Long> {
}
