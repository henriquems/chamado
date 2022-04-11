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

import com.feluma.chamado.dto.CategoriaDTO;
import com.feluma.chamado.services.CategoriaService;

@RestController
@RequestMapping(value = "/categorias")
public class CategoriaResource {

	@Autowired
	private CategoriaService categoriaService;
	
	@GetMapping
	public ResponseEntity<Page<CategoriaDTO>> listar(
			@RequestParam(value = "descricao", defaultValue = "") String descricao,
			@RequestParam(value = "codigoSubcategoria", defaultValue = "0") Long codigoSubcategoria,
			Pageable pageable) {
		Page<CategoriaDTO> list = categoriaService.listar(codigoSubcategoria, descricao.trim(), pageable);		
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{codigo}")
	public ResponseEntity<CategoriaDTO> recuperar(@PathVariable Long codigo) {
		CategoriaDTO dto = categoriaService.recuperar(codigo);
		return ResponseEntity.ok().body(dto);
	}
	
	@PostMapping
	public ResponseEntity<CategoriaDTO> cadastrar(@RequestBody CategoriaDTO dto) {
		dto = categoriaService.cadastrar(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{codigo}")
				.buildAndExpand(dto.getCodigo()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
	@PutMapping(value = "/{codigo}")
	public ResponseEntity<CategoriaDTO> alterar(@PathVariable Long codigo, @RequestBody CategoriaDTO dto) {
		dto = categoriaService.alterar(codigo, dto);
		return ResponseEntity.ok().body(dto);
	}

	@DeleteMapping(value = "/{codigo}")
	public ResponseEntity<Void> excluir(@PathVariable Long codigo) {
		categoriaService.excluir(codigo);
		return ResponseEntity.noContent().build();
	}

}