import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name:'cards',
    initialState:[
        {
            id:1,
            title:'Feedbacks',
            body:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .'        
        },
        {
            id:2,
            title:'Weely Task',
            body:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .'    
        },
        {
            id:3,
            title:'Lyrics',
            body:'Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .'    
        }
    ],
    reducers:{
        add:(state,action)=>{
            const newCard = action.payload;
            state.push(newCard)
        },
        remove:(state,action)=>{
           const cardRemove = action.payload;
           return state.filter((card)=>card.id !== cardRemove);
        },
        edit:(state,action)=>{
            const {id, updateddata }=action.payload;
            const editedCardIndex = state.findIndex((card) =>card.id === id);

            if(editedCardIndex !== -1){
                const editedCard = {...state[editedCardIndex], ...updateddata };
                state[editedCardIndex] = editedCard;
            }
        },
        toggle:(state,action)=>{
            
        }
    }
})

export const {add,remove,edit,toggle} = cardsSlice.actions
export default cardsSlice.reducer