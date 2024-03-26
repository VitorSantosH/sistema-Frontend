import React, { useState } from "react";
import './CadastrarVendedor.css';

// redux 
import { useDispatch, useSelector } from "react-redux";
import { incremented, decremented, setUser } from '../../redux/redux.js';

//componentes 
import Menu from "../menu/Menu.jsx";

// utilitarios 
import Swal from "sweetalert2";
import { json, useNavigate } from "react-router-dom";
import connect from "../../config/connect.jsx";

const CadastrarVendedor = (props) => {

    const emailRegex = /^[\w!#$%&'*+/=?`{|}~^-]*(@[\w!#$%&'*+/=?`{|}~^-]+(\.[\w!#$%&'*+/=?`{|}~^-]+)*)?(@[\w!#$%&'*+/=?`{|}~^-]+)?$/;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userRedux = useSelector(state => {
        return state.user;
    });

    const initialState = {
        loading: false,
        showPassword: false,
        password: "",
        email: "",
        name: "",
        newPassword: "",
        passRegex: "",
        emailRegex: "",
        nameRegex: ""
    }

    const user = JSON.parse(sessionStorage.getItem('user'));
    const [state, setState] = useState({
            ...initialState
    })

  

    async function CadastrarVendedor() {

        if (!state.name
            || state.name == ""
            || !state.password
            || state.password == ""
            || state.passRegex != ""
            || !state.email
            || state.email == "") {

            return Swal.fire({
                title: "Erro!",
                icon: "warning",
                text: "Preeencha todos os campos"
            })
        }

        setState(prevState => ({
            ...prevState,
            loading: !state.loading
        }));

        const response = await connect.cadVendedor({ ...state, token: user.token });

        console.log(response)

        if (response.status == 350) {

            Swal.fire({
                title: "Erro",
                icon: "warning",
                text: response.data
            })
        } else {
            Swal.fire({
                title: "Sucesso",
                icon: "success",
                text: "Usuário criado com sucesso!"
            })
            return setState(prevState => ({
                ...initialState
            }));
        }

        

        return setState(prevState => ({
            ...prevState,
            loading: false
        }));

    }

    return (
        <div className="CadastrarVendedor">
            <Menu />


            <div 
                className="containerRegistroForm"
                onKeyDown={e => {
                    if(e.key == "Enter" && !state.loading) {
                        return CadastrarVendedor();
                    }
                }}
                >

                <h2>
                    Cadastrar Vendedor
                </h2>

                <div className={`nameRegistro ${state.nameRegex}`}>
                    <i className="fa fa-sticky-note ">
                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Digite o nome do vendedor"
                            value={state.name}

                            onChange={e => {

                                let nameRegex = "";
                                const name = e.target.value;
                                if (e.target.value == "") {
                                    nameRegex = "redRegex";
                                }

                                return setState(prevState => ({
                                    ...prevState,
                                    name: name,
                                    nameRegex: nameRegex
                                }));

                            }}

                        />
                    </i>
                </div>

                <div className={state.emailRegexClass}>
                    <i className="fa fa-user">
                        <input
                            type="email"
                            name=""
                            id=""
                            placeholder="Digirte o email"
                            value={state.email}
                            onChange={e => {
                                let emailRegexClass = "";

                                if (!emailRegex.test(e.target.value) || e.target.value == "") {
                                    emailRegexClass = "redRegex";
                                }
                                const email = e.target.value;
                                console.log(emailRegexClass)
                                return setState(prevState => ({
                                    ...prevState,
                                    email: email,
                                    emailRegexClass: emailRegexClass
                                }));

                            }}

                        />
                    </i>
                </div>

                <div className="passwordRegistro">
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

                {state.passRegex != "" && (
                    <label>
                        As duas senhas são diferentes
                    </label>
                )}

                <div className={`passwordRegistro ${state.passRegex}`}>
                    <i className="fa fa-lock">
                        <input
                            type={state.showPassword ? 'password' : "text"}
                            name=""
                            id=""
                            placeholder="Digite novamente a nova senha"
                            value={state.newPassword}
                            onChange={e => {

                                let passRegex = "";
                                if (e.target.value != state.password) {
                                    passRegex = "redRegex";
                                }

                                setState({
                                    ...state,
                                    newPassword: e.target.value,
                                    passRegex: passRegex
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

                <section
                    onClick={e => {
                        if (!state.loading) {
                            CadastrarVendedor(e)
                        }
                    }}
                    className="btn"

                >

                    {!state.loading && (
                        <span >
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


export default CadastrarVendedor;
