import React from "react"

export default function Buttons (){
        const [things, setThings] = React.useState(['thing 1', 'thing 2', 'thing 3'])
            const stuffs = things.map((item)=>{
               return (<p key={item}>{item}</p>)
            })
    function handleClick (){
       const newThing = `thing  ${things.length + 1}`
        setThings(prevState => [...prevState, newThing])
    }

    const [count, setCount] = React.useState(3)
    function addCount (){
       setCount(function(old){
        return old + 1
       })
    }

    function minus (){
        setCount(count - 1)

    }

    return (
        <>
        <div>
            <button onClick={handleClick}>Click here</button>
            <div>{stuffs}</div>
        </div>
        <div className="counter">
            <button className="count-btn" onClick={minus}>-</button>
            <div className="counter-count">
                <h1>{count}</h1>
            </div>
            <button className="count-btn" onClick={addCount}>+</button>
        </div>
        </>
    )
}