import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import InputOutput from './components/InputOutput';

function App() {
  const [togglePage, setTogglePage] = useState(true);
  const [selectedAi, setSelectedAi] = useState({});
  return (
    <div className='max-w-screen-2xl align-items-center mx-auto p-5 bg-cyan-900 min-h-screen'>
      {/* your personal ai chatbot */}
      <div>
        {togglePage ?
          <Home setTogglePage={setTogglePage} setSelectedAi={setSelectedAi}></Home> :
          <InputOutput setTogglePage={setTogglePage} selectedAi={selectedAi}></InputOutput>}
      </div>
    </div>
  );
}

export default App;
