import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {CloseOutLined, CheckOutLined} from "@ant-design/icons";

function App() {
    const [typedInTodo, setTypedInTodo] = useState("");
    const [pendingTodos, setPendingTodos] = useState([]); //pending section to hold submitted todos. initially empty array

    //use onKeyDown listener on input field to add todos to the pending section with enter key. spread operator to add todos to the pendingTodos
    //clear input field once todos submitted by updating the typedInTodo state to empty string
    function onKeyDown(e) {
        if (e.key === "Enter" && typedInTodo.trim()) {
            setPendingTodos([...pendingTodos, typedInTodo]);
            setTypedInTodo("");
            console.log(typedInTodo)
        }
    }

    return (
        <div className="app">

            {/*//store application state here using React.useState hook. save user input to the state variable and set the state to the new value.*/}
            <h1>Todo</h1>
            <input type="test" placeholder="Add todo..." value={typedInTodo}
                   onChange={(e) => setTypedInTodo(e.target.value)}
                   onKeyDown={onKeyDown}
            />

            <div className="sectionsContainer">
                <div className="todoContainer">
                    <h2 className={pendingTodos.length > 0
                        ? "boldSectionTitle"
                        : "dimmedSectionTitle"
                    }>
                        Pending
                    </h2>

                    <div>
                        {pendingTodos.map((todo, index) => (
                            <div key={index} className="todoItem">
                                <p>{todo}</p>
                                <div className="buttonsSection">
                                    <button className="transparent completeButton">
                                        <CheckOutlined className="icon"/>
                                    </button>
                                    <button className="transparent deleteButton">
                                        <CloseOutlined className="icon"/>
                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>


            </div>
            );
            }

            export default App;


            //https://dev.to/amirmoh10/how-to-build-a-todo-app-using-some-of-the-best-coding-practices-in-javascript-and-react-4oem
