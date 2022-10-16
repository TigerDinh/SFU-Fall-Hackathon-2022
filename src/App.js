import React from "react";
import './App.css';
import React from 'react';
import Timer from "./Timer";
import Settings from "./Settings";
import {useState} from "react";
import SettingsContext from "./SettingsContext";
import Typewriter from 'typewriter-effect/dist/core';

import TodoList from './todoList';
function App() {

  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (

    <div className='rowCC'>
    
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>

    <div className='todo-app'>
      <TodoList />
    </div>
    
    </div>
    

  );
}

export default App;
