import React, { Component } from "react";
import "./styles.css";

class ListaDeCategorias extends Component {
  constructor(){
    super();
    this.state = {categorias:[]}
    this._novasCategorias = this._novasCategorias.bind(this);
  }
  componentDidMount(){
    this.props.categorias.inscrever(this._novasCategorias);
  }
  componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategorias);
  }
  _novasCategorias(categorias){
    console.log(categorias);
    this.setState({...this.state,categorias})
  }
  handleEventoInput(e){
    if(e.key === 'Enter'){
      let valorCategoria = e.target.value;
      this.props.adicionarCategoria(valorCategoria);
    }
  }
  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.state.categorias.map((categoria, index) => {
            return <li key={index} className="lista-categorias_item">{categoria}</li>
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this.handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
