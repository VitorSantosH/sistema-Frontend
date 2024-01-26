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

        if(!state.loginVerificado) {
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

                    {userRedux && (

                        <span>
                            {userRedux.name}
                        </span>
                    )}

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