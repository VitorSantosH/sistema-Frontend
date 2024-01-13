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
import CadastroConsignado from "./components/cadastroConsignado/CadastroConsignado";
import EsteiraProposta from "./components/esteiraProposta/EsteiraProposta";

const Rotas = () => {

    return (

        <Router>
            <Routes>

                <Route exact path="/esteira-proposta" element={<EsteiraProposta />} />
                <Route exact path="/cadastro-CONSIGNADO" element={<CadastroConsignado />} />
                <Route exact path="/cadastro-FGTS" element={<CadastroFgts />} />
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