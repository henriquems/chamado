package com.feluma.chamado.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.feluma.chamado.entities.Permissao;

@Repository
public interface PermissaoRepository extends JpaRepository<Permissao, Long> {

}
