
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from 'react-use-clipboard'
import { useState } from 'react';
import { useSpeechSynthesis } from 'react-speech-kit';

function App() {
  const startListening = () =>SpeechRecognition.startListening({continuous: true,language:'en-IN'});
  const {transcript, resetTranscript, browserSupportsSpeechRecognition} = useSpeechRecognition();
  const [copiedText, setCopiedText] = useState();

  const [isCopied, setCopied] = useClipboard(copiedText)
  
  const [text,setText] = useState();
  const {speak} = useSpeechSynthesis()
  
  if(!browserSupportsSpeechRecognition){
    return null;
  }
  const startSpeaking = ()=>{
    speak({text:text})
  }
  return (
    <div className="container">
      <h2>Speech to Text Converter</h2>
      <div className="content-box" onClick={() => setCopiedText(transcript)}>
          {transcript}
      </div>

      <div className="btn-style">
        <button className="btn btn-warning" onClick={setCopied}>{isCopied ? 'Copied':'Copy to Clipboard'}</button>
        <button className="btn btn-success" onClick={startListening}>Listen</button>
        <button className="btn btn-danger" onClick={SpeechRecognition.stopListening}>Stop</button>
        <button className="btn btn-dark" onClick={resetTranscript}>Clear</button>
      </div>

      <h2>Text to Speech Converter</h2>
      <textarea className='content-box' onChange={(e)=>{setText(e.target.value)}}></textarea>
      <div className="btn-style">
        <button className="btn btn-info" onClick={startSpeaking}>Speak</button>
      </div>
    </div>
  );
}

export default App;
