/** @format */

import React, { useState } from 'react'
import './Article.css'

import drawer from '../images/drawers.jpg'
import share from '../images/icon-share.svg'
import avatar from '../images/avatar-michelle.jpg'
import facebook from '../images/icon-facebook.svg'
import pinterest from '../images/icon-pinterest.svg'
import twitter from '../images/icon-twitter.svg'

class Article extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            share: false,
        }
    }
    toggleShare() {
        if (this.state.share == true) this.setState({ share: false })
        else this.setState({ share: true })
    }
    renderComponent() {
        if (this.state.share == true)
            return (
                <div className='share'>
                    <span className='share-text'>SHARE</span>
                    <img className='social' src={facebook} />
                    <img className='social' src={pinterest} />
                    <img className='social' src={twitter} />
                </div>
            )
        else {
            return {}
        }
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='imgcon'>
                        <img className='article-image' src={drawer} />
                    </div>
                    <div className='article-content'>
                        <h3>
                            Shift the overall look and feel by adding these
                            wonderful touches to furniture in your home
                        </h3>
                        <p className='description'>
                            Ever been in a room and felt like something was
                            missing? Perhaps it felt slightly bare and
                            uninviting. I’ve got some simple tips to help you
                            make any room feel complete.
                        </p>

                        <img
                            src={avatar}
                            alt='avatar-image'
                            className='avatar-image'
                            width='30'
                            height='30'
                        />

                        <img
                            className='share-icon'
                            src={share}
                            onClick={this.toggleShare}
                        />
                        <div className='avatar'>
                            <p>
                                <strong>Michelle Appleton</strong>
                            </p>
                            <p class='date'>28 Jun 2020</p>
                        </div>
                    </div>
                    <div className='share'>
                        <span className='share-text'>SHARE</span>
                        <img className='social' src={facebook} />
                        <img className='social' src={pinterest} />
                        <img className='social' src={twitter} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Article
