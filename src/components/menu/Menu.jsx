import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";


//redux
import { useDispatch, useSelector } from "react-redux";
import { incremented, decremented, setUser } from '../../redux/redux.js';

const Menu = () => {

    let user = {
        name: 'teste',
        role: 'admin'
    }
    const dispatch = useDispatch();
    const userRedux = useSelector(state => {
        return state.user;
    });
    const [state, setState] = useState({
        showMobileMenu: false,
        showDrop: false,
        showDropFgts: false
    })
    const navigate = useNavigate();
    //user = JSON.parse(sessionStorage.getItem('user'));

    function logout() {
        sessionStorage.removeItem('user');
        return navigate('/')
    }

    return (
        <div className="menu">


            <div className="menuArea2">
                <div
                    className="homeBtn fixed"
                    onClick={e => {
                        return navigate("/home");
                    }}
                >
                    <i className="fa fa-home"></i>
                    <span>Início</span>
                </div>

            </div>

            <div className="menuArea2">

                <div className="custonDropContainer"

                >



                    <span

                        className="homeBtn"
                        onClick={e => {

                            return setState({
                                ...state,
                                showDrop: !state.showDrop
                            })
                        }}
                    >
                        <i className="fa fa-file-text-o "></i>
                        <span>
                            Cadastro
                        </span>
                    </span>

                    <div
                        className={state.showDrop ? "custonDropDown showDrop" : "custonDropDown"}
                    >

                        <section
                        >
                            <span
                                onClick={e => {
                                    return setState({
                                        ...state,
                                        showDropFgts: !state.showDropFgts
                                    })
                                }}
                            >
                                Cadastro
                                <i
                                    className={state.showDropFgts ? "fa fa-arrow-down" : "fa fa-arrow-right"}
                                ></i>
                            </span>

                            <section
                                className={state.showDropFgts ? 'showDropFgts activeFgts' : 'showDropFgts'}
                                onClick={e => {
                                    return navigate('/cadastro-FGTS')
                                }}
                            >
                                FGTS
                            </section>

                            <section
                                className={state.showDropFgts ? 'showDropFgts activeFgts' : 'showDropFgts'}
                                onClick={e => {
                                    return navigate('/cadastro-CONSIGNADO')
                                }}
                            >
                                CONSIGNADO
                            </section>

                        </section>


                        <section
                        >
                            <span
                                onClick={e => {
                                    return navigate('/esteira-proposta')
                                }}
                            >

                                Esteira Proposta

                            </span>


                        </section>


                        
                        <section
                        >
                            <span
                                onClick={e => {
                                    return navigate('/esteira-pos-venda')
                                }}
                            >

                                Esteira Pós-venda

                            </span>


                        </section>
 
                           
                        <section
                        >
                            <span
                                onClick={e => {
                                    return navigate('/esteira-contestacao')
                                }}
                            >

                                Esteira Contestação

                            </span>


                        </section>


                           
                        <section
                        >
                            <span
                                onClick={e => {
                                    return navigate('/esteira-clientes')
                                }}
                            >

                                Clientes
                            </span>


                        </section>


                    </div>

                </div>




                {user.role === "admin" && (
                    <div
                        className="homeBtn"
                        onClick={e => {
                            return navigate("/notificacoes");
                        }}
                    >
                        <i className="fa fa-bell">

                        </i>
                        <span>
                            Notificações
                        </span>
                    </div>
                )}

                <div
                    className="homeBtn"
                    onClick={e => {
                        return navigate('/user')
                    }}
                >
                    <i className="fa fa-user">

                    </i>
                    <span>
                        {
                            userRedux.name
                        }
                    </span>
                </div>



                <div
                    className="homeBtn"
                    onClick={e => {
                        return logout();
                    }}
                >
                    <i className="fa fa-sign-out"></i>
                    <span>
                        Sair
                    </span>
                </div>

                <div
                    className="containerLinksMoblile"
                    onClick={e => {
                        return setState({
                            ...state,
                            showMobileMenu: !state.showMobileMenu
                        })
                    }}

                >
                    <i className={state.showMobileMenu ? "fa fa-times" : "fa fa-bars"} aria-hidden="true"></i>
                </div>
            </div>

            <div className={state.showMobileMenu ? "moblileMenu active" : "moblileMenu"}>
                <div
                    className="homeBtn"
                    onClick={e => {
                        return navigate('/user')
                    }}
                >

                    <span>
                        {
                            userRedux.name
                        }
                    </span>
                    <i className="fa fa-user">

                    </i>
                </div>

                <div
                    className="homeBtn"
                    onClick={e => {
                        return navigate('/cadastro-FGTS')
                    }}
                >
                    <span>
                        Cadastro
                    </span>
                    <i className="fa fa-file-text-o "></i>
                </div>

                {user.role === "admin" && (
                    <div
                        className="homeBtn"
                        onClick={e => {
                            return navigate("/notificacoes");
                        }}
                    >
                        <span>
                            Notificações
                        </span>
                        <i className="fa fa-bell">

                        </i>
                    </div>
                )}

                <div
                    className="homeBtn"
                    onClick={e => {
                        return logout();
                    }}
                >

                    <span>
                        Sair
                    </span>
                    <i className="fa fa-sign-out"></i>
                </div>
            </div>
        </div>
    )
}

export default Menu;