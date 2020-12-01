import React, {useState, useEffect, CustomApi} from 'react'

//window size list
export default function UseEffectHook({ url }){ 
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [items, setItems] = useState([])

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth)
    }

    
    // TODO: Update list when url changes or on mount
    useEffect(() => {
        // setItems(CustomApi.getList(url))
        console.log(url)
    }, [url])

    // TODO: Setup resize event listener on mount

    useEffect(()=>{ 
        window.addEventListener('resize', updateWindowWidth)
        return ()=>{
            window.removeEventListener('resize', updateWindowWidth)
        }
    }, [])


    // TODO: Cleanup resize event listener on un-mount
    


    return ( 
        <>
            <div>
                Use Effect Hook 
            </div>
            <div>
                <div>Window Width: {windowWidth}</div>
                {items.map(item=>{
                    return <div key={item}>{item}</div>
                })
                    

                }

            </div>
        </> 
    )
}