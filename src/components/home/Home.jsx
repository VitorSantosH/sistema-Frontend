//react
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// css + assets
import './Home.css';

//redux
import { useDispatch, useSelector } from "react-redux";
import { incremented, decremented, setUser } from '../../redux/redux.js';

// componentes 
import Menu from "../menu/Menu";

// api 
import api from "../../config/api";

// outras importações 
import Swal from "sweetalert2";

const Home = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userRedux = useSelector(state => {
        return state.user;
    });
    const [state, setState] = useState({
        user: undefined,
        loginVerificado: false
    });


    useEffect(() => {

        if (!state.loginVerificado) {
            verifyLogin()
            return setState({
                ...state,
                loginVerificado: true
            })
        }

    }, [])

    function verifyLogin() {

        const user = sessionStorage.getItem('user');

        if (!user) {
            navigate('/')
            return Swal.fire({
                title: "Erro",
                icon: "error",
                text: "Preencha corretamente os dados para efetuar o login."
            })

        }

        return dispatch(setUser(user))

    }


    const countRedux = useSelector(state => {

        return state.count

    });






    return (
        <>

            <Menu />
            <div className="home">
                <h1
                    onClick={e => {
                        return dispatch(decremented())
                    }}
                >

                    {
                        /**
                         * 
                         * <span>
                            {countRedux}
                           </span>
    
                         * 
                         */
                    }
                    {userRedux && (

                        <span>
                            Bem-vindo, {userRedux.name}
                        </span>
                    )}

                </h1>


                <div className="containerTails">

                    <div
                        className="usersDiv"
                        onClick={e => navigate('/esteira-proposta')}
                    >

                        <i className="fa fa-codepen">
                        </i>

                        <span>
                            Consultar Proprostas
                        </span>

                    </div>

                    <div
                        className="usersDiv"
                        onClick={e => navigate(`/AdicionarXlsx`)}
                    >

                        <i
                            className="fa fa-database"
                        >

                        </i>

                        <span>
                            Adicionar propostas xlsx
                        </span>

                    </div>


                </div>

            </div>

        </>
    )

}


export default Home;