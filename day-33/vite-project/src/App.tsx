import React, {useState,useEffect,useContext} from 'react'
import './App.css'
import ThemeContext from './ThemeContext'

const App = () => {
  const [counter, setCounter] = useState<number | null>(null);
  const [theme,setTheme] = useState<boolean>(false)
  useEffect(() => {
  setCounter(1)
  }, [])
  return (
    <ThemeContext.Provider value={}>
    <div className="App">
      <button onClick={() => {
        setCounter(counter + 1)
      }}>{counter}</button>
    </div>
    </ThemeContext.Provider>
  );
}

export default App
