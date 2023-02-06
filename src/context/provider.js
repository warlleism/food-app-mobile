import { createContext, useState } from "react";

export const Context = createContext()

export default function Provider({ children }) {

    const [dataArray, setDataArray] = useState([])

    return (
        <Context.Provider value={{ dataArray, setDataArray }}>
            {children}
        </Context.Provider>
    )
}