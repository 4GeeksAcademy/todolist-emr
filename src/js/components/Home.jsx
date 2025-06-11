import React from "react";
import { useState } from "react";
import Clock from "./Clock";

const Home = () => {

    const [inputValue, setInputValue] = useState("");
    const [toDos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que se regargue todo el rato
        const trimmedValue = inputValue.trim(); // Para que no se pueda mandar vacío
        if (trimmedValue !== "") {
            setTodos(prev => [...prev, trimmedValue]);
            setInputValue("");
        }
    };


    return (

            
        <div className="container">
            <div className="clock"> <Clock/> </div>
            <h1>Tareas pendientes</h1>

            <form onSubmit={handleSubmit}> 
                <input
                    type="text"
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} // Captura el texto y lo imprime
                    placeholder="¿Qué tienes pendiente?"
                />
            </form>

            <div className="todo-list">
                {toDos.length === 0 ? (
                    <div className="todo-item">Añade tareas</div>
                ) : (
                    toDos.map((item, index) => (                    // Recorre el array
                        <div key={index} className="todo-item">
                            {item}
                            <i
                                className="fa-solid fa-xmark delete-icon"
                                onClick={() =>
                                    setTodos(toDos.filter((_, i) => i !== index))   // Crea un nuevo array menos lo que coincide con el index
                                }
                            />
                        </div>
                    ))
                )}
            </div>

            {toDos.length > 0 && <div className="todo-count">{toDos.length} tareas pendientes</div>}
        </div>
    );
};

export default Home;
