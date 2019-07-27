import React, { Fragment, Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';
import Navbar from './navbar';

export default class NavHeader extends Component {
    state = {
        color: 'clear',
        textColor: 'text-white',
        navSize: 'navNormal'
    }

    listenScrollEvent = e => {
        if (window.scrollY > 10) {
            this.setState({
                color: 'white',
                textColor: 'text-dark',
                navSize: 'navSize '
            })
        } else {
                    this.setState({ 
                        color: 'clear', 
                        textColor: 'text-white',
                        navSize: 'navNormal'
                    })
                }
      }

        componentDidMount() {
            window.addEventListener('scroll', this.listenScrollEvent)
        }
        render(){
            return <Navbar navSize={this.state.navSize} headerColor={this.state.color} textColor={this.state.textColor}/>
        }

    }