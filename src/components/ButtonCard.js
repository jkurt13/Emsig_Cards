import React, { Component } from 'react'


import styled from 'styled-components'

const Sprite = styled.img`
    width: 5em;
    height: 5em;
    display: none;
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22 )
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-euser-select: none;
`;

export default class ButtonCard extends Component {
    state = {
        name: '',
        buttonIndex: '',
        imageUrl: '',
        toManyRequests: false
    }

    componentDidMount () {

        const { name, url } = this.props
        const buttonIndex = url.split("/")[url.split('/').length - 2]
        const imageUrl = `https://github.com/jkurt13/Emsig_Cards/blob/master/src/pictures/${buttonIndex}.jpg?raw=true`

        this.setState({
            buttonIndex,
            imageUrl,
            name
        })
    }
    render() {
        return (
            <div className='col-md-3 col-sm-6 mb-5'>
                <Card className='card'>
                 <h5 className="card-header">{this.state.buttonIndex}</h5>

                <Sprite 
                    className="card-img-top rounded mx-auto mt-2"
                    onError={() => this.setState({toManyRequests: true})}
                    src={this.state.imageUrl}
                />
                <div className='card-body mx-auto'>
                        <h6 className="card-title">{this.state.name
                        .toLowerCase()
                        .split(" ")
                        .map(
                            letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                            .join('')}
                        </h6>
                    </div>
                </Card>
            </div>
        )
    }
}
