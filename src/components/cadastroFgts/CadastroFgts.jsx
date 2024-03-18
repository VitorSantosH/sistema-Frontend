import React, { useState } from "react";
import Select from 'react-select';
import './CadastroFgts.css';
import NumberFormat from 'react-number-format'
import axios from 'axios';
import connect from "../../config/connect.jsx";

//components 
import Menu from "../menu/Menu";
import {
    emissores,
    ufs,
    bancosBrasil,
    formaContratos,
    convenioFinanciamanto,
    tabelaCommissao,
    agentes,
    prazoComissao,


} from './subComponents/ufs_orgEmissor.jsx';
import SelectBank from "./subComponents/SelectBank.jsx";
import Swal from "sweetalert2";


const CadastroFgts = () => {

    const [state, setState] = useState({
        name: '',
        cpfValue: '',
        genero: '',
        sexo: '',
        dataNacimento: '',
        RG: '',
        dataExpedicaoRg: '',
        emissorRg: '',
        ufRg: '',
        estadoCivil: '',
        naturalidadeUf: '',
        nomePai: '',
        nomeMae: '',
        cep: '',
        alfabetizado: undefined,
        estadoEndereco: '',
        cidade: '',
        bairro: '',
        endereco: '',
        numero: '',
        complemento: '',
        celular: '',
        fixo: '',
        email: '',
        mantenededora: '',
        renda: '',
        representanteLegal: 'NAO',
        metodoPagamento: 'CARTAO',
        banco: '',
        metodoPgt: undefined,
        nConta: '',
        agencia: '',
        libCredito: '',
        bancoReceber: '',
        agenciaReceber: '',
        contaReceber: '',
        tipoContaReceber: '',
        bancoFinanciamento: '',
        formaContrato: '',
        convenioFinanciamanto: "",
        tabelaCommissao: '',
        agente: '',
        valorBaseComissao: '',
        prazoComissao: '',
        tipoFormalizacao: '',
        numeroAcompanhamento: '',
        linkFinanceira: '',
        observacao: '',
        loading: false


    })

    const cpfRegex = /^\d{11}$/;
    const regexCEP = /^[0-9]{8}$/;

    function CreateEmmisorOptions() {

        const options = emissores.map((e, i) => {


            return (
                <option key={e.extenso + i} value={e.sigla}>{e.extenso}</option>
            )
        })

        return options

    }

    function CreateUfsOptions() {

        const ufsComp = ufs.map((e, i) => {


            return (
                <option key={e.nome + i} value={e.uf}>{`${e.uf}: ${e.nome}`}</option>
            )
        })

        return ufsComp

    }

    async function getCEP(cep) {


        await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => {
                const {

                    bairro,
                    ddd,
                    localidade,
                    logradouro,
                    uf

                } = res.data
                console.log(res)

                if (res.data.erro) {
                    console.log(err)
                    return Swal.fire({
                        title: "Erro",
                        icon: "error",
                        text: "Erro ao localizar cep"
                    })
                }

                return setState(prevState => ({
                    ...prevState,
                    bairro: bairro,
                    estadoEndereco: uf,
                    endereco: logradouro,
                    cidade: localidade
                }))

            })
            .catch(err => {

                console.log(err)
                return Swal.fire({
                    title: "Erro",
                    icon: "error",
                    text: "Erro ao localizar cep"
                })
            })


        return

    }

    function handleRepresentanteLegal(e) {
        console.log(e.target.value)
        return setState({
            ...state,
            representanteLegal: e.target.value
        })
    }

    function handletipoFormalizacao(e) {
        console.log(e.target.value)
        return setState({
            ...state,
            tipoFormalizacao: e.target.value
        })
    }

    async function cadastrarProposta() {

        var fakeState = {
            name: 'vitror h',
            cpfValue: '13847888676',
            genero: 'masculino',
            sexo: '',
            dataNacimento: '24041996',
            RG: '20057479',
            dataExpedicaoRg: '24042012',
            emissorRg: 'PC',
            ufRg: 'MG',
            estadoCivil: 'SOLTEIRO',
            naturalidadeUf: 'MG',
            nomePai: 'pai',
            nomeMae: 'mae',
            cep: '32115160',
            alfabetizado: 'true',
            estadoEndereco: 'MG',
            cidade: 'Contagem',
            bairro: 'Novo Progresso',
            endereco: 'Rua Alvimar Carneiro',
            numero: '1251',
            complemento: 'comple',
            celular: '31996400879',
            fixo: '',
            email: 'wytorh@gmail.com',
            mantenededora: 'MG',
            renda: '1250.00',
            representanteLegal: 'NAO',
            metodoPagamento: 'CARTAO',
            banco: 1,
            nConta: '12548',
            agencia: '1251',
            libCredito: '',
            bancoReceber: 1,
            agenciaReceber: '58848',
            contaReceber: '8457844',
            tipoContaReceber: 'CORRENTE',
            bancoFinanciamento: 1,
            formaContrato: 'PAPCARD + CARTÃO',
            convenioFinanciamanto: 'CRÉDITO PESSOAL',
            tabelaCommissao: 48267,
            agente: 'maria',
            valorBaseComissao: '1251.00',
            prazoComissao: 2,
            tipoFormalizacao: 'PLUS',
            numeroAcompanhamento: '782155785',
            linkFinanceira: '7874584',
            observacao: '',
            loading: false
        }


        setState(prevState => ({
            ...prevState,
            loading: true
        }))

        console.log(state)
        const response = await connect.postProposta(fakeState)

        if (response.status != 200) {
            Swal.fire({
                icon: 'error',
                text: "Erro ao salvar a proposta",
                title: "Erro!"
            })
        } else {

            Swal.fire({
                icon: 'success',
                text: "Proposta salva com sucesso",
                title: "Sucesso!"
            })

        }
        console.log(response)

        return setState(prevState => ({
            ...prevState,
            loading: false
        }))

    }

    function handleMetodoPgt(e) {

        console.log(e.target.value)

        return setState({
            ...state,
            metodoPgt: e.target.value
        })
    }

    function handleLibCredito(e) {

        console.log(e.target.value)

        return setState({
            ...state,
            libCredito: e.target.value
        })
    }

    function setBankOption(e) {

        console.log(e.value)

        return setState({
            ...state,
            banco: e.value
        })

    }

    function setBankReceber(e) {

        console.log(e.value)

        return setState({
            ...state,
            bancoReceber: e.value
        })

    }

    function setAgenciaReceber(e) {

        console.log(e.value)

        return setState({
            ...state,
            agenciaReceber: e.value
        })

    }

    function setContaReceber(e) {

        console.log(e.value)

        return setState({
            ...state,
            contaReceber: e.value
        })

    }

    function setBancoFinanciamento(e) {

        console.log(e.value)

        return setState({
            ...state,
            bancoFinanciamento: e.value
        })

    }

    function setFormaContrato(e) {

        console.log(e.value)

        return setState({
            ...state,
            formaContrato: e.value
        })

    }

    function setConvenio(e) {

        console.log(e.value)

        return setState({
            ...state,
            convenioFinanciamanto: e.value
        })

    }

    function setTabelaComissao(e) {

        console.log(e.value)

        return setState({
            ...state,
            tabelaCommissao: e.value
        })

    }

    function setAgente(e) {

        console.log(e.value)

        return setState({
            ...state,
            agente: e.value
        })

    }

    function setPrazo(e) {

        console.log(e.value)

        return setState({
            ...state,
            prazoComissao: e.value
        })

    }




    return (
        <>
            <Menu />
            <div className="CadastroFgts">

                <div className="boxtitle">
                    <h2>
                        Proposta FGTS
                    </h2>
                </div>

                <div className="formularioFgts">

                    <div className="subtitle">
                        <h3>
                            Novo Cadastro
                        </h3>
                    </div>

                    <div className="form">

                        <div className="row">

                            <div className="containerInput inputMenor">

                                <label htmlFor="name">CFF:</label>
                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-text-width" />
                                    </section>
                                    <NumberFormat
                                        format=" ###.###.###-##"
                                        className='inputTel'
                                        aria-describedby=''
                                        placeholder="000.000.000-00"
                                        value={state.cpfValue || ''}
                                        //  style={{ 'borderColor': stateCadLoja.stateEmailStyle ? '' : '#EE3B3B' }}
                                        onValueChange={(values, info) => {

                                            const { formattedValue, value } = values;

                                            return setState({
                                                ...state,
                                                cpfValue: value
                                            })

                                        }}

                                        onKeyPress={e => {
                                            /**
                                             *  if (e.key === "Enter") {
                                
                                                 if (state.cpfValue.length < 11) {
                                                     const newCpfValue = completarComZeros(state.cpfValue, 11)
                                                     return setState({
                                                         ...state,
                                                         cpfValue: newCpfValue
                                                     })
                                
                                                 }
                                
                                                 if (!cpfRegex.test(state.cpfValue)) {
                                
                                                     return Swal.fire({
                                                         icon: "error",
                                                         title: 'Erro',
                                                         text: 'Digite o cpf corretamente',
                                                     })
                                
                                                 }
                                
                                
                                
                                                 return getFgtsStatus();
                                             }
                                             */
                                        }}
                                    />
                                    <section className="btnPesquisaCpf">
                                        <i className="fa fa-search" />
                                    </section>
                                </div>

                            </div>

                            <div className="containerInput">

                                <label htmlFor="name">Nome:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-text-width" />
                                    </section>

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Digite o nome completo... "
                                        value={state.name || ''}
                                        onChange={e => {

                                            return setState({
                                                ...state,
                                                name: e.target.value
                                            })
                                        }}
                                    />

                                </div>

                            </div>

                            <div className="containerInput">

                                <label htmlFor="gender">Selecione o Gênero:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-text-width" />
                                    </section>

                                    <select
                                        id="gender"
                                        name="gender"
                                        value={state.genero || ''}
                                        onChange={e => {

                                            return setState({
                                                ...state,
                                                genero: e.target.value
                                            })
                                        }}
                                    >
                                        <option value=''>Selecione...</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="feminino">Feminino</option>
                                    </select>


                                </div>

                            </div>

                        </div>

                        <div className="row">

                            <div className="containerInput inputMenor">

                                <label htmlFor=''>Data Nascimento:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-calendar" />
                                    </section>

                                    <NumberFormat
                                        format="##/##/####"
                                        className='inputTel'
                                        aria-describedby=''
                                        placeholder="__/__/____"
                                        value={state.dataNacimento || ''}
                                        //  style={{ 'borderColor': stateCadLoja.stateEmailStyle ? '' : '#EE3B3B' }}
                                        onValueChange={(values, info) => {
                                            const { formattedValue, value } = values;

                                            return setState({
                                                ...state,
                                                dataNacimento: value
                                            })

                                        }}

                                        onKeyPress={e => {
                                            /**
                                             *  if (e.key === "Enter") {
                                
                                                 if (state.cpfValue.length < 11) {
                                                     const newCpfValue = completarComZeros(state.cpfValue, 11)
                                                     return setState({
                                                         ...state,
                                                         cpfValue: newCpfValue
                                                     })
                                
                                                 }
                                
                                                 if (!cpfRegex.test(state.cpfValue)) {
                                
                                                     return Swal.fire({
                                                         icon: "error",
                                                         title: 'Erro',
                                                         text: 'Digite o cpf corretamente',
                                                     })
                                
                                                 }
                                
                                
                                
                                                 return getFgtsStatus();
                                             }
                                             */
                                        }}
                                    />
                                </div>

                            </div>

                            <div className="containerInput inputMenor">

                                <label htmlFor=''>RG:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-text-width" />
                                    </section>

                                    <input
                                        type="text"
                                        name=''
                                        id=''
                                        value={state.RG}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                RG: e.target.value
                                            })
                                        }}
                                    />
                                </div>

                            </div>

                            <div className="containerInput inputMenor">

                                <label htmlFor=''>Data Expedição RG:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-calendar" />
                                    </section>

                                    <NumberFormat
                                        format="##/##/####"
                                        className='inputTel'
                                        aria-describedby=''
                                        placeholder="__/__/____"
                                        value={state.dataExpedicaoRg || ''}
                                        //  style={{ 'borderColor': stateCadLoja.stateEmailStyle ? '' : '#EE3B3B' }}
                                        onValueChange={(values, info) => {
                                            const { formattedValue, value } = values;

                                            return setState({
                                                ...state,
                                                dataExpedicaoRg: value
                                            })

                                        }}

                                        onKeyPress={e => {
                                            /**
                                             *  if (e.key === "Enter") {
                                
                                                 if (state.cpfValue.length < 11) {
                                                     const newCpfValue = completarComZeros(state.cpfValue, 11)
                                                     return setState({
                                                         ...state,
                                                         cpfValue: newCpfValue
                                                     })
                                
                                                 }
                                
                                                 if (!cpfRegex.test(state.cpfValue)) {
                                
                                                     return Swal.fire({
                                                         icon: "error",
                                                         title: 'Erro',
                                                         text: 'Digite o cpf corretamente',
                                                     })
                                
                                                 }
                                
                                
                                
                                                 return getFgtsStatus();
                                             }
                                             */
                                        }}
                                    />
                                </div>

                            </div>

                            <div className="containerInput inputMenor">

                                <label htmlFor="emissor">Orgão Emissor RG:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-text-width" />
                                    </section>

                                    <select
                                        id="emissor"
                                        name="emissor"
                                        className="custom-select"
                                        value={state.emissorRg || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                emissorRg: e.target.value
                                            })
                                        }}
                                    >

                                        <option value=''>Selecione...</option>
                                        {CreateEmmisorOptions()}
                                    </select>

                                </div>

                            </div>

                        </div>

                        <div className="row">

                            <div className="containerInput inputMenor">

                                <label htmlFor="ufrg">UF RG:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-map-marker" />
                                    </section>

                                    <select
                                        id="ufrg"
                                        name="ufrg"
                                        value={state.ufRg || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                ufRg: e.target.value
                                            })
                                        }}
                                    >

                                        <option value=''>Selecione...</option>
                                        {CreateUfsOptions()}
                                    </select>


                                </div>

                            </div>

                            <div className="containerInput inputMenor">

                                <label htmlFor="estadoCivil">Estado Civil:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-text-width" />
                                    </section>

                                    <select
                                        id="estadoCivil"
                                        name="estadoCivil"
                                        value={state.estadoCivil}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                estadoCivil: e.target.value
                                            })
                                        }}
                                    >
                                        <option value=''>Selecione...</option>
                                        <option value="CASADO">CASADO</option>
                                        <option value="SEPARADO">SEPARADO</option>
                                        <option value="SOLTEIRO">SOLTEIRO</option>
                                        <option value="UNIÃO ESTÁVEL">UNIÃO ESTÁVEL</option>
                                        <option value="VÍUVO">VÍUVO</option>
                                    </select>


                                </div>

                            </div>

                            <div className="containerInput inputMenor">

                                <label htmlFor="naturalidadeUf">NATURALIDADE/ UF:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-map-marker" />
                                    </section>

                                    <select
                                        id="naturalidadeUf"
                                        name="naturalidadeUf"
                                        value={state.naturalidadeUf || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                naturalidadeUf: e.target.value
                                            })
                                        }}
                                    >

                                        <option value=''>Selecione...</option>
                                        {CreateUfsOptions()}
                                    </select>


                                </div>

                            </div>

                            <div className="containerInput inputMenor">

                                <label htmlFor="naturalidadePai">NOME PAI:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-text-width" />
                                    </section>

                                    <input
                                        type="text"
                                        name=''
                                        id="naturalidadePai"
                                        value={state.nomePai || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                nomePai: e.target.value
                                            })
                                        }}
                                    />

                                </div>

                            </div>

                            <div className="containerInput inputMenor">

                                <label htmlFor="naturalidademSE">NOME MÃE:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-text-width" />
                                    </section>

                                    <input
                                        type="text"
                                        name=''
                                        id="naturalidademSE"
                                        value={state.nomeMae || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                nomeMae: e.target.value
                                            })
                                        }}
                                    />

                                </div>

                            </div>

                            <div className="containerInput inputMenor">

                                <label htmlFor="alfabetizado">ALFABETIZADO:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-text-width" />
                                    </section>

                                    <select
                                        id="alfabetizado"
                                        name="alfabetizado"
                                        value={state.alfabetizado}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                alfabetizado: e.target.value
                                            })
                                        }}
                                    >
                                        <option value=''>Selecione...</option>
                                        <option value={true}>SIM</option>
                                        <option value={false}>NÃO</option>
                                    </select>


                                </div>

                            </div>

                        </div>



                    </div>

                    <h2
                        className="subtitleHr"
                    >       Endereço</h2>

                    <div className="form">

                        <div className="row">
                            <div className="containerInput inputMenor">

                                <label htmlFor="CEP">CEP:</label>
                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-map-marker" />
                                    </section>
                                    <NumberFormat
                                        format="#####-###"
                                        className='inputTel'
                                        aria-describedby=''
                                        placeholder="00000-000"
                                        value={state.cep || ''}
                                        //  style={{ 'borderColor': stateCadLoja.stateEmailStyle ? '' : '#EE3B3B' }}
                                        onValueChange={(values, info) => {

                                            const { formattedValue, value } = values;

                                            return setState({
                                                ...state,
                                                cep: value
                                            })

                                        }}

                                        onKeyPress={e => {

                                            if (e.key === "Enter") {

                                                if (regexCEP.test(state.cep)) {

                                                    return getCEP(state.cep)

                                                } else {
                                                    return Swal.fire({
                                                        title: 'ERRO',
                                                        icon: "error",
                                                        text: "Digite o cep corretamente"
                                                    })
                                                }
                                            }

                                        }}
                                    />
                                    <section
                                        className="btnPesquisaCpf"
                                        onClick={e => {

                                            if (regexCEP.test(state.cep)) {

                                                return getCEP(state.cep)

                                            } else {
                                                return Swal.fire({
                                                    title: 'ERRO',
                                                    icon: "error",
                                                    text: "Digite o cep corretamente"
                                                })
                                            }
                                        }}


                                    >
                                        <i className="fa fa-search" />
                                    </section>
                                </div>

                            </div>

                            <div className="containerInput inputMenor">

                                <label htmlFor="estadoEndereco">Estado:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-map-marker" />
                                    </section>


                                    <select
                                        id="estadoEndereco"
                                        name="estadoEndereco"
                                        value={state.estadoEndereco || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                estadoEndereco: e.target.value
                                            })
                                        }}
                                    >

                                        <option value=''>Selecione...</option>
                                        {CreateUfsOptions()}
                                    </select>


                                </div>

                            </div>


                            <div className="containerInput inputMenor">

                                <label htmlFor=''>Cidade:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-map-marker" />
                                    </section>

                                    <input
                                        type="text"
                                        name=''
                                        id=''
                                        value={state.cidade || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                cidade: e.target.value
                                            })
                                        }}
                                    />

                                </div>

                            </div>


                            <div className="containerInput inputMenor">

                                <label htmlFor=''>Bairro:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-map-marker" />
                                    </section>

                                    <input
                                        type="text"
                                        name=''
                                        id=''
                                        value={state.bairro || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                bairro: e.target.value
                                            })
                                        }}
                                    />

                                </div>

                            </div>

                        </div>

                        <div className="row">

                            <div className="containerInput ">

                                <label htmlFor=''>Endereço:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-map-marker" />
                                    </section>

                                    <input
                                        type="text"
                                        name=''
                                        id=''
                                        value={state.endereco || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                endereco: e.target.value
                                            })
                                        }}
                                    />

                                </div>

                            </div>


                            <div className="containerInput inputMenor">

                                <label htmlFor=''>Número:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-text-width" />
                                    </section>

                                    <input
                                        type="number"
                                        name=''
                                        id=''
                                        value={state.numero || ''}

                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                numero: e.target.value
                                            })
                                        }}
                                    />

                                </div>

                            </div>


                            <div className="containerInput ">

                                <label htmlFor=''>Complemento:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-text-width" />
                                    </section>

                                    <input
                                        type="text"
                                        name=''
                                        id=''
                                        value={state.complemento || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                complemento: e.target.value
                                            })
                                        }}
                                    />

                                </div>

                            </div>


                        </div>

                    </div>


                    <h2
                        className="subtitleHr"
                    >       Contato</h2>


                    <div className="form">

                        <div className="row">

                            <div className="containerInput inputMenor">

                                <label htmlFor=''>Telefone celular:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-phone" />
                                    </section>

                                    <NumberFormat
                                        format="(##) # ####-#### "
                                        className='inputTel'
                                        aria-describedby=''
                                        placeholder="(__) _ ____-____"
                                        value={state.celular || ''}
                                        //  style={{ 'borderColor': stateCadLoja.stateEmailStyle ? '' : '#EE3B3B' }}
                                        onValueChange={(values, info) => {
                                            const { formattedValue, value } = values;

                                            return setState({
                                                ...state,
                                                celular: value
                                            })

                                        }}

                                        onKeyPress={e => {
                                            /**
                                             *  if (e.key === "Enter") {
                                
                                                 if (state.cpfValue.length < 11) {
                                                     const newCpfValue = completarComZeros(state.cpfValue, 11)
                                                     return setState({
                                                         ...state,
                                                         cpfValue: newCpfValue
                                                     })
                                
                                                 }
                                
                                                 if (!cpfRegex.test(state.cpfValue)) {
                                
                                                     return Swal.fire({
                                                         icon: "error",
                                                         title: 'Erro',
                                                         text: 'Digite o cpf corretamente',
                                                     })
                                
                                                 }
                                
                                
                                
                                                 return getFgtsStatus();
                                             }
                                             */
                                        }}
                                    />
                                </div>

                            </div>

                            <div className="containerInput inputMenor">

                                <label htmlFor=''>Telefone fixo:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-phone" />
                                    </section>

                                    <NumberFormat
                                        format="(##) ####-#### "
                                        className='inputTel'
                                        aria-describedby=''
                                        placeholder="(__) ____-____"
                                        value={state.fixo || ''}
                                        //  style={{ 'borderColor': stateCadLoja.stateEmailStyle ? '' : '#EE3B3B' }}
                                        onValueChange={(values, info) => {
                                            const { formattedValue, value } = values;

                                            return setState({
                                                ...state,
                                                fixo: value
                                            })

                                        }}

                                        onKeyPress={e => {
                                            /**
                                             *  if (e.key === "Enter") {
                                
                                                 if (state.cpfValue.length < 11) {
                                                     const newCpfValue = completarComZeros(state.cpfValue, 11)
                                                     return setState({
                                                         ...state,
                                                         cpfValue: newCpfValue
                                                     })
                                
                                                 }
                                
                                                 if (!cpfRegex.test(state.cpfValue)) {
                                
                                                     return Swal.fire({
                                                         icon: "error",
                                                         title: 'Erro',
                                                         text: 'Digite o cpf corretamente',
                                                     })
                                
                                                 }
                                
                                
                                
                                                 return getFgtsStatus();
                                             }
                                             */
                                        }}
                                    />
                                </div>

                            </div>

                            <div className="containerInput ">

                                <label htmlFor=''>E-mail:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-envelope" />
                                    </section>

                                    <input
                                        type="text"
                                        name=''
                                        id=''
                                        value={state.email || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                email: e.target.value
                                            })
                                        }}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>



                    <h2
                        className="subtitleHr"
                    >      Dados Benefício </h2>


                    <div className="form">

                        <div className="row">

                            <div className="containerInput inputMenor">

                                <label htmlFor="mantenedora">UF Mantenedora:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-map-marker" />
                                    </section>

                                    <select
                                        id="mantenedora"
                                        name="mantenedora"
                                        value={state.mantenededora || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                mantenededora: e.target.value
                                            })
                                        }}
                                    >

                                        <option value=''>Selecione...</option>
                                        {CreateUfsOptions()}
                                    </select>


                                </div>

                            </div>



                            <div className="containerInput inputMenor ">

                                <label htmlFor=''>Renda:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-money" />
                                    </section>

                                    <NumberFormat
                                        decimalScale={2}
                                        fixedDecimalScale
                                        allowedDecimalSeparators={[',']}
                                        prefix={'R$'}
                                        className='inputTel'
                                        aria-describedby=''
                                        placeholder="R$0.00"
                                        value={state.renda || ''}
                                        //  style={{ 'borderColor': stateCadLoja.stateEmailStyle ? '' : '#EE3B3B' }}
                                        onValueChange={(values, info) => {

                                            const { formattedValue, value } = values;

                                            return setState({
                                                ...state,
                                                renda: value
                                            })

                                        }}


                                    />


                                </div>

                            </div>


                        </div>

                        <div className="row">


                            <div className="containerInput representanteLegalInput ">

                                <label htmlFor=''>Possui Representante Legal:</label>

                                <div>

                                    <section>

                                        <input
                                            type="radio"
                                            value={"NAO"}
                                            checked={state.representanteLegal === 'NAO'}
                                            onChange={e => handleRepresentanteLegal(e)}
                                            style={{ 'minWidth': "20px", "height": "20px", "overflow": 'hidden' }}

                                        />

                                        <label htmlFor="">Não</label>


                                    </section>

                                    <section>

                                        <input
                                            type="radio"
                                            value={'SIM'}
                                            checked={state.representanteLegal === 'SIM'}
                                            onChange={e => handleRepresentanteLegal(e)}
                                            style={{ 'minWidth': "20px", "height": "20px", "overflow": 'hidden' }}

                                        />

                                        <label htmlFor="">SIM</label>

                                    </section>
                                </div>

                            </div>


                        </div>

                        <div className="row">


                            <div
                                className="containerInput representanteLegalInput "

                            >

                                <label htmlFor=''>Pagamento através de:</label>

                                <div>

                                    <section>

                                        <input
                                            type="radio"
                                            value={'CARTAO-MAG'}
                                            checked={state.metodoPgt === 'CARTAO-MAG'}
                                            onChange={e => handleMetodoPgt(e)}
                                            style={{ 'minWidth': "20px", "height": "20px", "overflow": 'hidden' }}

                                        />

                                        <label htmlFor="">Cartão Magnético</label>

                                    </section>

                                    <section>

                                        <input
                                            type="radio"
                                            value={'CONTA-CORRENTE'}
                                            checked={state.metodoPgt === 'CONTA-CORRENTE'}
                                            onChange={e => handleMetodoPgt(e)}
                                            style={{ 'minWidth': "20px", "height": "20px", "overflow": 'hidden' }}

                                        />

                                        <label htmlFor="">Conta Corrente</label>

                                    </section>
                                </div>
                            </div>

                            <div className={'boxSelect'}>
                                <SelectBank action={setBankOption} label={'Banco'} />
                            </div>

                            <div className="containerInput inputMenor ">

                                <label htmlFor=''>Agência:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-university" />
                                    </section>

                                    <input
                                        type="text"
                                        name=''
                                        id=''
                                        value={state.agencia || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                agencia: e.target.value
                                            })
                                        }}
                                    />

                                </div>

                            </div>

                            <div className="containerInput inputMenor">

                                <label htmlFor=''>Nº da conta:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-university" />
                                    </section>

                                    <input
                                        type="text"
                                        name=''
                                        id=''
                                        value={state.nConta || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                nConta: e.target.value
                                            })
                                        }}
                                    />

                                </div>

                            </div>

                        </div>

                        <div className="row">


                            <div
                                className="containerInput representanteLegalInput "

                            >

                                <label htmlFor=''>Liberação de crédito:</label>

                                <div>

                                    <section>

                                        <input
                                            type="radio"
                                            value={'TED'}
                                            checked={state.libCredito === 'TED'}
                                            onChange={e => handleLibCredito(e)}
                                            style={{ 'minWidth': "20px", "height": "20px", "overflow": 'hidden' }}

                                        />

                                        <label htmlFor="">TED</label>

                                    </section>

                                    <section>

                                        <input
                                            type="radio"
                                            value={'OP'}
                                            checked={state.libCredito === 'OP'}
                                            onChange={e => handleLibCredito(e)}
                                            style={{ 'minWidth': "20px", "height": "20px", "overflow": 'hidden' }}

                                        />

                                        <label htmlFor="">OP</label>

                                    </section>
                                </div>
                            </div>

                            <div className={'boxSelect'}>

                                <SelectBank action={setBankReceber} label={'Banco de recebimento'} />

                            </div>

                            <div className={'boxSelect'}>

                                {
                                    /**
                                     *  <SelectBank action={setAgenciaReceber} label={'Agência (Recebe)'} />
                                     */
                                }

                                <div className="containerInput inputMenor ">

                                    <label htmlFor=''>Agência (Recebe):</label>

                                    <div className="inputBox">

                                        <section className='btnIcon'>
                                            <i className="fa fa-university" />
                                        </section>

                                        <input
                                            type="text"
                                            name=''
                                            id=''
                                            value={state.agenciaReceber || ''}
                                            onChange={e => {
                                                return setState({
                                                    ...state,
                                                    agenciaReceber: e.target.value
                                                })
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>


                            <div className={'boxSelect'}>

                                {
                                    /**
                                     *    <SelectBank action={setContaReceber} label={'Conta (Recebe)'} />
                                     */
                                }

                                <div className="containerInput inputMenor ">

                                    <label htmlFor=''>Conta (Recebe):</label>

                                    <div className="inputBox">

                                        <section className='btnIcon'>
                                            <i className="fa fa-university" />
                                        </section>

                                        <input
                                            type="text"
                                            name=''
                                            id=''
                                            value={state.contaReceber || ''}
                                            onChange={e => {
                                                return setState({
                                                    ...state,
                                                    contaReceber: e.target.value
                                                })
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>


                            <div className="containerInput inputMenor">

                                <label htmlFor="mantenedora">Tipo da conta:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-map-marker" />
                                    </section>

                                    <select
                                        id="mantenedora"
                                        name="mantenedora"
                                        value={state.tipoContaReceber || ''}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                tipoContaReceber: e.target.value
                                            })
                                        }}
                                    >

                                        <option value=''>Selecione...</option>
                                        <option value={'CORRENTE'}>{`Conta corrente`}</option>
                                        <option value={'POUPANCA'}>{`Conta poupança`}</option>
                                    </select>


                                </div>

                            </div>

                        </div>

                    </div>


                    <h2
                        className="subtitleHr"
                    >       Financiamento</h2>

                    <div className="form">

                        <div className="row">

                            <div className={'boxSelect'}>

                                <SelectBank action={setBancoFinanciamento} label={'Banco de financiamento'} />

                            </div>

                            <div className={'boxSelect'}>

                                <SelectBank action={setFormaContrato} label={'Forma de contrato'} option={formaContratos} icon="fa fa-text-width" />

                            </div>

                            <div className={'boxSelect'}>

                                <SelectBank action={setConvenio} label={'Convênio'} option={convenioFinanciamanto} icon="fa fa-text-width" />

                            </div>




                        </div>

                        <div className="row">

                            <div className={'boxSelect'}>

                                <SelectBank action={setTabelaComissao} label={'Tabela de comissão'} option={tabelaCommissao} icon="fa fa-text-width" />

                            </div>

                            <div className={'boxSelect'}>

                                {
                                    /**
                                     *  <SelectBank action={setAgente} label={'Agente'} option={agentes} icon="fa fa-text-width" />
                                     */
                                }

                                <div className="containerInput inputGrd ">

                                    <label htmlFor=''>Agente:</label>

                                    <div className="inputBox">

                                        <section className='btnIcon'>
                                            <i className="fa fa-text-width" />
                                        </section>

                                        <input
                                            type="text"
                                            name=''
                                            id=''
                                            value={state.agente || ''}
                                            onChange={e => {
                                                return setState({
                                                    ...state,
                                                    agente: e.target.value
                                                })
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>


                            <div className="containerInput inputMenor">

                                <label htmlFor=''>Valor base comissão:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-money" />
                                    </section>


                                    <NumberFormat
                                        decimalScale={2}
                                        fixedDecimalScale
                                        allowedDecimalSeparators={[',']}
                                        prefix={'R$'}
                                        className='inputTel'
                                        aria-describedby=''
                                        placeholder="R$0.00"
                                        value={state.valorBaseComissao || ''}
                                        //  style={{ 'borderColor': stateCadLoja.stateEmailStyle ? '' : '#EE3B3B' }}
                                        onValueChange={(values, info) => {

                                            const { formattedValue, value } = values;

                                            return setState({
                                                ...state,
                                                valorBaseComissao: value
                                            })

                                        }} />

                                </div>

                            </div>

                            <div className={'boxSelect'}>

                                <SelectBank action={setPrazo} label={'Prazo'} option={prazoComissao} icon="fa fa-clock-o" />

                            </div>


                        </div>

                        <div className="row">

                            <div
                                className="containerInput representanteLegalInput "

                            >

                                <label htmlFor=''>Tipo de formalização:</label>

                                <div>

                                    <section>

                                        <input
                                            type="radio"
                                            value={'DIGITAL'}
                                            checked={state.tipoFormalizacao === 'DIGITAL'}
                                            onChange={e => handletipoFormalizacao(e)}
                                            style={{ 'minWidth': "20px", "height": "20px", "overflow": 'hidden' }}

                                        />

                                        <label htmlFor="">DIGITAL</label>

                                    </section>

                                    <section>

                                        <input
                                            type="radio"
                                            value={'PLUS'}
                                            checked={state.tipoFormalizacao === 'PLUS'}
                                            onChange={e => handletipoFormalizacao(e)}
                                            style={{ 'minWidth': "20px", "height": "20px", "overflow": 'hidden' }}

                                        />

                                        <label htmlFor="">PLUS</label>

                                    </section>
                                </div>
                            </div>

                            <div className="containerInput inputMenor">

                                <label htmlFor=''>Nº Acompanhamento:</label>

                                <div className="inputBox">

                                    <section className='btnIcon'>
                                        <i className="fa fa-arrow-circle-down" />
                                    </section>

                                    <input
                                        type="text"
                                        name=''
                                        id=''
                                        placeholder="Deixar vazio caso não possua"
                                        value={state.numeroAcompanhamento}
                                        onChange={e => {
                                            return setState({
                                                ...state,
                                                numeroAcompanhamento: e.target.value
                                            })
                                        }}
                                    />
                                </div>

                            </div>


                            {state.tipoFormalizacao == "PLUS" && (
                                <div className="containerInput ">

                                    <label htmlFor=''>Link financeira:</label>

                                    <div className="inputBox">

                                        <section className='btnIcon'>
                                            <i className="fa fa-arrow-circle-down" />
                                        </section>

                                        <input
                                            type="text"
                                            name=''
                                            id=''
                                            placeholder="Cole aqui o link de aceite/token fornecido pela financeira"
                                            value={state.linkFinanceira}
                                            onChange={e => {
                                                return setState({
                                                    ...state,
                                                    linkFinanceira: e.target.value
                                                })
                                            }}
                                        />
                                    </div>

                                </div>
                            )}





                        </div>

                        <div style={{ "background": "black", "height": "2px", "width": '100%', "opacity": "0.5", "margin": "1rem" }} />



                        <div className="containerInput inputGrd">

                            <label htmlFor=''>Observações:</label>

                            <div className="inputBox">

                                <section className='btnIcon'>
                                    <i className="fa fa-info-circle" />
                                </section>

                                <input
                                    type="text"
                                    name=''
                                    id=''
                                    placeholder="Deixar vazio caso não possua"
                                    value={state.observacao}
                                    onChange={e => {
                                        return setState({
                                            ...state,
                                            observacao: e.target.value
                                        })
                                    }}
                                />
                            </div>

                        </div>


                        <div
                            className="btn"
                            onClick={e => {
                                return cadastrarProposta();
                            }}

                        >
                            {!state.loading && (
                                <div className="btnConsultar">
                                    <span>
                                        Cadastrar
                                    </span>
                                </div>
                            )}
                            {state.loading && (
                                <div className="contendSpinner">
                                    <div id="loading" className="spinner">
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                </div>




            </div>

        </>
    )

}


export default CadastroFgts;