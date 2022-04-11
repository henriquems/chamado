package com.feluma.chamado.repositories;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.feluma.chamado.entities.Categoria;
import com.feluma.chamado.entities.Subcategoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
	
	@Query("SELECT DISTINCT obj FROM Categoria obj INNER JOIN obj.subcategorias cats WHERE "
			+ "(COALESCE(:categorias) IS NULL OR cats IN :categorias) AND "
			+ "(LOWER(obj.descricao) LIKE LOWER(CONCAT('%',:descricao,'%'))) ")
	Page<Categoria> listar(List<Subcategoria> categorias, String descricao, Pageable pageable);
	
	@Query("SELECT obj FROM Categoria obj JOIN FETCH obj.subcategorias WHERE obj IN :categorias")
	List<Categoria> listarCategoriasComSubcategorias(List<Categoria> categorias);
}
