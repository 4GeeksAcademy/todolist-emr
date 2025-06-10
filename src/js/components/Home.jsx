import React from "react";
import { useState } from "react";
import Clock from "./Clock";

const Home = () => {

	const [ inputValue, setInputValue] = useState("")
	const [toDos, setTodos] = useState ([]);


    return (
        <div className="container">
            <Clock></Clock>
            <h1>Tareas pendientes</h1>
            <ul>
                <li>
                    <input
                        type="text"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && inputValue.trim() !== "") {
                                setTodos([...toDos, inputValue.trim()]);
                                setInputValue("");
                            }
                        }}
                        placeholder="¿Qué tienes pendiente?"
                    />
                </li>

                {toDos.length === 0 ? (
                    <li>
                        Añade tareas
                    </li>
                ) : (
                    toDos.map((item, index) => (
                        <li
                            key={index}

                        >
                            {item}
                            <i
                                className="fa-solid fa-xmark delete-icon"
                                onClick={() =>
                                    setTodos(toDos.filter((unusedTodo, currentIndex) => index !== currentIndex))
                                }
                            />
                        </li>
                    ))
                )}
            </ul>
                
            {toDos.length > 0 && (
                <div>{toDos.length} tareas pendientes</div>
            )}
        </div>
    );
};

export default Home;

// Creo que es un componente largo, a futuro si fuera un proyecto real lo más eficiente sería dividirlo