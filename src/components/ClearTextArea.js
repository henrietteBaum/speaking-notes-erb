import React from 'react'
import { StyledButton } from '../styles/ButtonStyle'
import { StyledClearText } from '../styles/ClearTextAreaStyle'
import StyledSidebar from '../styles/SidebarStyle'

function ClearTextArea({setNoteText}) {

const handleBtnClear = () => {
  setNoteText('');
}

  return (
    <StyledSidebar>
      <StyledClearText>
        <StyledButton
        onClick={handleBtnClear}
        >Clear
        </StyledButton>
      </StyledClearText>
    </StyledSidebar>
  )
}

export default ClearTextArea
