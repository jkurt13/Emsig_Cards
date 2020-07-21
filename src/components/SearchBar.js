import React, { Component } from "react";

import styled from 'styled-components'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <nav className="nav navbar-expand-md navbar-dark bg-dark fixed-top" style={{marginTop: 3.5 + 'em'}}>
                        <lable for='cardNum' style={{color: 'white', marginLeft: 40 + 'em'}}>Card Number</lable>
                        <input className='cardNum mr-5' style={{width: 200 + 'px'}}></input>
                        <lable for='Pattern' style={{color: 'white'}}>Description</lable>
                        <input className='pattern' icon="search"></input>
                    </nav>
                </div>
            </div>
        )
    }
}