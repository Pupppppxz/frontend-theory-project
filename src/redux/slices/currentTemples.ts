import { createSlice } from '@reduxjs/toolkit'
import { ITemple } from 'interfaces/temples'

interface ITempleSlice {
    items: ITemple[] | null;
    currentItem: ITemple | null;
}

const initialState: ITempleSlice = {
    items: null,
    currentItem: null
}

export const templeSlice = createSlice({
    name: "temples",
    initialState,
    reducers: {
        setTemples: (state, action) => {
            state.items = action.payload
        },
        setCurrentTemple: (state, action) => {
            state.currentItem = action.payload
        }
    }
})

export const { setTemples, setCurrentTemple } = templeSlice.actions

export default templeSlice.reducer