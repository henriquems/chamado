package com.feluma.chamado.dto;

import java.util.List;
import java.util.Objects;

import javax.validation.constraints.NotNull;

import com.feluma.chamado.entities.Subcategoria;

public class SubcategoriaDTO {
	
	private Long codigo;
	private String descricao;
	
	@NotNull
	private List<CategoriaDTO> categorias;
	
	public SubcategoriaDTO() {
	}

	public SubcategoriaDTO(Long codigo, String descricao) {
		this.codigo = codigo;
		this.descricao = descricao;
	}

	public SubcategoriaDTO(Subcategoria subcategoria) {
		codigo = subcategoria.getCodigo();
		descricao = subcategoria.getDescricao();
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

	@Override
	public int hashCode() {
		return Objects.hash(codigo);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		SubcategoriaDTO other = (SubcategoriaDTO) obj;
		return Objects.equals(codigo, other.codigo);
	}

}
