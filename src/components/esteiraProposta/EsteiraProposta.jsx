import React, { useEffect, useState } from "react";
import './EsteiraProposta.css';
import NumberFormat from 'react-number-format'
import Swal from 'sweetalert2'
import connect from "../../config/connect";

//components 
import Menu from "../menu/Menu";
import CreateTable from '../createTable/CreateTable.jsx'

const EsteiraProposta = (props) => {

    const cpfRegex = /^\d{11}$/;
    const [state, setState] = useState({
        cpfValue: '',
        id: '',
        filtro: "",
        loading: false
    })

    const [stateDados, setStateDados] = useState({
        dadosTabela: undefined,
        dadosFiltrados: undefined,
        loadingFiltro: false
    })

    useEffect(() => {


    }, [state.filtro,])



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

        setState(prevState => ({
            ...prevState,
            loading: true
        }));

        console.log('aqui')
        const params = {
            CPF: state.cpfValue,
            NUMERO_ACOMPANHAMENTO: state.NUMERO_ACOMPANHAMENTO
        }
        const response = await connect.getPropostas({ ...params })
        console.log(response)
        const data = response.data

        setState({
            ...state,
            loading: false
        })

        return setStateDados({
            ...state,
            dadosTabela: converterDadosParaAcessos(data),
        })
    }


    const colunas = [
        { Header: 'ID', accessor: 'ID' },
        { Header: 'CPF', accessor: 'CPF' },
        { Header: 'CLIENTE', accessor: 'CLIENTE' },
        { Header: 'TELEFONE', accessor: 'TELEFONE' },
        { Header: 'UNID. NEGÓCIOS', accessor: 'unidade' },
        { Header: 'CADASTRADO POR', accessor: 'CADASTRADO POR' },
        { Header: 'Nº CONTRATO', accessor: 'Nº CONTRATO' },
        { Header: 'COMISSÂO', accessor: 'COMISSAO' },
        { Header: 'STATUS', accessor: 'STATUS' },


    ];

    const converterDadosParaAcessos = (dados) => {
        return dados.map((item) => {
            // console.log(item)
            return {
                ID: item.ID_PROPOSTA,
                CPF: item.CPF,
                CLIENTE: item.CLIENTE,
                TELEFONE: item.TELEFONE,
                unidade: item.UNIDADE_NEGOCIOS,
                'CADASTRADO POR': item.AGENTE,
                'Nº CONTRATO': item.NUMERO_ACOMPANHAMENTO,
                COMISSAO: item.TABELA_COMISSAO,
                STATUS: item.STATUS_PROPOSTA,
                SUPERVISOR: item.SUPERVISOR
                // Adicione mais campos conforme necessário
            };
        });
    };

    const filtrarDados = (e) => {

        setStateDados(prevState => ({
            ...prevState,
            loadingFiltro: true,
            
        }))

        //filtrar dados
        if (e.target.value == "") {
            console.log('aqui')
            setState(prevState => ({
                ...prevState,
                filtro: e.target.value,

            }))

            return setStateDados(prevState => ({
                ...prevState,
                dadosFiltrados: stateDados.dadosTabela,
                loadingFiltro: false
            }))
        }

        console.log(stateDados)
        if (stateDados.dadosTabela && state.filtro) {

            const filtroLowerCase = state.filtro.toLowerCase();
            const dadosFiltrados = stateDados.dadosTabela.filter(proposta => {

                if (proposta.STATUS.toLowerCase().includes(filtroLowerCase) ||
                    proposta.CLIENTE.toLowerCase().includes(filtroLowerCase) ||
                    proposta.CPF.toString().toLowerCase().includes(filtroLowerCase)
                ) return true
            });

            return setStateDados(prevState => ({
                ...prevState,
                dadosFiltrados: dadosFiltrados,
                loadingFiltro: false
            }));
        }
    }

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

                    <div className="boxtitle">
                        <h4>
                            Consulta banco de dados/facta
                        </h4>
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


                        <div className="inputItem">

                            <label htmlFor="cpf">
                                Nº ACOMPANHAMENTO
                            </label>

                            <section className="pt2">

                                <div className="cpf">

                                    <NumberFormat
                                        format="########"
                                        className='inputTel'
                                        aria-describedby=""
                                        placeholder="00000000"
                                        value={state.NUMERO_ACOMPANHAMENTO || ""}
                                        //  style={{ 'borderColor': stateCadLoja.stateEmailStyle ? '' : '#EE3B3B' }}
                                        onValueChange={(values, info) => {
                                            const { formattedValue, value } = values;

                                            return setState({
                                                ...state,
                                                NUMERO_ACOMPANHAMENTO: value
                                            })

                                        }}

                                        onKeyPress={e => {

                                            if (e.key === "Enter") {

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
                            return getFgtsStatus();
                        }}

                    >
                        {!state.loading && (
                            <div className="btnConsultar">
                                <span>
                                    Consultar
                                </span>
                            </div>
                        )}
                        {state.loading && (
                            <div className="contendSpinner">
                                <div id="loading-login" className="spinner">
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="boxtitle">
                        <h4>
                            filtros
                        </h4>
                    </div>

                    <div className="inputContainer">

                        <div className="inputItem">

                            <label htmlFor="cpf">
                                Status | CPF | Nome
                            </label>

                            <section className="pt2">

                                <div className="cpf">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        value={state.filtro || ""}
                                        onChange={e => {

                                            if(e.target.value == "") {
                                                filtrarDados(e);
                                            }
                                            
                                            console.log(state)
                                            return setState({
                                                ...state,
                                                filtro: e.target.value
                                            });

                                        }}
                                        onKeyPress={e => {

                                            if (e.key === "Enter") {

                                                return filtrarDados(e);
                                            }
                                        }}
                                    />

                                    {stateDados.loading && (
                                        <div className="">
                                            <div id="loading-login" className="spinner">
                                            </div>
                                        </div>
                                    )}


                                </div>

                                <span>
                                    Aperte enter para aplicar o filtro
                                </span>

                            </section>

                        </div>
                    </div>



                </div>


                {stateDados.dadosTabela && (
                    <CreateTable colunas={colunas} dados={stateDados.dadosFiltrados || stateDados.dadosTabela} />
                )}



            </div>
        </>
    )
}


export default EsteiraProposta;