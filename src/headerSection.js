import React from 'react';

function Header(){
    var closed = true;
    function close_notes(){
        if (closed)
        {
            document.getElementById("Notes").style.display='none';
            document.getElementById("Text").style.width="100%";
            document.getElementById("Text").style.maxWidth="100%";
            closed=false;
        }
        else
        {   
            document.getElementById("Notes").style.display='flex';
            document.getElementById("Text").style.width="80%";
            document.getElementById("Text").style.maxWidth="80%";
            closed=true;
        }

    }






    return(
        <div id="Header">
            <button onClick={close_notes} >&#9776;</button>
            <div id="Title">
                <p>Lotion</p>
                <text>Like Notion, but worse.</text>
            </div>
            <div></div>
        </div>
    );
}

export default Header;