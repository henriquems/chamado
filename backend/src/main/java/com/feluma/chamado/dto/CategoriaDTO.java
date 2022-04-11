package com.feluma.chamado.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.feluma.chamado.entities.Categoria;
import com.feluma.chamado.entities.Subcategoria;

public class CategoriaDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long codigo;
	
	@NotBlank
	private String descricao;
	
	@NotNull
	private List<SubcategoriaDTO> subcategorias = new ArrayList<SubcategoriaDTO>();
	
	public CategoriaDTO() {
	}

	public CategoriaDTO(Long codigo, @NotBlank String descricao) {
		this.codigo = codigo;
		this.descricao = descricao;
	}
	
	public CategoriaDTO(Categoria categoria) {
		codigo = categoria.getCodigo();
		descricao = categoria.getDescricao();
	}
	
	public CategoriaDTO(Categoria categoria, Set<Subcategoria> subcategorias) {
		this(categoria);
		subcategorias.forEach(sub -> this.subcategorias.add(new SubcategoriaDTO(sub)));
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public List<SubcategoriaDTO> getSubcategorias() {
		return subcategorias;
	}

	public void setSubcategorias(List<SubcategoriaDTO> subcategorias) {
		this.subcategorias = subcategorias;
	}

}
