package com.feluma.chamado.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feluma.chamado.dto.PermissaoDTO;
import com.feluma.chamado.services.PermissaoService;

@RestController
@RequestMapping(value = "/permissoes")
public class PermissaoResource {

	@Autowired
	private PermissaoService service;
	
	@GetMapping
	public ResponseEntity<Page<PermissaoDTO>> listar(Pageable pageable) {
		Page<PermissaoDTO> list = service.listar(pageable);		
		return ResponseEntity.ok().body(list);
	}

} 
