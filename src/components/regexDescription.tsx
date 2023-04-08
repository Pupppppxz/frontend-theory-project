import React from 'react'

type Props = {
    regex: string;
    meaning?: string;
    result?: string;
}

const RegexDescription = ({ regex, meaning, result }: Props) => {
    return (
        <div>
            <div className='block lg:flex mt-6 gap-x-4 items-center lg:mt-2'>
                <button type='button' disabled className='bg-custom-white cursor-pointer text-custom-navy px-2 py-1 rounded-lg'>regular expression</button>
                <p className='text-custom-white indent-8 mt-2 lg:mt-0 lg:indent-0 tracking-[.25em]'>{regex}</p>
            </div>
            <div className='block lg:flex mt-4 gap-x-4 items-center lg:mt-2'>
                <button type='button' disabled className='bg-custom-red cursor-pointer text-white px-2 py-1 rounded-lg'>expect</button>
                <p className='text-custom-white indent-8 mt-2 lg:mt-0 lg:indent-0'>{meaning}</p>
            </div>
            <div className='block lg:flex mt-4 gap-x-4 items-center lg:mt-2'>
                <button type='button' disabled className='bg-custom-green cursor-pointer text-white px-2 py-1 rounded-lg'>explanation</button>
                <p className='text-custom-white indent-8 mt-2 lg:mt-0 lg:indent-0'>{result}</p>
            </div>
        </div>
    )
}

export default RegexDescription