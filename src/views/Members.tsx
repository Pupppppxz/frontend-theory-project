import React from 'react'
import Landing from '../components/landing'
import { memberLists } from '../constants/members'
import { IMember } from 'interfaces/constants'
import MemberCard from '../components/memberCard'

type Props = {}

const Members = (props: Props) => {
    return (
        <Landing>
            <div className='px-3'>
                <div className='flex items-center gap-x-3 p-3 rounded-t-xl mt-3'>
                    <div className='bg-custom-green p-2 rounded-md'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-custom-white">
                            <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <h1 className='text-3xl font-bold text-custom-black'>Members</h1>
                </div>
                {/* <hr className='border-b-2 border-custom-black' /> */}
                <div className='grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 py-6 px-3'>
                    {memberLists && memberLists.map((member: IMember, index: number) =>
                        <MemberCard name={member.name} studentId={member.studentId} profile={member.profile} />
                    )}
                </div>
            </div>
        </Landing >
    )
}

export default Members