
import react, { useState, useEffect } from 'react'


export default function useLocalStorage (key, initialValue) {

  
    const [storedValue, setStoredValue] = useState(() => {
  
      try {

        if (window != 'undefined'){


        const item = localStorage.getItem(key);
        console.log(item)
        return JSON.parse(item)

        }

  
      } catch (error) {
  
        console.log(error);
  
        return initialValue;
  
      }
  
    });
}