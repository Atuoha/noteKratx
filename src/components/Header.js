import React, { Component } from 'react'

 class Header extends Component {
    render() {
        return (
                <div className="jumbotron text-white text-center">
                    <h2><strong>noteKratx <i className="fa fa-check-circle"></i></strong></h2>
                    <p className="small-text code">...adding a touch of reacting magic to texts and editing</p>
                </div>
        )
    }
}

export default Header