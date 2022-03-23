import React, { useRef } from 'react'
import { StyledLabel } from '../styles/LabelInputStyle';

function FileUpload({setNoteText}) {
  const fileInputRef = useRef([]);

  let handleInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (e) => {
      setNoteText(file);
      console.log(reader.result);
      setNoteText(reader.result);
    }
    reader.onerror = () => {
      console.log('file error', reader.error)
    }
  }

  return (
    <StyledLabel> Open
      <input
      onChange={handleInputChange}
      type="file" id="file" accept="text"
      style={{ display: 'none'}}
      ref={fileInputRef}
     />
    </StyledLabel>
  )
}

export default FileUpload
