package com.feluma.chamado.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.feluma.chamado.entities.Subcategoria;

@Repository
public interface SubcategoriaRepository extends JpaRepository<Subcategoria, Long> {
	
	@Query("SELECT DISTINCT subCat FROM Subcategoria subCat WHERE "
			+ "(LOWER(subCat.descricao) LIKE LOWER(CONCAT('%',:descricao,'%')))")
	Page<Subcategoria> listar(String descricao, Pageable pageable);
		
}
