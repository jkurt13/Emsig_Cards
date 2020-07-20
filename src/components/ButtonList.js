import React, { Component } from 'react'
import axios from 'axios';

import ButtonCard from './ButtonCard'

export default class ButtonList extends Component {

    state= {
        url: "http://localhost:3000/users",
        button: null
    }

    renderButton= button => {
        if (this.state.button.length <= 0) {
            return <div>Loading..</div>
        }

        return <ButtonCard
            key={button.name}
            name={button.name}
            url={button.url} 
        />
    }

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        console.log(res.data)
        this.setState({button: res.data['data']});
    }

   
    render() {
        return (
            <React.Fragment>
                {this.state.button ? (
                    <div className='row'>
                        {this.state.button.map(button => {
                            return this.renderButton(button)
                        })}
                    </div>
                ) : (
                    <h1>Loading Buttons</h1>
                    )}
            </React.Fragment>
        )
    }
}
