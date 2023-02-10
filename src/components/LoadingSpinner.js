import React from 'react'

const LoadingSpinner = () => {
    return (
        <div className='min-h-screen w-full flex items-center justify-center'>
            <div className="w-24 h-24 rounded-full animate-spin
                        border-x-4 border-solid border-green-500 border-t-transparent"></div>
        </div>
    )
}

export default LoadingSpinner