package com.feluma.chamado.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.feluma.chamado.dto.UsuarioDTO;
import com.feluma.chamado.services.UsuarioService;

@RestController
@RequestMapping(value = "/usuarios")
public class UsuarioResource {

	@Autowired
	private UsuarioService usuarioService;
	
	@GetMapping
	public ResponseEntity<Page<UsuarioDTO>> listar(Pageable pageable) {
		Page<UsuarioDTO> list = usuarioService.listar(pageable);		
		return ResponseEntity.ok().body(list);
	}

} 