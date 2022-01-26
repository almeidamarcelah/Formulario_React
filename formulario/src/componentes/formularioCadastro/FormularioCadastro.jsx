import React, { Component } from "react";
import './FormularioCadastro.css';

class FormularioCadastro extends Component {
	constructor(props){
		super(props)
		this.titulo = "";
		this.texto = "";
	}
	_handleMudancaTitulo(evento){
		evento.stopPropagation();
		this.titulo = evento.target.value
	}
	_handleMudancaTexto(evento){
		evento.stopPropagation();
		this.texto = evento.target.value
	}
	_criarNota(evento){
		evento.preventDefault();
		evento.stopPropagation();
		this.props.criarNota(this.titulo, this.texto);
	}
	render() {
		return (
			<form onSubmit={this._criarNota.bind(this)} className="form-cadastro">
				<input className="form-cadastro_input" type="text" placeholder="Título" onChange={this._handleMudancaTitulo.bind(this)} />
				<textarea  className="form-cadastro_input" rows={15} placeholder="Escreva sua nota" 
				onChange={this._handleMudancaTexto.bind(this)}/>
				<button className="form-cadastro_input form-cadastro_submit">Criar Nota</button>
			</form>
		);
	}
}

export { FormularioCadastro };