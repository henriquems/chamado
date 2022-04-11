package com.feluma.chamado.entities.enuns;

public enum Status {
	
	ATIVO("SIM", "#00BFFF"),
	INATIVO("NÃO", "#DF0101");
	
	private String descricao;
	private String cor;
	
	private Status(String descricao, String cor) {
		this.descricao = descricao;
		this.cor = cor;
	}

	public String getDescricao() {
		return descricao;
	}

	public String getCor() {
		return cor;
	}
	
}
