import React, { Component } from "react";

import styled from 'styled-components'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <lable for='cardNum'>Card Number</lable><input className='cardNum'></input>
                    <lable for='Pattern'>Pattern</lable><input className='Pattern'></input>
                </nav>
            </div>
        )
    }
}