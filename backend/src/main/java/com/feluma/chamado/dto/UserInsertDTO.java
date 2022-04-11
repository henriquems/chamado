package com.feluma.chamado.dto;

import com.feluma.chamado.services.validation.UserInsertValid;

@UserInsertValid
public class UserInsertDTO extends UsuarioDTO {
	private static final long serialVersionUID = 1L;

	private String password;

	UserInsertDTO() {
		super();
	}
	
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
