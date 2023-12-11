import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useParams
} from "react-router-dom";

import Home from "./components/home/Home";
import CadastroFgts from './components/cadastroFgts/CadastroFgts';

const Rotas = () => {

    return (

        <Router>
            <Routes>


                <Route exact path="/cadastro" element={<CadastroFgts />} />
                <Route exact path="/" element={<Home />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>
        </Router>


    )

}

export default Rotas;