import React, { useState , useRef,useEffect} from 'react';




function Notes({notes,addnote,select,setSelect}){
    
    //Remove Inital message or put it back on depending on size of notes
    useEffect(()=>{
        if(notes.length>0)
        {
            document.getElementById("display_msg").style.display="none";
        }
        else
        {
            document.getElementById("display_msg").style.display="flex";
        }
    },[notes])
    
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    };
    
    const formatDate = (when) => {
        const formatted = new Date(when).toLocaleString("en-US", options);
        if (formatted === "Invalid Date") {
            return "";
        }
        return formatted;
    };








    return (
        <div id ="Notes">
            <div id="Notes_Header">
                <p>Notes</p>
                <button onClick={addnote} >+</button>
            </div>
            <div id="Notes_Boxes">
                {notes.map((note)=>(
                    <div id="box" className={note.id===select &&"selected"} onClick={()=> setSelect(note.id)}>
                        <h2>
                            {note.title.substring(0,18)}
                        </h2>
                        <h5>
                            {formatDate(note.time)}
                        </h5>
                        <p>
                            {note.content.toString().replace( /(<([^>]+)>)/ig, '').substring(0,50)+"..."}
                        </p>
                    </div>
                ))}
                <div id="display_msg">No Note Yet</div>
            </div>
        </div>
    );
}

export default Notes;