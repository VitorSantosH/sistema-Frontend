import React, { useState } from "react";
import './EsteiraProposta.css';
import NumberFormat from 'react-number-format'
import axios from 'axios';
import swal from 'sweetalert2'

//components 
import Menu from "../menu/Menu";

const EsteiraProposta = (props) => {

    return (
        <>
            <Menu/>
            <div className="esteiraProposta">
                <h1>
                    Proposta
                </h1>
            </div>
        </>
    )
}


export default EsteiraProposta;