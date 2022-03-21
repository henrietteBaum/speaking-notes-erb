import React, { useEffect, useRef, useState } from "react";
import { StyledButton } from "../styles/ButtonStyle";
import { StyledSelect } from "../styles/SelectStyle";
import StyledSidebar from "../styles/SidebarStyle";


const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState([]);
  const synth = useRef();

  const updateVoices = () => {
    setVoices(synth.current.getVoices());
  };

  const speak = (text, voice, pitch = 1, rate = 1) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.pitch = pitch;
    utterance.rate = rate;
    synth.current.speak(utterance);
  }

  useEffect(() => {
    if (typeof window !== 'object' || !window.speechSynthesis) return;
    synth.current = window.speechSynthesis;
    synth.current.onvoiceschanged = updateVoices;
    updateVoices();

    return () => {
      synth.current.onvoiceschanged = null
    }
  }, []);

  return ([
    voices,
    speak,
  ]);
}

const WebSpeech = ({noteText, setNoteText}) => {
  const [ voices, speak ] = useSpeechSynthesis();
  const [ currentVoice, setCurrentVoice ] = useState();

  useEffect(() => {
    if (!currentVoice) {
      setCurrentVoice(voices.filter(v => v.default)[0] || voices[0]);
    }
  }, [voices])

  const handleVoiceChange = e => {
    setCurrentVoice(voices.filter(v => v.name === e.target.value)[0]);
  }

  const handleSpeak = e => {
    e.preventDefault();
    speak(noteText, currentVoice);
  }

  return (
    <>
      <StyledSidebar>
        <StyledButton
        onClick={handleSpeak}>
          Speak
        </StyledButton>
      </StyledSidebar>
        <StyledSelect
        value={currentVoice ? currentVoice.name : 'Voice'}
        onChange={handleVoiceChange}>
          <option>Voice</option>
          {voices.map(opt => (
          <option key={opt.name} value={opt.name}>{`${opt.name}`}</option>
          ))}
        </StyledSelect>
      </>
  );
};

export default WebSpeech

