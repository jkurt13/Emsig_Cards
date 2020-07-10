import React, { Component } from "react";

import styled from 'styled-components'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                <div className="col">               
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top position-fixed">
                    <a className='navbar-brand col-sm-3 col-md-2 mr-0 align-items-center'>Emsig</a>
                </nav>
                </div> 
                </div>
                <div className='row'>
                    <nav className="nav navbar-expand-md navbar-dark bg-dark fixed-top" style={{marginTop: 3.5 + 'em'}}>
                        <lable for='cardNum' style={{color: 'white'}}>Card Number</lable>
                        <input className='cardNum' style={{width: 200 + 'px'}}></input>
                        <lable for='Pattern' style={{color: 'white'}}>Pattern</lable>
                        <input className='Pattern'></input>
                    </nav>
                </div>
            </div>
        )
    }
}