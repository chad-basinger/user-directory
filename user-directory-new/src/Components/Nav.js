import React from 'react'

const Nav = (props) => {

    return (
        <div className='buttons-section'>
            <button onClick={props.previous}>Previous</button>
            <button className="blueButtons">Edit</button>
            <button className="blueButtons">Delete</button>
            <button className="blueButtons">New</button>
            <button onClick={props.next}>Next</button>
        </div>
    )
}

export default Nav;