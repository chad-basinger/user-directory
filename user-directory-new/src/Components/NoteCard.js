import React from 'react'

const NoteCard = (props) => {
    const{data, index} = props

    return (
            <div className='card'>
                <div>
                    <h1 className='card-number'>{data[index].id}/{data.length}</h1>
                </div>
                <div className='card-info'>
                    <h1 className='name'>{data[index].name.first} {data[index].name.last}</h1>
                    <div className='from'>
                        <h3 className='prop'>From: </h3> 
                        <h3 className='value'>{data[index].city},</h3>
                        <h3 className='value'>{' '}{data[index].country}</h3>
                    </div>
                    <div className='job'>
                        <h3 className='prop'>Job Title:</h3>
                        <h3 className='value'>{data[index].title}</h3>
                    </div>
                    <div className='employer'>
                        <h3 className='prop'>Employer:</h3> 
                        <h3 className='value'>{data[index].employer}</h3>
                    </div>
                    <br />
                    <div className='movies'>
                        <h3>Favorite Movies:</h3>
                        <ol>{data[index].favoriteMovies.map(e => <li>{e}</li>)}</ol>
                    </div>
                </div>
            </div>
    )
}

export default NoteCard;