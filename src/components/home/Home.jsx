//react
import React, { useState } from "react";

// css + assets
import './Home.css';

//redux
import { useDispatch, useSelector } from "react-redux";
import Menu from "../menu/Menu";


const Home = () => {

    const dispatch = useDispatch();
    const store = useSelector(state => {
        return state.count;
    });

    const state = useState({ 

    });
   
    const countRedux = useSelector(state => {
  
      return state.count
      
    });



    return (
     <>

        <Menu/>
        <div className="home">
            <h1>

                Home

                <span>
                    {' '}
                </span>

                <span>
                    {countRedux}
                </span>
                
            </h1>
        </div>
     
     </>
    )

}


export default Home;