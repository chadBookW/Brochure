import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tone, setTone] = useState('Casual');
  const [length, setLength] = useState('Short');
  const [features, setFeatures] = useState('');
  const [positioning, setPositioning] = useState('');
  const [output, setOutput] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const [editOption, setEditOption] = useState('Make it longer');

  const generateCopy = async () => {
    const response = await axios.post('http://localhost:5001/generate', {
      tone,
      length,
      features,
      positioning,
    });
    setOutput(response.data.generatedCopy);
  };

  const insertInDB = async () => {
    await axios.post('http://localhost:5001/insert', {
      tone,
      length,
      features,
      positioning,
      output,
    });
    alert('Inserted into DB');
  };

  const regenerateCopy = async () => {
    const response = await axios.post('http://localhost:5001/regenerate', {
      highlightedText,
      completeText: output,
      editOption,
    });
    setOutput(response.data.modifiedCopy);
  };

  return (
    <div className="App">
      <h1>Real Estate Brochure Copy Generator</h1>
      <div>
        <label>
          Tone:
          <select value={tone} onChange={(e) => setTone(e.target.value)}>
            <option value="Casual">Casual</option>
            <option value="Formal">Formal</option>
            <option value="Grandiose">Grandiose</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Length of the Copy:
          <select value={length} onChange={(e) => setLength(e.target.value)}>
            <option value="Short">Short</option>
            <option value="Medium">Medium</option>
            <option value="Long">Long</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Features of the Building:
          <textarea value={features} onChange={(e) => setFeatures(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Brand Positioning:
          <textarea value={positioning} onChange={(e) => setPositioning(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={generateCopy}>Generate</button>
        <button onClick={insertInDB}>Insert in DB</button>
      </div>
      <div>
        <textarea
          value={output}
          onChange={(e) => setOutput(e.target.value)}
          onSelect={(e) => setHighlightedText(window.getSelection().toString())}
        />
      </div>
      <div>
        <label>
          Edit Option:
          <select value={editOption} onChange={(e) => setEditOption(e.target.value)}>
            <option value="Make it longer">Make it longer</option>
            <option value="Make it shorter">Make it shorter</option>
          </select>
        </label>
        <button onClick={regenerateCopy}>Regenerate</button>
      </div>
    </div>
  );
}

export default App;
