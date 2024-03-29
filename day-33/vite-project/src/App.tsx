import React, {useState,useEffect,useContext} from 'react'
import './App.css'
import ThemeContext from './ThemeContext'
import ThemeToggle from './ThemeToggle'
import Todos from './Todos'


const App = () => {
  
  const [theme,setTheme] = useState<boolean>(false)
  
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className="App">
      <Todos/>
      <ThemeToggle />
    </div>
    </ThemeContext.Provider>
  );
}

export default App
