import React, { Component } from 'react'

export default class ButtonCard extends Component {
    state = {
        imageUrl: ''
    }

    componentDidMount () {
        const imageUrl = `https://github.com/jkurt13/Emsig_Cards/blob/master/src/pictures/${buttonIndex}.jpg?raw=true`

        this.setState({
            imageUrl
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
