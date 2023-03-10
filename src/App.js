import React,{useState,useEffect} from 'react';
import Notes from './notesSection';
import Text from './textSection';
import uuid from "react-uuid";
import { Route,Routes } from 'react-router-dom';
function App() {

  function loadNotesFromLocalStorage() {
    const notes = localStorage.getItem("notes");
    return notes ? JSON.parse(notes) : [];
  }
  const [notes,setNotes]=useState(loadNotesFromLocalStorage);
  const [select,setSelect]=useState(0);
  const [mode,setMode]=useState("");
  const [decreased,setDecreased]=useState(false);


  const addnote=()=>{

    const newnote = {
      id:uuid(),
      title:"Untitled",
      time:"",
      content:""

    }
    setNotes([newnote,...notes]);
    setSelect(newnote.id);
    setMode("Edit")//Try to change it later
    setDecreased(false);

  }
  const get_selected=()=>
  {
    return notes.find((note)=>note.id===select);
  }

  const update_note = (updated_note)=>
  {
    const updated = notes.map((note)=>{

      if(note.id===(get_selected().id))
      {
        return updated_note;
      }
      return note;
    })
    setNotes(updated);
  }

  const delete_note=(id_delete)=>
  {
    
    setSelect(0);
    setNotes(notes.filter((note)=>note.id!==id_delete));
  
  }
  console.log(select);

  useEffect(()=>{
    if(notes.length===0 || select===0)
    {
      setMode("");
      if(document.getElementById("nonotes")){document.getElementById("nonotes").style.display="flex";}
      if(document.getElementById("write_mode")){document.getElementById("write_mode").style.display="none";}
      if(document.getElementById("Text_Header")){document.getElementById("Text_Header").style.display="none";}
      if(document.getElementById("note_title")){document.getElementById("note_title").style.display="none";}
      if(document.getElementById("note_title1")){document.getElementById("note_title1").style.display="none";}
      if(document.getElementById("prevnotes")){document.getElementById("prevnotes").style.display="none";}
    }
  },[notes])

  useEffect(()=>{
    if(select!==0){setMode("Edit");}
    
  },[select])

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);



  return (
    <div id="App">
      <Notes 
        notes={notes} 
        addnote={addnote}
        select={select}
        setSelect={setSelect}
      />
      <Text
        selected_note={get_selected()}
        mode={mode}
        setMode={setMode}
        update_note={update_note}
        delete_note={delete_note}
      
      />
    </div>
  );
  
}




export default App;

