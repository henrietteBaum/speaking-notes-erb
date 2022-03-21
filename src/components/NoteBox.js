import StyledTextarea from 'styles/NoteBoxStyle';
import React, { useState } from 'react'
import ClearTextArea from './ClearTextArea';
import FileUpload from './FileUpload';
import SaveNoteText from './SaveNoteText';
import WebSpeech from './WebSpeech';

function NoteBox() {

  const [noteText, setNoteText] = useState([]);

  const handleTextChange = event => {
    setNoteText(event.target.value);
  };


  return (
    <>
    <StyledTextarea
      value={noteText}
      onChange={handleTextChange}
      placeholder='Type text here or open existing file'
    />
     {/* <FileUpload
      noteText={noteText}
      setNoteText={setNoteText}
     /> */}
     {/* <StyledSidebar>
     <WebSpeech
      noteText={noteText}
      setNoteText={setNoteText}
      /> */}
     {/* <ClearTextArea
      noteText={noteText}
      setNoteText={setNoteText}
     /> */}
     {/* <SelectVoice
     selectecVoice={selectedVoice}
     setSelectedVoice={setSelectedVoice}
     /> */}
     {/* </StyledSidebar>
     <SaveNoteText
      noteText={noteText}
      setNoteText={setNoteText}
     /> */}
     </>
  )
}


export default NoteBox
