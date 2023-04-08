import { IMember } from 'interfaces/constants'
import React from 'react'

const MemberCard = ({ name, studentId, profile }: IMember) => {
    return (
        <div className={`flex justify-center items-center h-[500px] w-full object-cover relative rounded-2xl shadow-xl bg-custom-white group`}>
            <img src={profile} className='h-full w-full rounded-2xl object-cover' alt='' />
            <div
                className={`flex flex-col justify-center gap-y-3 absolute w-full max-h-0 h-0 duration-500 transition-all bottom-0 z-10 rounded-bl-2xl rounded-br-2xl p-0 bg-white group-hover:p-5 group-hover:max-h-fit group-hover:h-fit`}
            >
                <div className='hidden group-hover:flex group-hover:flex-col'>
                    <div className='flex gap-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                        </svg>
                        <h1>{name}</h1>
                    </div>
                    <div className='flex gap-x-3 items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fill-rule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clip-rule="evenodd" />
                        </svg>
                        <h1>{studentId}</h1>
                    </div>
                </div>
                {/* <hr className='hidden group-hover:flex' /> */}
            </div>
        </div>
    )
}

export default MemberCard