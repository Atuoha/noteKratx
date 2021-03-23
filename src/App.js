import React, { Component } from 'react'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'
import "milligram";
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  constructor(props){
    super(props)

    // pulling notes from localStorage
    const notes_data = JSON.parse(localStorage.getItem('notes'))

    this.state = {
      notes: notes_data ? notes_data : [],
      selectedNote: ''
    }
      this.addNote = this.addNote.bind(this)
      this.id_generate = this.id_generate.bind(this)
      this.updateNote = this.updateNote.bind(this)
      this.selectNote = this.selectNote.bind(this)
      this.deleteNote = this.deleteNote.bind(this)

  }


  addNote(){
    // obtaining id
    let note_id = this.id_generate()
    // creating note object
    let note = {id: note_id, body: 'New Note...'}
    let noteArray =  this.state.notes;
    // pushing note to array
    noteArray.push(note);
    // setting note 
    this.setState({notes: noteArray});

    //setting selectedNote state
    this.selectNote(note)
    // saving note to localStorage
    this.saveNote(this.state.notes)
  }


  updateNote(body){
    if(this.state.selectedNote){
      // obtaining note array from state
      let notes = this.state.notes
      // assinging current note from state to variable
      let currentNote =  this.state.selectedNote
      // adjusting the body to the body of the input
      currentNote.body = body
      // setting the state of the selectedNote
      this.setState({selectedNote: currentNote})

      // obtaining the id of the selectedNote stored in the notes array in state 
      let nIndex = notes.findIndex((n=>{
        return n.id === currentNote.id
      }))

      // assigning the body of the currentNote to the body of the respective note
      notes[nIndex].body = currentNote.body
      // setting the note array session
      this.setState({notes: notes})
      // saving notes to session
      this.saveNote(this.state.notes)
    }
    
  }


 deleteNote(id){
    // obtaining note array from state
    const all_notes = JSON.parse(localStorage.getItem('notes'));
    const notes = all_notes.filter(note => note.id !== id);

    // setting localStorage
    localStorage.setItem('notes', JSON.stringify(notes))
    
    this.setState({
      notes: all_notes ? all_notes : [],
    })
    
  }


  // setting selectedNote
  selectNote(note){
    this.setState({
      selectedNote: note
    })
  }

  // saving note to localStorage
  saveNote(notes){
    if(notes){
      localStorage.setItem('notes', JSON.stringify(notes))
    }
  }

  // using random number to form a id
  id_generate(){
    return `${this.gen_id()}-${this.gen_id()}-${this.gen_id()}-${this.gen_id()}- `
  }

  // random numbers
  gen_id(){
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  }


  render() {
    return (
      <div className="container">
          <Header />
            <div className="row">
              <Sidebar deleteNote={this.deleteNote}  addNote={this.addNote} selectNote={this.selectNote} selectedNote={this.state.selectedNote} notes={this.state.notes} />
              <Editor change={this.updateNote} currentNote={this.state.selectedNote} />
            </div>
          <Footer />
      </div>
    )
  }
}

export default App