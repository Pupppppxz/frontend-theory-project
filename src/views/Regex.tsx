import React from 'react'
import Landing from '../components/landing'
// import Code from '../components/codeHilight'
import RegexDescription from '../components/regexDescription'
import RegexTopic from '../components/regexTopic'
import { regexLists } from '../constants/regex'
import { IRegexList } from 'interfaces/regex'

type Props = {}

const Regex = (props: Props) => {
    return (
        <Landing>
            <div className='px-3'>
                <div className='flex items-center gap-x-3 p-3 rounded-t-xl mt-3'>
                    <div className='bg-custom-green p-2 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-custom-white">
                            <path fill-rule="evenodd" d="M2.25 6a3 3 0 013-3h13.5a3 3 0 013 3v12a3 3 0 01-3 3H5.25a3 3 0 01-3-3V6zm3.97.97a.75.75 0 011.06 0l2.25 2.25a.75.75 0 010 1.06l-2.25 2.25a.75.75 0 01-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06zm4.28 4.28a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h1 className='text-3xl font-bold text-custom-black'>Regex</h1>
                </div>
                {regexLists && regexLists.map((val: IRegexList) => (
                    <div className='animate-fade bg-custom-light-navy mt-3 rounded-xl px-3 py-6'>
                        <RegexTopic functionName={val.functionName} title={val.title} />
                        <img src={val.code} className='w-full lg:w-2/3 xl:w-1/2 rounded-xl' alt='' />
                        <RegexDescription regex={val.regex} result={val.result} meaning={val.meaning} />
                    </div>
                ))}
            </div >
        </Landing >
    )
}

export default Regex