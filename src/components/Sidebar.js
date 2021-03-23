import React, { Component } from 'react'

class Sidebar extends Component{
    
    render(){
        return(
            <div className="editor col-md-4">
                    <button onClick={this.props.addNote} className="button button-clear">+ new note</button>
                    <p className="lead footer">Saved noteKratx <i className="fa fa-save"></i> </p>
                       
                    <div id="notes_list">
                        <ul className="list-group">
                            {this.props.notes.map(note=>
                                <div key={note.id}>
                                    <div className="row">
                                        <div className="col-md-8 col-sm-8">
                                            <li 
                                                key={note.id} 
                                                onClick={()=> this.props.selectNote(note) }
                                                className={note === this.props.selectedNote ? 'selected list-item small-text font-small' : 'list-item small-text font-small'}> 
                                                {note.body}          
                                            </li>
                                        </div>

                                        <div className="col-md-3 col-col-sm-3">
                                            <span onClick={ () => this.props.deleteNote(note.id) } id="del_text">Delete <i className="fa fa-remove"></i></span>
                                        </div>
                                    </div>
                                   
                                </div>
                            )}                      
                        </ul>
                    </div>                       
            </div>
        )
    }
}


export default Sidebar