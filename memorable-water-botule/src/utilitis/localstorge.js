const getCartFromLocalStorage=()=>{
    const storedCardString=localStorage.getItem('cart')
    if(storedCardString){
        const storedCard=JSON.parse(storedCardString)
        return storedCard;
    }
    return [];
}
const saveCartToLocalstorage=cart=>{
    const cartStringify=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify)
}

const removeFromLocalstorage=id=>{
    const storedCart=getCartFromLocalStorage();
    const remainingCart= storedCart.filter(storedId=>storedId !== id);
    saveCartToLocalstorage(remainingCart)


}
const addItemToCardLocalstorage=id=>{
    const cart = getCartFromLocalStorage();
    const newCart = [...cart,id]
    // cart.push(id)
//    save new cart to local storage.........
    saveCartToLocalstorage(newCart)
}
export{getCartFromLocalStorage as getStoredCart,
    addItemToCardLocalstorage as addToStordCard,
    removeFromLocalstorage as removeFromCart 
}