import React,{useState, useReducer} from 'react';

const PopupContext = React.createContext({
    showPopup: false,
    cart: [],
    totalAmount : 0,
    togglepopup: (state)=>{},
    closePopup:()=>{},
    addItemToCart:(item)=>{},
    removeItemFromCart:(item)=>{}
});

const cartReducer = (state, action) => {

    switch(action.type){
        case 'ADD_ITEM' :      
        const item = [...state.items]; 
        const updatedAmount = state.totalAmount + parseInt(action.payload.amount) * action.payload.price
        const existingItemIndex = item.findIndex((cur)=> cur.id === action.payload.id);
        const existingItem = item[existingItemIndex];
        if(existingItem){
            const updatedItem = {...existingItem};
            updatedItem.amount += parseInt(action.payload.amount);
            item[existingItemIndex]  = updatedItem;
            return {items: item, totalAmount:updatedAmount};
        }else{
            return {items:item.concat(action.payload), totalAmount:updatedAmount};
        }

        
        case 'RM_ITEM' :
        const itemInList = [...state.items];
        const existingRmItemIndex = itemInList.findIndex((cur)=> cur.id === action.payload.id);
        const existingRmItem = itemInList[existingRmItemIndex];
        const updatedCart = {...existingRmItem};
        (updatedCart.amount >0 )? updatedCart.amount -=1 : updatedCart.amount = 0;
        const rmAmount = state.totalAmount - (updatedCart.price);
        (updatedCart.amount >0 )? itemInList[existingRmItemIndex] = updatedCart : itemInList.splice(existingRmItemIndex,1);
        return {items:itemInList,totalAmount:rmAmount};
        
        default : return {...state};
    }

};

export const PopupComponentContext = (props) =>{
    const [showPopup, togglePopup] = useState(false);
    const [cartItems, CartDispatch] = useReducer(cartReducer,{items:[], totalAmount:0});

    const toggleHandler = (state)=>{
        togglePopup(state);
    };

    const closeHandler = () =>{
        togglePopup(false)
    }

    const addItemToCartHandler = (item) =>{
        if(item.amount > 0){
            CartDispatch({type:'ADD_ITEM', payload: item});
        }
    };

    const removeItemHandler = (item) => {
        CartDispatch({type:'RM_ITEM', payload: item});
    };
    
   return <PopupContext.Provider value={{
        showPopup:showPopup,
        cart: cartItems.items,
        totalAmount: cartItems.totalAmount,
        togglepopup : toggleHandler,
        closePopup: closeHandler,
        addItemToCart: addItemToCartHandler,
        removeItemFromCart : removeItemHandler,
    }}
    >{props.children}</PopupContext.Provider>
};
export default PopupContext;