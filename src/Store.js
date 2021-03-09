import React, {useState} from "react";
export const DashContext = React.createContext();

const Store = ({children}) => {
    const [dash, setDash] = useState(0);

    return(
        <DashContext.Provider value = {[dash, setDash]}>
            {children}
        </DashContext.Provider>
    )
}

export default Store;