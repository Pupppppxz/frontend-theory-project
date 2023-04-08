import { IMember } from 'interfaces/constants'
import React from 'react'

const MemberCard1 = ({ name, studentId, profile }: IMember) => {
    return (
        <div className='mt-16 flex justify-center items-center h-[380px] w-full max-w-[350px] object-cover relative shadow-xl bg-custom-black'>
            <img src={profile} className='h-80 w-80 rounded-full border-[1px] border-custom-black object-cover absolute -top-16 aspect-square' alt='' />
            <div
                className={`absolute top-80 flex flex-col items-center justify-center gap-y-3 w-full max-h-0 h-fit z-10 rounded-bl-2xl rounded-br-2xl p-0 bg-white`}
            >
                <div className='flex gap-x-3 items-center'>
                    {/* <Image className='w-8' src={Code} alt='' /> */}
                    <h1 className='text-lg font-bold text-gray-300'>{studentId}</h1>
                </div>
                <div className='flex gap-x-3 items-center font-bold'>
                    {/* <Image className='w-8' src={Person} alt='' /> */}
                    <h1 className='text-2xl text-custom-white'>{name}</h1>
                </div>
            </div>
        </div>
    )
}

export default MemberCard1