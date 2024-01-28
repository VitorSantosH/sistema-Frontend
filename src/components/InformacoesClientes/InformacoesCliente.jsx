import React, { useState, useEffect } from 'react';
import './InformacoesCliente.css';
import connect from '../../config/connect';
import Swal from "sweetalert2";


const InformacoesCliente = (props) => {


  const [mostrar, setMostrar] = useState(props.mostrar);
  const [state, setState] = useState({
    USER: props.campo,
    STATUS: props.campo.STATUS,
    TELEFONE: props.campo.TELEFONE,
    loading: false
  })

  useEffect(() => {
    setMostrar(props.mostrar)
  }, [props.mostrar]);


  async function editProposta() {

    const response = await connect.editarProposta(state)

    console.log(response)

    Swal.fire({
      title: response.data.message,
      icon: "success",
    })

    setState(prevState => ({
      ...prevState,
      loading: false
    }))

    return props.setMostrar()

  }

  return (

    <div className={`informacoes-cliente ${mostrar ? 'mostrar' : ''}`}>

      <div
        className="containerX"

      >
        <div onClick={e => {
          return props.setMostrar()
        }}>
          <i className="fa fa-times"></i>
        </div>
      </div>


      <div className="informacao">
        <strong>CLIENTE:</strong> {props.campo.CLIENTE}
      </div>
      <div className="informacao">
        <strong>COMISSAO:</strong> {props.campo.COMISSAO}
      </div>

      <div className="informacao">
        <strong>CPF:</strong> {props.campo.CPF}
      </div>
      <div className="informacao">
        <strong>ID:</strong> {props.campo.ID}
      </div>
      <div className="informacao">
        <strong>Nº CONTRATO:</strong> {props.campo['Nº CONTRATO']}
      </div>
      <div className="informacao">
        <strong>SUPERVISOR:</strong> {props.campo.SUPERVISOR}
      </div>
      <div className="informacao">
        <strong>CADASTRADO POR:</strong> {props.campo['CADASTRADO POR']}
      </div>
      <div className="informacao">
        <strong>Unidade:</strong> {props.campo.unidade}
      </div>

      <div className="inputContainer">

        <div className="inputItem">

          <label htmlFor="cpf">
            STATUS PROPOSTA
          </label>

          <section className="pt2">

            <div className="cpf">
              <input
                type="text"
                name=""
                id=""
                value={state.STATUS || props.campo.STATUS}
                onChange={e => {

                  return setState({
                    ...state,
                    STATUS: e.target.value
                  });

                }}

              />


            </div>


          </section>

        </div>
      </div>

      <div className="inputContainer">

        <div className="inputItem">

          <label htmlFor="cpf">
            TELEFONE
          </label>

          <section className="pt2">

            <div className="cpf">
              <input
                type="text"
                name=""
                id=""
                value={state.TELEFONE || props.campo.TELEFONE}
                onChange={e => {

                  return setState({
                    ...state,
                    TELEFONE: e.target.value
                  });

                }}

              />


            </div>


          </section>

        </div>



      </div>

      <div
        className="btn"
        onClick={e => {

          setState(prevState => ({
            ...prevState,
            loading: !state.loading
          }))
          return editProposta();

        }}

      >
        <div className="btnConsultar">
          {!state.loading && (
            <span>
              Salvar altecaçôes
            </span>
          )}
          {state.loading && (
            <div className="contendSpinner">
              <div id="loading-login" className="spinner">
              </div>
            </div>
          )}
        </div>

      </div>

    </div>

  );
};

export default InformacoesCliente;

