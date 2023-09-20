
import './App.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import useClipboard from 'react-use-clipboard'
import { useState } from 'react';
function App() {
  const startListening = () =>SpeechRecognition.startListening({continuous: true,language:'en-IN'});
  const {transcript, browserSupportsSpeechRecognition} = useSpeechRecognition();
  const [copiedText, setCopiedText] = useState();

  const [isCopied, setCopied] = useClipboard(copiedText)
  if(!browserSupportsSpeechRecognition){
    return null;
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
      </div>
    </div>
  );
}

export default App;
