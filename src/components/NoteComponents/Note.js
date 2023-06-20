import { DeleteForeverOutlined } from "@mui/icons-material";
function Note({note, deleteNote}) {
    return (
        <div className='note'>
            <div className='note__body'>{ note.text}</div>
            <div className='note__footer'>
                <DeleteForeverOutlined className="note__delete" aria-hidden="true" onClick={ ()=>deleteNote(note.id)} />
            </div>
        </div>
    )
}

export default Note;