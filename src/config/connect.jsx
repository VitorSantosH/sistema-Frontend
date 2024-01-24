
import api from "./api";
import config from './.config.jsx';

const connect = {



    login: async (props) => {

        const response = await api.post('/user/login', {

            email: props.email,
            password: props.password

        }, {
            headers: {
                //  'Authorization': `${sessionStorage.getItem('authToken')}`,
            },
        })
            .then(res => {

                return res

            }).catch(err => {

                return err.response
            })

        return response
    },

    getPropostas: async (props) => {


        const params = {
            ...props
        };

        const headers = {
            // Adicione este cabeçalho se necessário
            // Authorization: `${sessionStorage.getItem('authToken')}`,
        };


        const response = await api.get('/propostas', { params, headers })
            .then(res => {

                return res

            }).catch(err => {

                return err.response
            })

        return response

    },

    getPropostasFacta: async (props) => {


        const params = {
            ...props
        };

        const headers = {
            // Adicione este cabeçalho se necessário
            // Authorization: `${sessionStorage.getItem('authToken')}`,
        };


        const response = await api.get('/propostas', { params, headers })
            .then(res => {

                return res

            }).catch(err => {

                return err.response
            })

        return response

    },

    getCliente: async (props) => {

        const params = {
           cpf: props.cpf
        };
        
        const headers = {
            // Adicione este cabeçalho se necessário
            // Authorization: `${sessionStorage.getItem('authToken')}`,
        };
        const response = await api.get('/propostas/cliente', { params, headers })
            .then(res => {

                return res

            }).catch(err => {

                return err.response
            })

        return response

    }


}


export default connect;