package com.feluma.chamado.services;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.feluma.chamado.dto.CategoriaDTO;
import com.feluma.chamado.entities.Categoria;
import com.feluma.chamado.entities.Subcategoria;
import com.feluma.chamado.repositories.CategoriaRepository;
import com.feluma.chamado.repositories.SubcategoriaRepository;
import com.feluma.chamado.services.exception.DatabaseException;
import com.feluma.chamado.services.exception.ResourceNotFoundException;

@Service
public class CategoriaService {
	
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Autowired
	private SubcategoriaRepository subcategoriaRepository;
	
	@Transactional(readOnly = true)
	public Page<CategoriaDTO> listar(Long codigoSubcategoria, String descricao, Pageable pageable) {
		List<Subcategoria> subcategorias = (codigoSubcategoria == 0) ? null : Arrays.asList(subcategoriaRepository.getOne(codigoSubcategoria));
		Page<Categoria> page = categoriaRepository.listar(subcategorias, descricao, pageable);
		categoriaRepository.listarCategoriasComSubcategorias(page.getContent());
		return page.map(x -> new CategoriaDTO(x, x.getSubcategorias()));
	}
	
	@Transactional(readOnly = true)
	public CategoriaDTO recuperar(Long id) {
		Optional<Categoria> obj = categoriaRepository.findById(id);
		Categoria categoria = obj.orElseThrow(() -> new ResourceNotFoundException("Entidade não encontrada!"));
		return new CategoriaDTO(categoria);
	}

	@Transactional
	public CategoriaDTO cadastrar(CategoriaDTO dto) {
		Categoria categoria = new Categoria();
		categoria.setDescricao(dto.getDescricao());
		categoria = categoriaRepository.save(categoria);
		return new CategoriaDTO(categoria);
	}
	
	@Transactional
	public CategoriaDTO alterar(Long codigo, CategoriaDTO dto) {
		try {
			Categoria categoria = categoriaRepository.getOne(codigo);
			categoria.setDescricao(dto.getDescricao());
			categoria = categoriaRepository.save(categoria);
			return new CategoriaDTO(categoria);
		}
		catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Código não encontrado " + codigo);
		}		
	}

	public void excluir(Long codigo) {
		try {
			categoriaRepository.deleteById(codigo);
		}
		catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Código não encontrado " + codigo);
		}
		catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integridade violada!");
		}
	}
	
}
