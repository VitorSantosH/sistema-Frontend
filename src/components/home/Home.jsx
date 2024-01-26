//react
import React, { useState } from "react";

// css + assets
import './Home.css';

//redux
import { useDispatch, useSelector } from "react-redux";
import {incremented, decremented, } from '../../redux/redux.js';


import Menu from "../menu/Menu";

// api 
import api from "../../config/api";

const Home = () => {

    const dispatch = useDispatch();
    const store = useSelector(state => {

        return state;

    });

    const state = useState({

    });

    const countRedux = useSelector(state => {

        return state.count

    });

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {

        const file = event.target.files[0];

        // Verifica se um arquivo foi selecionado
        if (file) {
            // Verifica a extensão do arquivo
            const isXLSX = file.name.endsWith('.xlsx');

            if (isXLSX) {
                // Armazena o arquivo selecionado
                setSelectedFile(file);
            } else {
                // Exibe uma mensagem de erro se o arquivo não for um XLSX
                alert('Por favor, selecione um arquivo XLSX válido.');
            }
        }
    };
    const handleUpload = async () => {
        if (selectedFile) {
            try {
                const formData = new FormData();
                formData.append('file', selectedFile);

                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                };

                const response = await api.post('upload-xls', formData, config);

                // Lide com a resposta do servidor conforme necessário
                console.log('Resposta do servidor:', response.data);
            } catch (error) {
                console.error('Erro ao fazer upload:', error);
            }
        } else {
            alert('Por favor, selecione um arquivo antes de fazer o upload.');
        }
    };





    return (
        <>

            <Menu />
            <div className="home">
                <h1 
                    onClick={e => {

                        console.log(store)
                        console.log('aqui')
                        return dispatch(decremented())
                    }}
                >

                    Home

                    <span>
                        {' '}
                    </span>

                    <span>
                        {countRedux}
                    </span>

                </h1>


                <div>
                    <input
                        type="file"
                        accept=".xlsx"
                        onChange={handleFileChange}
                    />
                    {selectedFile && (
                        <>
                            <p>Arquivo selecionado: {selectedFile.name}</p>
                            <button onClick={handleUpload}>Fazer Upload</button>
                        </>
                    )}
                </div>
            </div>

        </>
    )

}


export default Home;