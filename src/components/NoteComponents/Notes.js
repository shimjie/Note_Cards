import CreateNote from "./CreateNote";
import Note from "./Note";
import '../css/Note.css';
import { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';

function Notes() {
    //states
    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState("");
    const [loading, setLoading] = useState(true);

    //get text from textarea (event.target.value) and store in state 
    const textHandler = (e) => {
        setInputText(e.target.value)
    }
    // add new note to the notes state array after click Save
    const saveHandler = () => {
        setNotes((prevState) => [...prevState,
            {
                id: uuid(),
                text:inputText
            }
        ])
        //after save the textarea should be clear
        setInputText('');
    }
    //delete note function
    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    }
    //access localstorage when refreshing //effect whenever reloading by using dependency []
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('Notes'));
        if (Array.isArray(data) && data.length > 0) {
            setNotes(data);
        }
        setLoading(false);
    },[]);
    // saving data to localstorage
    useEffect(() => {
        if (!loading) {
            localStorage.setItem('Notes', JSON.stringify(notes));
        }
        
    },[notes,loading]);

    return (
        <div className='notes'>
            {notes.map((note) => (<Note key={note.id} note={note} deleteNote={ deleteNote} />))}
            <CreateNote textHandler={textHandler} saveHandler={saveHandler} inputText={ inputText} />
        </div>

    )
}

export default Notes;