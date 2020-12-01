import React, {useState, useMemo, useEffect} from 'react'


//memo and callback function
export default function UseMemoization() {


    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => { 
      return slowFunction(number) 
    }, [number])
    
    const themeStyles = useMemo(() => {
      return {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
      }
    }, [dark])
  
    useEffect(() => {
      console.log('Theme changed')
    }, [themeStyles])
  
    return (
      <>
        <div>
          <div>Use Memoization</div> 
          <input type='number' value={number} onChange={e=>setNumber(parseInt(e.target.value))} />
          <button onClick={()=>setDark(prevDark =>!prevDark)}>Change Theme</button>
          <div className="gap-p" style={themeStyles}>{doubleNumber}</div>
        </div>
      </>
    );
  }
  
  function slowFunction(num){ 
    for(let i = 0; i <= 1000000000; i++){}
    return num * 2
  }
  
  /*
  React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling 
  them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the 
  memoized value when one of the inputs has changed.   
  */