import React from 'react'

const AiOptionCard = ({ option, setTogglePage, setSelectedAi }) => {
    const { title, description, model, endpoint, icon } = option;

    const handleAiSelection = () => {
        setTogglePage(false);
        setSelectedAi({ model, endpoint, title })
    }
    return (
        <div onClick={() => handleAiSelection()} className='text-center p-2 rounded-lg bg-slate-300 shadow-lg hover:bg-slate-100 hover:text-red-400 transition-all cursor-pointer'>
            <div className='flex items-center content-center gap-4'>
                {icon}
                <div>
                    <h3 className='font-semibold'>{title}</h3>
                    <small className='text-slate-500'>{description}</small>
                </div>
            </div>
        </div>
    )
}

export default AiOptionCard;