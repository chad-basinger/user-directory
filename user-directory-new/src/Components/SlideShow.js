import React, { Component } from 'react'
import data from '../data';
import Nav from './Nav';
import NoteCard from './NoteCard';


class SlideShow extends Component{
    constructor(){
        super();

        this.state={
            data: data,
            index: 0
        }

        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }

    next(){
        if(this.state.index < this.state.data.length - 1){
            this.setState({index: this.state.index + 1})
        }
    }

    previous(){
        if(this.state.index > 0){
            this.setState({index: this.state.index - 1})
        }
    }

    render(){
        return (
            <div className='container'>
                <NoteCard data={this.state.data} index={this.state.index}/>
                <Nav next={this.next} previous={this.previous}/>
            </div>
        )
    }
}

export default SlideShow;