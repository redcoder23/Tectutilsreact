import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, settext] = useState('');
    const handleupclick = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    const handleloclick = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
    }
    const handleonchange = (event) => {
        settext(event.target.value);

    }
    const cnt = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const handleclear = () => {
        settext('');
    }
    const handlealternating = (event) => {
        let newtext = "";
        for (var i = 0; i < text.length; i++) {
            if (!(i & 1))
                newtext += text[i].toUpperCase();
            else newtext += text[i].toLowerCase();
        }
        settext(newtext);
    }

    const handleclipboard = async () => {
        try {
            console.log('trying to copy'); 
            await navigator.clipboard.writeText(text); 
            console.log('copy successful'); 
            alert('copied!');
        }
        catch (err) {
            console.error('copy failed', err);
        }
    };

    // text="new text" ; wrong way to change the state; 
    // settext("new text");  
    /* cant keep settext here as it causes infinite loop here because  settext shouldnt be inside the react   
    component    because due to this it causes an infinite re-render loop */
    /*  
     Before return() — that part of your component is called every time React tries to draw (render) the screen.

     If you call settext(...) there, you are changing the state every time React is trying to draw.

     When you change the state, React again tries to draw — but then again it sees settext(...), so again it  
    changes the state.

     This never ends → infinite re-render loop → browser crashes or app freezes.
     */
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleupclick}>
                    Convert to uppercase
                </button>
                <button className="btn btn-success mx-1" onClick={handleloclick}>
                    Convert to lowercase
                </button>
                <button className="btn btn-success mx-1" onClick={handleclear}>
                    clear text
                </button>
                <button className='btn btn-primary mx-1' onClick={handlealternating}>
                    aLtErNaTe CaSe
                </button>
                <button className="btn btn-info mx-1" onClick={handleclipboard}>
                    copy to clipboard
                </button>
            </div>
            <div className="container my-2">
                <h2>Your text words</h2>
                <p>
                    {cnt} words and {text.length} characters  </p>
                <p>{0.008 * text.trim().split(/\s+/).length} Minutes read</p>
                <h2>{text}</h2>
            </div>
        </>
    )
}
