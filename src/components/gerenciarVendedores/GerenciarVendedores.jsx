import React, { useState } from "react";
import './GerenciarVendedores.css';

// redux 
import { useDispatch, useSelector } from "react-redux";
import { incremented, decremented, setUser } from '../../redux/redux.js';

//componentes 
import Menu from "../menu/Menu.jsx";

// utilitarios 
import Swal from "sweetalert2";
import { json, useNavigate } from "react-router-dom";
import connect from "../../config/connect.jsx";

const GerenciarVendedores = (props) => {

    const navigate = useNavigate();

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


    return (
        <div className="GerenciarVendedores">
            <Menu />

            <div className="container">
               
            <div
                className="usersDiv"
                onClick={e => navigate(`/cadastrar/vendedor`)}
            >
                <i
                    className="fa  fa-address-book"
                >

                </i>
                <span>
                    Cadastrar Vendedor
                </span>

            </div>
            
            <div
                className="usersDiv"
                onClick={e => navigate(`/Editar/vendedor`)}
            >
                <i
                    className="fa  fa-user"
                >

                </i>
                <span>
                    Editar Vendedor
                </span>

            </div>

            </div>




        </div>
    )
}


export default GerenciarVendedores;
