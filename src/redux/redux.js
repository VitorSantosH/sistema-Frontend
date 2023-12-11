import {createSlice, configureStore} from '@reduxjs/toolkit';


const stateRedux = createSlice({
    name: "stateRedux",
    initialState: {
        count: 0
    }, 
    reducers: {

        incremented: state => {
            
            state.count += 1
        },
        decremented: state => {
            state.count -= 1
        },

    }

})

const store = configureStore({
    reducer: stateRedux.reducer
})

export const {incremented, decremented} = stateRedux.actions;

export default store;