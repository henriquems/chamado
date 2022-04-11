package com.feluma.chamado.services;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.feluma.chamado.dto.SubcategoriaDTO;
import com.feluma.chamado.entities.Subcategoria;
import com.feluma.chamado.repositories.SubcategoriaRepository;
import com.feluma.chamado.services.exception.DatabaseException;
import com.feluma.chamado.services.exception.ResourceNotFoundException;

@Service
public class SubcategoriaService {

	@Autowired
	private SubcategoriaRepository subcategoriaRepository;
	
	@Transactional(readOnly = true)
	public Page<SubcategoriaDTO> listar(String descricao, Pageable pageable) {
		Page<Subcategoria> page = subcategoriaRepository.listar(descricao, pageable);
		return page.map(x -> new SubcategoriaDTO(x));
	}
	
	@Transactional(readOnly = true)
	public SubcategoriaDTO recuperar(Long id) {
		Optional<Subcategoria> obj = subcategoriaRepository.findById(id);
		Subcategoria subcategoria = obj.orElseThrow(() -> new ResourceNotFoundException("Entidade não encontrada"));
		return new SubcategoriaDTO(subcategoria);
	}

	@Transactional
	public SubcategoriaDTO cadastrar(SubcategoriaDTO dto) {
		Subcategoria subcategoria = new Subcategoria();
		subcategoria.setDescricao(dto.getDescricao());
		subcategoria = subcategoriaRepository.save(subcategoria);
		return new SubcategoriaDTO(subcategoria);
	}
	
	@Transactional
	public SubcategoriaDTO alterar(Long codigo, SubcategoriaDTO dto) {
		try {
			Subcategoria subcategoria = subcategoriaRepository.getOne(codigo);
			subcategoria.setDescricao(dto.getDescricao());
			subcategoria = subcategoriaRepository.save(subcategoria);
			return new SubcategoriaDTO(subcategoria);
		}
		catch (EntityNotFoundException e) {
			throw new ResourceNotFoundException("Código não encontrado " + codigo);
		}		
	}

	public void excluir(Long codigo) {
		try {
			subcategoriaRepository.deleteById(codigo);
		}
		catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException("Código não encontrado " + codigo);
		}
		catch (DataIntegrityViolationException e) {
			throw new DatabaseException("Integridade violada!");
		}
	}

}

