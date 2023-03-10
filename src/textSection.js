import React,{ useState,useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'


function Text({selected_note,mode,setMode,update_note,delete_note}){
    const [content,setContent]=useState(selected_note&&selected_note.content);
    
    const write =(key,value)=>
    {
        update_note
        (
            {
                ...selected_note,
                [key]:value,
            }
        );



    }
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






    if(mode==="Save")
    {
        document.getElementById("nonotes").style.display="none";
        document.getElementById("write_mode").style.display="flex";
        document.getElementById("Text_Header").style.display="flex";
        document.getElementById("note_title").style.display="block";
        document.getElementById("note_title1").style.display="none";
        document.getElementById("prevnotes").style.display="none";
        document.getElementById("note_date").style.display="inline-flex";
        document.getElementById("prevdate").style.display="none";
    }
    else if (mode==="Edit")
    {
        if(document.getElementById("nonotes")){document.getElementById("nonotes").style.display="none";}
        if(document.getElementById("write_mode")){document.getElementById("write_mode").style.display="none";};
        if(document.getElementById("Text_Header")){document.getElementById("Text_Header").style.display="flex";};
        if(document.getElementById("note_title")){document.getElementById("note_title").style.display="none";};
        if(document.getElementById("note_title1")){document.getElementById("note_title1").style.display="flex";};
        if(document.getElementById("prevnotes")){document.getElementById("prevnotes").style.display="flex";}
        if(document.getElementById("note_date")){document.getElementById("note_date").style.display="none";}
        if(document.getElementById("prevdate")){document.getElementById("prevdate").style.display="block";}
    }
   
    const change_modes=()=>
    {
        if(mode==="Save")
        {
            setContent(selected_note&&selected_note.content);
            if(content){write("content",content);}
            setMode("Edit");
        }
        else
        {
            setContent(selected_note&&selected_note.content);
            setMode("Save");
        }
    }
    
    return(
        <div id="Text">
            <div id="Text_Header">




                <div id="TDT">
                     <input id="note_title" type='text'  value={selected_note&&selected_note.title} onChange={ ((e)=>(write("title",e.target.value)))}/>
                     <div id="note_title1">{selected_note && selected_note.title}</div>
                        

                    <input id ="note_date"type="datetime-local" onChange={(e)=>(write("time",e.target.value))}/>
                    <div id="prevdate" dangerouslySetInnerHTML={{__html:formatDate(selected_note&&selected_note.time)}}></div>
                </div>


                <div id="Text_buttons">
                    <button id="change_btn" onClick={change_modes} >{mode}</button>
                    <button id="delete_btn" onClick={()=>delete_note(selected_note&&selected_note.id)}>Delete</button>
                </div>


            </div>
            <div id ="Text_Area">
                <div id ="nonotes">{ !selected_note&& "Select a note, or create a new one."}</div>
                <ReactQuill  id ="write_mode" placeholder={'Your Note Here'} theme="snow" value={content} onChange={setContent} />
                <div id="prevnotes" dangerouslySetInnerHTML={{__html:selected_note&& selected_note.content}}></div>
            </div>

        </div>
    );
}
export default Text;
