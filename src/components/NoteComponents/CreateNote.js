import { LinearProgress } from "@mui/material";
function CreateNote({ textHandler, saveHandler, inputText }) {
    //character limit
    const charLimit = 100;
    const charLeft = charLimit - inputText.length;
    return (
        <div className='note'>
            <textarea cols='10' rows='5' placeholder='Type...' maxLength='100' value={ inputText} onChange={textHandler}></textarea>
            <div className='note__footer'>
                <span className="label">{charLeft} left</span>
                <button className='note__save' onClick={saveHandler}>Save</button>
            </div>
            <LinearProgress className='char__progress' variant='determinate' value={ charLeft} />
        </div>
    )
}

export default CreateNote;