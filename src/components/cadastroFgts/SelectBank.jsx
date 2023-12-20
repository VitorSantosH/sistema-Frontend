import React, { useState } from "react";
import Select from 'react-select';
import './SelectBank.css'

import { emissores, ufs, bancosBrasil } from './ufs_orgEmissor.jsx';

const SelectBank = props => {


    const [selectBankOption, setSelectBankOption] = useState(null);

    function CreateBancosOptions() {

        const bancos = bancosBrasil.map((e, i) => {

            /*return (
                <option key={e.bank + i} value={e.bank}>{`${e.code}: ${e.bank}`}</option>
            )
            */
            return { value: e.bank, label: `${e.code}: ${e.bank}` }
        })

        return bancos
    }

    const customStyles = {
        control: (provided) => ({
            ...provided,
            textAlign: 'left',  // Alinha o texto à esquerda dentro do controle
        }),
        option: (provided) => ({
            ...provided,
            textAlign: 'left',  // Alinha o texto à esquerda dentro da opção
        }),

    }

    return (
        <div className="selectBanck">

            <div className="containerSelect">

                <label htmlFor="ufrg">Banco:</label>

                <div className="selectBox">

                    <section className='btnIcon'>
                        <i className="fa fa-map-marker" />

                        <Select
                        placeholder='Selecione...'
                        menuPosition="fixed"
                        defaultValue={selectBankOption}
                        onChange={e => {

                     
                            props.setBankOption(e)
                            return setSelectBankOption(e)
                        }}
                        options={CreateBancosOptions()}
                        styles={customStyles}
                    />


                    </section>

                  
                </div>

            </div>
        </div>
    )
}


export default SelectBank