import {createSlice, configureStore} from '@reduxjs/toolkit';


const stateRedux = createSlice({
    name: "stateRedux",
    initialState: {
        count: 0,
        propostas: []
    }, 
    reducers: {

        incremented: state => {
            
            state.count += 1
        },
        decremented: state => {
            state.count -= 1
        },
        propostas: (state, action) => {
            state.propostas = action.payload
        }

    }

})

const store = configureStore({
    reducer: stateRedux.reducer
})

export const {incremented, decremented, propostas} = stateRedux.actions;

export default store;