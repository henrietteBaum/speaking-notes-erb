import React, { useState } from 'react'
import { StyledFileName, StyledInputSave } from '../styles/SaveTextStyle';
import StyledButton from '../styles/ButtonStyle';

const SaveNoteText = ({noteText}) => {

  const [filenameSave, setFilenameSave] = useState([]);

  // let handleBtnSave = (e) => {
  //   console.log(noteText);
  // }

  let handleBtnSave = () => {
    const element = document.createElement('a');
    const file = new Blob([noteText], {
      type:'text/plain; charset=utf-8'
    })
    element.href = URL.createObjectURL(file);
    element.download = filenameSave ? `${filenameSave}` : 'untitled.txt';
    document.body.appendChild(element);
    element.click();
  }

  const handleFilenameInput = (e) => {
    setFilenameSave(e.target.value)
    // console.log(filenameSave)
  }

  return (
    <StyledInputSave>
      <StyledButton
        className='btn-save'
        onClick={handleBtnSave}
        >Save</StyledButton>
      <StyledFileName placeholder="file name to save ..."
        value={filenameSave}
        onChange={handleFilenameInput}
        type="text"
        id="file-name" />
    </StyledInputSave>
  )
}

export default SaveNoteText
