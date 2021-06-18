import React, {useState} from "react";
export const DashContext = React.createContext();
export const UserContext = React.createContext();
export const CartContext = React.createContext();

const Store = ({children}) => {
    const [dash, setDash] = useState(0);
    const [User, setUser] = useState(0);
    const [cart, setCart] = useState([]);

    return(
        <DashContext.Provider value = {[dash, setDash]}>
            <UserContext.Provider value = {[User, setUser]}>
                <CartContext.Provider value = {[cart, setCart]}> 
                    {children}
                </CartContext.Provider>
            </UserContext.Provider>
        </DashContext.Provider>
    )
}

export default Store;