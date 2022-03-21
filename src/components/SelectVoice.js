import React from 'react'
import { useState, useEffect } from 'react'
import StyledSelect from '../styles/ButtonStyle';
import { StyledOption as option } from '../styles/SelectStyle';

function SelectVoice() {
  const [selectedVoice, setSelectedVoice] = useState('');

  const voiceList = window.speechSynthesis.getVoices();
  // const items=['Select a Voice', 'Banana', 'Apple', 'Orange']
  console.log(voiceList);

  useEffect(() => {
    if (!selectedVoice) {
      setSelectedVoice(voiceList.filter(v => v.default)[0] || voiceList[0]);
    }
  }, [])


  const handleSelectChange = e => {
    setSelectedVoice(voiceList.filter(opt => opt.name === e.target.value)[0])
  }

  return (
    <StyledSelect>Voice
    <form>
      <select
      style={{ opacity: 0.5}}
      value={selectedVoice}
      onChange={handleSelectChange}
      >
        {voiceList.map(opt => (
          <option key={opt.name} value={opt.name}>
            {opt.lang} - {opt.name}
          </option>
        ))}
      </select>
    </form>
    </StyledSelect>
  )}

export default SelectVoice
