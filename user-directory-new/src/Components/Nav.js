import React from 'react'

const Nav = (props) => {

    return (
        <div className='buttons-section'>
            <button className='previous' onClick={props.previous}> {"<"} Previous</button>
            <button className="blue-buttons">Edit</button>
            <button className="blue-buttons">Delete</button>
            <button className="blue-buttons">New</button>
            <button className='next' onClick={props.next}>Next {">"}</button>
        </div>
    )
}

export default Nav;