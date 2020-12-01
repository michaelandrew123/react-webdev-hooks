import React, {useState, useRef, useEffect} from 'react'


export default function UseRefHook(){
    const [name, setName] = useState('')
    const [renderCount, setRenderCount] = useState(0)
    const refRenderCount = useRef(0)
    const inputRef = useRef();
    const prevName = useRef('');
 
    useEffect(()=>{
        refRenderCount.current = refRenderCount.current + 1
    })
    function focus(){
        inputRef.current.focus()
    }

    useEffect(()=>{
        prevName.current = name
    }, [name])
    return (
        <>
            <div>Use Ref</div>
            <div>
                <button onChange={focus}>


                </button>

            </div>
        </>
    )
}