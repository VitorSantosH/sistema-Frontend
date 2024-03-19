import React, { useState } from "react";
import './CriarEquipe.css';

// redux 
import { useDispatch, useSelector } from "react-redux";
import { incremented, decremented, setUser } from '../../redux/redux.js';

//componentes 
import Menu from "../menu/Menu";

// utilitarios 
import Swal from "sweetalert2";
import { json, useNavigate } from "react-router-dom";

const CriarEquipe = (props) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userRedux = useSelector(state => {
        return state.user;
    });

    const [state, setState] = useState({
        loading: false,
        equipe: {
            name: "",
            lider: "",
            integrantes: [{
                name: ""
            }],
        },
        numIntegrantes: 1

    })
    
    function ReturnIntegrantesInput() {

        var data = [];
    
        for (let index = 0; index < state.equipe.integrantes.length + state.numIntegrantes; index++) {
            let integrante = state.equipe.integrantes[index] || { name: "" }; // Verifica se o integrante existe, senão cria um novo objeto vazio
            let div = (
                <div key={index} className={state.emailRegexClass}>
                    <i className="fa fa-users">
                        <input
                            type="email"
                            name=""
                            id=""
                            placeholder="Integrantes"
                            value={integrante.name}
                            onChange={e => {
                                var equipe = [...state.equipe.integrantes]; // Cria uma cópia do array de integrantes
                                equipe[index] = { ...integrante, name: e.target.value }; // Atualiza o nome do integrante no índice correto
                                setState({
                                    ...state,
                                    equipe: { ...state.equipe, integrantes: equipe } // Atualiza o estado com o novo array de integrantes
                                });
                            }}
                        />
                    </i>
                </div>
            );
    
            data.push(div);
        }
    
        return <>{data}</>; // Corrigido: removido o spread operator redundante
    }
    

    return (
        <div className="CriarEquipe">
            <Menu />


            <div className="containerRegistroForm">

                <h2>
                    Criar Equipe
                </h2>

                <div className="nameRegistro">
                    <i className="fa fa-sticky-note ">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Digite o nome da equipe"
                            readOnly
                            value={state.equipe.name}

                        />
                    </i>
                </div>

                <div className={state.emailRegexClass}>
                    <i className="fa fa-user">
                        <input
                            type="email"
                            name=""
                            id=""
                            placeholder="Líder da equipe"

                            value={state.equipe.lider}

                        />
                    </i>
                </div>
                {ReturnIntegrantesInput()}

                <section
                    className="btn"
                    onClick={e => {


                        if (state.password != state.confirmeNewPassword) {
                            return Swal.fire({
                                title: "Erro",
                                icon: 'error',
                                text: "As duas senhas não batem."
                            })
                        }


                        setState({
                            ...state,
                            loading: true
                        })

                        // return updateUserPassword();

                    }}
                >

                    {!state.loading && (
                        <span>
                            Criar Equipe
                        </span>
                    )}

                    {state.loading && (
                        <section id="loading-login" className="spinner">
                        </section>
                    )}

                </section>

            </div>

        </div>
    )
}


export default CriarEquipe;


/**
 * 
 *      <div className="passwordRegistro">
                    <i className="fa fa-lock">
                        <input
                            type={state.showPassword ? 'password' : "text"}
                            name=""
                            id=""
                            placeholder="Digite a nova senha..."
                            value={state.password}
                            onChange={e => {
                                setState({
                                    ...state,
                                    password: e.target.value
                                })
                            }}
                        />
                        <i
                            className={state.showPassword ? "fa fa-eye-slash" : "fa fa-eye"}
                            onClick={e => {
                                return setState({
                                    ...state,
                                    showPassword: !state.showPassword
                                })
                            }}
                        ></i>
                    </i>
                </div>

                <div className="passwordRegistro">
                    <i className="fa fa-lock">
                        <input
                            type={state.showPassword ? 'password' : "text"}
                            name=""
                            id=""
                            placeholder="Digite novamente a nova senha"
                            value={state.confirmeNewPassword}
                            onChange={e => {
                                setState({
                                    ...state,
                                    confirmeNewPassword: e.target.value
                                })
                            }}
                        />
                        <i
                            className={state.showPassword ? "fa fa-eye-slash" : "fa fa-eye"}
                            onClick={e => {
                                return setState({
                                    ...state,
                                    showPassword: !state.showPassword
                                })
                            }}
                        ></i>
                    </i>
                </div>
 * 
 */