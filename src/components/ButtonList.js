import React, { Component } from 'react'
import axios from 'axios';

import ButtonCard from './ButtonCard'

export default class ButtonList extends Component {

    state= {
        url: "http://localhost:3000/users",
        button: null
    }

    async componentDidMount() {
        // fetch('http://localhost:3000/users')
        // .then(response => response.json())
        // .then(res => {
        //     if (res.data && res) {
        //         this.setState({button: res.data['results']});
        //     }
        // })
        const res = await axios.get(this.state.url);
        console.log(res.data)
        this.setState({button: res.data['results']});
    }

    render() {
        return (
            <React.Fragment>
                {this.state.button ? (
                    <div className='row'>
                        {this.state.button.map(button => (
                            <ButtonCard
                                key={button.name}
                                name={button.name}
                                url={button.url} 
                            />
                        ))}
                    </div>
                ) : (
                    <h1>Loading Buttons</h1>
                    )}
            </React.Fragment>
        )
    }
}
