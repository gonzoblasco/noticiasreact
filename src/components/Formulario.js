import React, { Component } from "react";
import PropTypes from "prop-types";

class Formulario extends Component {
  state = { categoria: "" };

  componentDidMount() {
    this.setState({
      categoria: "general"
    });
  }

  handleChange = e => {
    this.setState({
      categoria: e.target.value
    }, () => {
      this.props.consultarNoticias(this.state.categoria);
    });
  };

  render() {
    return (
      <div className="buscador row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Encuentra Noticias por Categoría</h2>

            <div className="input-field s12 m8 offset-m2">
              <select onChange={ this.handleChange }>
                <option value="general">General</option>
                <option value="science">Ciencia</option>
                <option value="sports">Deportes</option>
                <option value="entertainment">Entretenimiento</option>
                <option value="business">Negocios</option>
                <option value="health">Salud</option>
                <option value="technology">Tecnologia</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Formulario.propTypes = {
  consultarNoticias: PropTypes.func.isRequired
};

export default Formulario;
