package com.feluma.chamado.dto;

import java.io.Serializable;

import javax.validation.constraints.NotBlank;

import com.feluma.chamado.entities.Permissao;

public class PermissaoDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long codigo;
	
	@NotBlank
	private String descricao;

	public PermissaoDTO() {
	}

	public PermissaoDTO(Long codigo, String descricao) {
		this.codigo = codigo;
		this.descricao = descricao;
	}

	public PermissaoDTO(Permissao perfil) {
		codigo = perfil.getCodigo();
		descricao = perfil.getDescricao();
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

}
