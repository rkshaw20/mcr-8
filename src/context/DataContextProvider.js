import { createContext, useContext, useState } from "react";
import { eventData } from "../utils/constant";



const DataContext= createContext({data:[]})


export const useDataContext=()=> useContext(DataContext);

const DataContextProvider=({children})=>{
  const [data,setData]=useState(eventData.meetups)

    return(
        <DataContext.Provider value={{data}}  >
            {children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;