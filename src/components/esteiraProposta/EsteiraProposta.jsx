import React, { useState } from "react";
import './EsteiraProposta.css';
import NumberFormat from 'react-number-format'
import Swal from 'sweetalert2'
import connect from "../../config/connect";

//components 
import Menu from "../menu/Menu";
import CreateTable from '../createTable/CreateTable.jsx'

const EsteiraProposta = (props) => {


    const [state, setState] = useState({
        cpfValue: '',
        dadosTabela: undefined,


    })
    const cpfRegex = /^\d{11}$/;


    function completarComZeros(numero, tamanhoMinimo) {
        // Converte o número para uma string
        let numeroString = numero.toString();

        // Calcula quantos zeros à esquerda são necessários
        const zerosFaltantes = tamanhoMinimo - numeroString.length;

        // Se zerosFaltantes for maior que zero, adiciona zeros à esquerda
        if (zerosFaltantes > 0) {
            numeroString = '0'.repeat(zerosFaltantes) + numeroString;
        }

        return numeroString;
    }

    async function getFgtsStatus() {

        console.log('aqui')
        const params = {
            cpf: state.cpfValue
        }
        const response = await connect.getPropostas({ ...params })
        console.log(response)
        const data = response.data.propostas

        return setState({
            ...state,
            dadosTabela: converterDadosParaAcessos(data)
        })
    }


    const colunas = [
        { Header: 'ID', accessor: 'ID' },
        { Header: 'CPF', accessor: 'CPF' },
        { Header: 'CLIENTE', accessor: 'CLIENTE' },
        { Header: 'TELEFONE', accessor: 'TELEFONE' },
        { Header: 'UNID. NEGÓCIOS', accessor: 'UNID. NEGOCIOS' },
        { Header: 'CADASTRADO POR', accessor: 'CADASTRADO POR' },
        { Header: 'Nº CONTRATO', accessor: 'Nº CONTRATO' },
        { Header: 'COMISSÂO', accessor: 'COMISSAO' },
        { Header: 'STATUS', accessor: 'STATUS' },


    ];

    const converterDadosParaAcessos = (dados) => {
        return dados.map((item) => {
            return {
                ID: item.proposta,
                CPF: item.cpf,
                CLIENTE: item.cliente,
                TELEFONE: '',
                'UNID. NEGÓCIOS': item.unid_negocios,
                'CADASTRADO POR': item.login_corretor,
                'Nº CONTRATO': item.numero_contrato,
                COMISSAO: item.comissao,
                STATUS: item.status_proposta,
                // Adicione mais campos conforme necessário
            };
        });
    };


    return (
        <>
            <Menu />
            <div className="esteiraProposta">

                <div className="pesquisa">
                    <div className="boxtitle">
                        <h2>
                            Lista de propostas
                        </h2>


                    </div>

                    <div className="inputContainer">

                        <div className="inputItem">

                            <label htmlFor="cpf">
                                CPF
                            </label>

                            <section className="pt2">

                                <div className="cpf">

                                    <NumberFormat
                                        format=" ###.###.###-##"
                                        className='inputTel'
                                        aria-describedby=""
                                        placeholder="000.000.000-00"
                                        value={state.cpfValue || ""}
                                        //  style={{ 'borderColor': stateCadLoja.stateEmailStyle ? '' : '#EE3B3B' }}
                                        onValueChange={(values, info) => {
                                            const { formattedValue, value } = values;

                                            return setState({
                                                ...state,
                                                cpfValue: value
                                            })

                                        }}

                                        onKeyPress={e => {

                                            if (e.key === "Enter") {

                                                console.log(state.cpfValue)
                                                if (state.cpfValue.length < 11 && state.cpfValue) {
                                                    const newCpfValue = completarComZeros(state.cpfValue, 11)
                                                    return setState({
                                                        ...state,
                                                        cpfValue: newCpfValue
                                                    })

                                                }

                                                if (!cpfRegex.test(state.cpfValue) && state.cpfValue) {

                                                    return Swal.fire({
                                                        icon: "error",
                                                        title: 'Erro',
                                                        text: 'Digite o cpf corretamente',
                                                    })

                                                }



                                                return getFgtsStatus();
                                            }
                                        }}


                                    />
                                </div>

                            </section>
                        </div>
                    </div>


                    <div

                        className="btn"
                        onClick={e => {

                            if (!cpfRegex.test(state.cpfValue)) {

                                return Swal.fire({
                                    icon: "error",
                                    title: 'Erro',
                                    text: 'Digite o cpf corretamente',
                                })

                            }



                            return getFgtsStatus();

                        }}

                    >
                        {!state.loading && (
                            <span>
                                Consultar
                            </span>
                        )}
                        {state.loading && (
                            <div id="loading-bar-spinner" className="spinner">
                            </div>
                        )}
                    </div>

                </div>


                {state.dadosTabela && (
                    <CreateTable colunas={colunas} dados={state.dadosTabela} />
                )}


            </div>
        </>
    )
}


export default EsteiraProposta;