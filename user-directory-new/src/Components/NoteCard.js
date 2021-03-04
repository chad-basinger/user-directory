import React from 'react'

const NoteCard = (props) => {
    const{data, index} = props

    return (
        <div>
            <div className='card'>
                <h2>{data[index].name}</h2>
            </div>
            <h1>{data[index].name}</h1>
            <h3>Favorite Movies:</h3>
            <ul>{data[index].favoriteMovies.map(e => <li>{e}</li>)}</ul>
            

        </div>
    )
}

export default NoteCard;