import React, { useState } from "react";
import './CadastroFgts.css';
import NumberFormat from 'react-number-format'
import Select from 'react-select'

//components 
import Menu from "../menu/Menu";
import { emissores } from './ufs_orgEmissor.jsx';


const CadastroFgts = () => {

    const [state, setState] = useState({
        name: '',
        cpf: '',
        sexo: '',
        dataNacimento: '',
        RG: "",
        dataExpedicaoRg: "",
        emissorRg: '',
        ufRg: ""
    })

    console.log(emissores)


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

                            <div className="containerInput">

                                <label htmlFor="name">CFF:</label>
                                <div className="inputBox">

                                    <btn className='btnIcon'>
                                        <i className="fa fa-text-width" />
                                    </btn>
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
                                    <btn className="btnPesquisaCpf">
                                        <i className="fa fa-search" />
                                    </btn>
                                </div>

                            </div>


                            <div className="containerInput">

                                <label htmlFor="name">Nome:</label>
                                <div className="inputBox">

                                    <btn className='btnIcon'>
                                        <i className="fa fa-text-width" />
                                    </btn>

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Digite o nome completo... "
                                    />

                                </div>

                            </div>

                            <div className="containerInput">

                                <label htmlFor="gender">Selecione o Gênero:</label>

                                <div className="inputBox">

                                    <btn className='btnIcon'>
                                        <i className="fa fa-text-width" />
                                    </btn>

                                    <select id="gender" name="gender">
                                        <option value="masculino">Masculino</option>
                                        <option value="feminino">Feminino</option>
                                    </select>


                                </div>

                            </div>
                        </div>


                    </div>

                </div>


            </div>
        </>
    )

}


export default CadastroFgts;