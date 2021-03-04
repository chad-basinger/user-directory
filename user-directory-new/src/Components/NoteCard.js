import React from 'react'

const NoteCard = (props) => {
    const{data, index} = props

    return (
        <div>
            <div className='card'>
                <div className='card-number'>
                    <h1>{data[index].id}/{data.length}</h1>
                </div>
                <h1>{data[index].name.first} {data[index].name.last}</h1>
                <h3>From: {data[index].city}, {data[index].country}</h3>
                <h3>Job Title: {data[index].title}</h3>
                <h3>Employer: {data[index].employer}</h3>
                <h3>Favorite Movies:</h3>
                <ol>{data[index].favoriteMovies.map(e => <li>{e}</li>)}</ol>
            </div>

        </div>
    )
}

export default NoteCard;