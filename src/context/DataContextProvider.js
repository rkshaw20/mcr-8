import { createContext, useContext, useState } from "react";



const DataContext= createContext({})


export const useDataContext=()=> useContext(DataContext);

const DataContextProvider=({children})=>{
  

    return(
        <DataContext.Provider   >
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;