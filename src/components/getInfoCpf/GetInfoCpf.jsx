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
import connect from "../../config/connect.jsx";

const GetInfoCpf = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fileInputRef = useRef();
    const userRedux = useSelector(state => {
        return state.user;
    });
    const [state, setState] = useState({
        user: undefined,
        loginVerificado: false,
        loading: false,
        links: [],
        loadedPlanilhas: false,
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

        if(!state.loadedPlanilhas) {
            console.log('aqui')
            getAllXls();
        }

    }, [state.links, state.loadedPlanilhas])

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

                setState(prevState => ({
                    ...prevState,
                    loading: false,
                    loadedPlanilhas: true
                }))
                resetFileInput()
                return Swal.fire({
                    icon: "success",
                    title: 'Resultado',
                    text: ` `
                })
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    loading: false
                }))
                console.error('Erro ao fazer upload:', error);
            }
        } else {
            setState(prevState => ({
                ...prevState,
                loading: false
            }))
            alert('Por favor, selecione um arquivo antes de fazer o upload.');
        }
    };


    const resetFileInput = () => {
        setSelectedFile(null);
        // Resetando o valor do input file
        fileInputRef.current.value = null;
    };

    const getInfosData = async () => {

        const response = await api.get('/cpfinfo/getRequestInfos');


        return console.log(response.data)

    }

    const getAllXls = async () => {

        if(!state.loadedPlanilhas)

        try {
            const response = await connect.getNamesXls();

            //  const caminhoPagina = window.location.pathname;
            const hostPagina = window.location.host;
            // const protocoloPagina = window.location.protocol;

            //  console.log('Caminho:', caminhoPagina);
            // console.log('Host:', hostPagina);
            // console.log('Protocolo:', protocoloPagina);

            const links = [];

            response.data.forEach(element => {
                let string = `/static/${element.name}`
                let size = element.size

                let obj = {
                    string,
                    size,
                    name: element.name
                }
                links.push(obj)
            });

            setState(prevState => ({
                ...prevState,
                links: links,
                loadedPlanilhas: true
            }))

        } catch (error) {

            Swal.fire({
                icon: "error",
                title: "Erro",
                text: "Falha ao carregar planilhas"
            })

        }
    }

    const ReturnLinksDiv = () => {

        const element = [];

        state.links.forEach((link, index) => {

            element.push(<div key={index + link.name}>
                <p> {link.name} {`${(link.size/1024).toFixed(2)}MB`}: <a href={link.string} target="_blank" rel="noopener noreferrer">
                    <i className="fa fa-download ">
                    </i></a></p>
            </div>)
        })

        return element

    }

    getAllXls();
   

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

                            {state.loading && (
                                <div id="loading-login" className="spinner">
                                </div>
                            )}
                            {!state.loading && (
                                <button onClick={e => {
                                    setState(prevState => ({
                                        ...prevState,
                                        loading: true
                                    }))
                                    handleUpload()
                                }}> <i className="fa fa-upload"></i>Fazer Upload</button>
                            )}
                        </>
                    )}

                    <div>

                        {planilhaLink && <p>Link da Planilha: <a href={planilhaLink} target="_blank" rel="noopener noreferrer">{planilhaLink}</a></p>}
                    </div>


                    <div style={{ display: "flex" }}>
                        <button
                            onClick={e => {
                                // return getInfosData();

                              //  return getAllXls()
                              getInfosData();
                            }}
                        >
                            Click
                        </button>
                    </div>


                </div>

                {state.links.length > 0 && (
                    <div className="links"
                        
                    >
                        {ReturnLinksDiv()}
                    </div>
                )}
            </div>

        </>
    )

}


export default GetInfoCpf;