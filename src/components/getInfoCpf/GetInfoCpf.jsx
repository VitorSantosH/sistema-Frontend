//react
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

// css + assets
import './GetInfoCpf.css';

//redux
import { useDispatch, useSelector } from "react-redux";
import { incremented, decremented, setUser } from '../../redux/redux.js';

// componentes 
import Menu from "../menu/Menu.jsx";

// api 
import api from "../../config/api.jsx";
import configBase from "../../config/.config.jsx";

// outras importações 
import Swal from "sweetalert2";

const GetInfoCpf = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fileInputRef = useRef();
    const userRedux = useSelector(state => {
        return state.user;
    });
    const [state, setState] = useState({
        user: undefined,
        loginVerificado: false
    });
    const [planilhaLink, setPlanilhaLink] = useState('');

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

                const response = await api.post('/cpfinfo/upload-cpfs', formData, config);

                console.log(response)

                

                try {
                    setPlanilhaLink(`${configBase.baseURL}${response.data.url}`);
                } catch (error) {
                    console.error('Erro ao obter o link da planilha:', error);
                }

                resetFileInput()
                return Swal.fire({
                    icon: "success",
                    title: 'Resultado',
                    text: ` `
                })
            } catch (error) {
                console.error('Erro ao fazer upload:', error);
            }
        } else {
            alert('Por favor, selecione um arquivo antes de fazer o upload.');
        }
    };

    const resetFileInput = () => {
        setSelectedFile(null);
        // Resetando o valor do input file
        fileInputRef.current.value = null;
    };



    return (
        <>

            <Menu />
            <div className="GetInfoCpf">

                <div className="uploadContainer">

                    <input
                        type="file"
                        accept=".xlsx"
                        onChange={handleFileChange}
                        ref={fileInputRef}

                    />


                    {selectedFile && (
                        <>
                            <p>Arquivo selecionado: {selectedFile.name}</p>

                            <button onClick={handleUpload}> <i className="fa fa-upload"></i>Fazer Upload</button>
                        </>
                    )}

                    <div>
                       
                        {planilhaLink && <p>Link da Planilha: <a href={planilhaLink} target="_blank" rel="noopener noreferrer">{planilhaLink}</a></p>}
                    </div>
                </div>
            </div>

        </>
    )

}


export default GetInfoCpf;