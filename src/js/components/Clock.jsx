import React from "react";
import { useState,  useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            Hora actual: {time}
        </div>
    );
};

export default Clock;

// Se que esto no era necesario, pero quería probar qué tal