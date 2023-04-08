import React from 'react'
import Landing from '../components/landing'
import { backendCode } from '../constants/codes';
import { IBackendCode } from 'interfaces/backendCode';

type Props = {}

const SourceCode = (props: Props) => {

    return (
        <Landing>
            <div className='px-3'>
                <div className='flex items-center gap-x-3 p-3 rounded-t-xl mt-3'>
                    <div className='bg-custom-green p-2 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-custom-white">
                            <path fill-rule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clip-rule="evenodd" />
                        </svg>

                    </div>
                    <h1 className='text-3xl font-bold text-custom-black'>Source Code</h1>
                </div>
            </div>
            {backendCode && backendCode.map((val: IBackendCode) => (
                <div className='px-3 my-3'>
                    <h2 className='font-semibold'>* {val.fileName}</h2>
                    <div className='flex justify-center'>
                        <img className='w-full md:w-[80%] lg:w-[70%] mt-2 rounded-xl' src={val.code} alt='' />
                    </div>
                </div>
            ))}
        </Landing>
    )
}

export default SourceCode