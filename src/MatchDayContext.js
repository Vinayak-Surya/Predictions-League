import React, { useState, createContext, useEffect } from "react";

export const MatchDayContext = createContext();

const MatchDayData = ({ children }) => {
    const [matchday, setMatchday] = useState(22);
    return (
        <MatchDayContext value={{ matchday, setMatchday }}>
            {children}
        </MatchDayContext>
    );
}

export default MatchDayData;