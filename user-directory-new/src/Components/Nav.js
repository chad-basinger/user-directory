import React from 'react'

const Nav = (props) => {

    return (
        <div className='buttons'>
            <button onClick={props.previous}>Previous</button>
            <button onClick={props.next}>Next</button>
        </div>
    )
}

export default Nav;