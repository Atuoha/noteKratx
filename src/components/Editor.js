import React, { Component } from 'react'
import SimpleMDEEditor from 'react-simplemde-editor'

class Editor extends Component{

    render(){
        return(
            <div className="editor col-md-8">
                <SimpleMDEEditor 
                    onChange={this.props.change}
                    value={this.props.currentNote.body}
                    options={{autofocus: true}} 
                />
            </div> 
        )
    }
}


export default Editor