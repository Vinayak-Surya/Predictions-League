import React, { useState, createContext } from "react";

export const MatchDayContext = createContext();

const MatchDayData = ({ children }) => {
    const [matchday, setMatchday] = useState(22);
    return (
        <MatchDayContext.Provider value={{ matchday, setMatchday }}>
            {children}
        </MatchDayContext.Provider>
    );
}

export default MatchDayData;