import React, { useState } from 'react'
import LoadingSpinner from './LoadingSpinner';
import { FaBackward } from "react-icons/fa";

const InputOutput = ({ setTogglePage, selectedAi }) => {
  const [userInput, setUserInput] = useState('');
  const { model, endpoint, title } = selectedAi;
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const handleUserPromptSubmit = async () => {
    const userPrompt = {
      ...model,
      userInput
    };
    setLoading(true);
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "content-type": 'application/json'
      },
      body: JSON.stringify(userPrompt)
    });
    const result = await res.json();
    if (result.status) {
      setResult(result.message)
      setLoading(false);
    }
  }
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <div>
      <h1 className='text-center font-bold italic text-2xl text-white'>{title}</h1>
      <button onClick={() => setTogglePage(true)} className="rounded-full text-white font-bold hover:text-cyan-400 transition-all p-2 text-2xl"> <FaBackward></FaBackward> </button>
      <div className='grid place-items-center p-5'>
        <textarea placeholder={`${model.placeholder}`} cols="50" rows="5" className='p-3 outline-none rounded-md shadow-md focus:border-2 border-gray-800 focus:outline-3 focus:outline-cyan-500 leading-tight sm:w-full w-full md:w-auto' onBlur={(e) => setUserInput(e.target.value)}></textarea>
        <button onClick={() => handleUserPromptSubmit()} className='mt-3 bg-cyan-600 px-12 rounded-full text-white font-bold py-1 hover:bg-cyan-400 transition-all'>Send</button>
      </div>
      <div className='text-center'>
        {result !== '' && <p className='text-white font-semibold'>{result}</p>}
      </div>
    </div>
  )
}

export default InputOutput