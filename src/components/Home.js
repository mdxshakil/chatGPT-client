import React from 'react'
import { aiChatOptions } from '../utils/aiChatOptions'
import AiOptionCard from './AiOptionCard'

const Home = ({ setTogglePage, setSelectedAi }) => {
    return (
        <div className='text-center'>
            <h1 className='text-4xl text-slate-200 p-3 font-bold inline-block italic'>Your virtual AI companion</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-12 gap-4'>
                {
                    aiChatOptions.map(option =>
                        <AiOptionCard
                            key={option.id}
                            option={option}
                            setTogglePage={setTogglePage}
                            setSelectedAi={setSelectedAi}>
                        </AiOptionCard>)
                }
            </div>
        </div>
    )
}

export default Home