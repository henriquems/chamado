package com.feluma.chamado.resources;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.feluma.chamado.dto.SubcategoriaDTO;
import com.feluma.chamado.services.SubcategoriaService;

@RestController
@RequestMapping(value = "/subcategorias")
public class SubcategoriaResource {
	
	@Autowired
	private SubcategoriaService subcategoriaService;
	
	@GetMapping
	public ResponseEntity<Page<SubcategoriaDTO>> listar(
			@RequestParam(value = "descricao", defaultValue = "") String descricao,
			Pageable pageable) {
		Page<SubcategoriaDTO> list = subcategoriaService.listar(descricao.trim(), pageable);		
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{codigo}")
	public ResponseEntity<SubcategoriaDTO> recuperar(@PathVariable Long codigo) {
		SubcategoriaDTO dto = subcategoriaService.recuperar(codigo);
		return ResponseEntity.ok().body(dto);
	}
	
	@PostMapping
	public ResponseEntity<SubcategoriaDTO> cadastrar(@RequestBody SubcategoriaDTO dto) {
		dto = subcategoriaService.cadastrar(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{codigo}")
				.buildAndExpand(dto.getCodigo()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	@PutMapping(value = "/{codigo}")
	public ResponseEntity<SubcategoriaDTO> alterar(@PathVariable Long codigo, @RequestBody SubcategoriaDTO dto) {
		dto = subcategoriaService.alterar(codigo, dto);
		return ResponseEntity.ok().body(dto);
	}

	@DeleteMapping(value = "/{codigo}")
	public ResponseEntity<Void> excluir(@PathVariable Long codigo) {
		subcategoriaService.excluir(codigo);
		return ResponseEntity.noContent().build();
	}

}