import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthenticates: false,
    isLoading: false,
    user : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        setUser:(state,acttion)=>{

        }
    }


})
export const {setUser} = authSlice.actions;
export default authSlice.reducer;