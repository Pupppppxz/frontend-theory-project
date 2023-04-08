import React from 'react'

type Props = {
    functionName?: string;
    title?: string;
}

const RegexTopic = ({ functionName, title }: Props) => {
    return (
        <>
            <div className='flex items-center gap-x-3 mb-3 text-custom-white'>
                <p>ฟังก์ชัน</p>
                <button type='button' disabled className='px-3 py-1 rounded-lg bg-custom-darker-black cursor-pointer'>{functionName}</button>
                <p className='hidden md:flex'>{title}</p>
            </div>
            <p className='md:hidden text-custom-white'>{title}</p>
        </>
    )
}

export default RegexTopic