import React, { useState } from 'react';
import { languageContext } from '.';

const RouteContext = ({children}) => {
    const[language, setLanguage]=useState("")
    return (
     <languageContext.Provider value={{
language,
setLanguage
     }}>
{children}
     </languageContext.Provider>
    );
};

export default RouteContext;