import React, {useState} from "react";
export const DashContext = React.createContext();
export const UserContext = React.createContext();
export const CartContext = React.createContext();
export const OrderContext = React.createContext();
export const ExpandContext = React.createContext();

const Store = ({children}) => {
    const [dash, setDash] = useState(0);
    const [User, setUser] = useState(0);
    const [expand, setExpand] = useState(false);
    const [cart, setCart] = useState([]);
    const [orders, setOrders] = useState([]);

    return(
        <DashContext.Provider value = {[dash, setDash]}>
            <UserContext.Provider value = {[User, setUser]}>
                <CartContext.Provider value = {[cart, setCart]}>
                    <ExpandContext.Provider value = {[expand, setExpand]}>
                        <OrderContext.Provider value = {[orders, setOrders]}>
                            {children}
                        </OrderContext.Provider>
                    </ExpandContext.Provider>
                </CartContext.Provider>
            </UserContext.Provider>
        </DashContext.Provider>
    )
}

export default Store;