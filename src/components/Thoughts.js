import React from 'react'

const Thoughts = ({messages}) => {
    console.log("THOUGHTS ", messages)

    const elements = []

    messages.forEach(e => {
        elements.push(<li>{e.message}</li>)
        // console.log(elements)
    })
    return (
        <div>
            <h1>THOUGHTS</h1>
            {
               elements
            }
        </div>    
    )
}

export default Thoughts