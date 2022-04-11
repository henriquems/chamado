package com.feluma.chamado.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.feluma.chamado.dto.PermissaoDTO;
import com.feluma.chamado.entities.Permissao;
import com.feluma.chamado.repositories.PermissaoRepository;

@Service
public class PermissaoService {

	@Autowired
	private PermissaoRepository permissaoRepository;
	
	@Transactional(readOnly = true)
	public Page<PermissaoDTO> listar(Pageable pageable) {
		Page<Permissao> list = permissaoRepository.findAll(pageable);
		return list.map(x -> new PermissaoDTO(x));
	}

}
