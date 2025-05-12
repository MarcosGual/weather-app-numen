import { useState, useEffect } from 'react';
import { saveToLocalStorage, getFromLocalStorage } from '../utils/localStorage';

const useTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  
  useEffect(() => {
    const savedTheme = getFromLocalStorage('darkTheme');
    if (savedTheme) {
      setDarkTheme(savedTheme === 'true');
    }
  }, []);
  
  useEffect(() => {
    saveToLocalStorage('darkTheme', darkTheme);
  }, [darkTheme]);
  
  const toggleTheme = () => setDarkTheme(!darkTheme);
  
  return { darkTheme, toggleTheme };
};

export default useTheme;