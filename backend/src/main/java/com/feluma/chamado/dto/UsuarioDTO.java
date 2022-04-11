package com.feluma.chamado.dto;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import com.feluma.chamado.entities.Permissao;
import com.feluma.chamado.entities.Usuario;
import com.feluma.chamado.entities.enuns.Status;

public class UsuarioDTO implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long codigo;
	
	@NotBlank
	private String nome;
	
	@NotBlank
	@Email
	private String email;
	
	private String senha;
	
	@NotBlank
	private Status status;
	
	@NotNull
	private Set<PermissaoDTO> permissoes = new HashSet<PermissaoDTO>();
	
	public UsuarioDTO() {
	}

	public UsuarioDTO(Long codigo, String nome, String email, String senha, Status status) {
		this.codigo = codigo;
		this.nome = nome;
		this.email = email;
		this.senha = senha;
		this.status = status;
	}
	
	public UsuarioDTO(Usuario usuario) {
		codigo = usuario.getCodigo();
		nome = usuario.getNome();
		email = usuario.getEmail();
		senha = usuario.getSenha();
		status = usuario.getStatus();
	}
	
	public UsuarioDTO(Usuario usuario, Set<Permissao> permissoes) {
		this(usuario);
		permissoes.forEach(per -> this.permissoes.add(new PermissaoDTO(per)));
	}

	public Long getCodigo() {
		return codigo;
	}

	public void setCodigo(Long codigo) {
		this.codigo = codigo;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Status getStatus() {
		return status;
	}

	public void setStatus(Status status) {
		this.status = status;
	}

	public Set<PermissaoDTO> getPermissoes() {
		return permissoes;
	}

	public void setPermissoes(Set<PermissaoDTO> permissoes) {
		this.permissoes = permissoes;
	}
	
}
