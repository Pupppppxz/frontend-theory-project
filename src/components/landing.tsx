import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { CSVLink } from "react-csv"
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setCurrentTemple } from '../redux/slices/currentTemples';
import Navbar from './navbar'
import { ITemple } from 'interfaces/temples';

type LandingPageType = {
    children?: any;
}

const Landing = ({ children }: LandingPageType) => {
    const dispatch = useAppDispatch()
    const currentTemple = useAppSelector((state) => state.temples.currentItem)
    const [csvData, setCsvData] = useState<string[][]>([])
    const location = useLocation()

    // const downloadCSV = (temple: ITemple | null) => {
    //     // console.log({ currentTemple })
    //     if (currentTemple) {
    //         const rows = temple?.temples?.map((val: string) => [val])
    //         let data = rows?.map(e => e[0]).join(",\n")
    //         const csvContent = `data:text/csv;charset=utf-8,ชื่อวัด,\n${data}`
    //         console.log({ csvContent })
    //         const encodedURI = encodeURI(csvContent)
    //         // window.open(encodeURL)
    //         var link = document.createElement("a");
    //         link.setAttribute("href", encodedURI);
    //         // link.setAttribute("download", `${temple?.province}.csv`);
    //         document.body.appendChild(link);
    //         link.click();
    //     }
    // }

    useEffect(() => {
        if (location.pathname !== "/") {
            dispatch(setCurrentTemple(null))
        }
    }, [location.pathname])

    useEffect(() => {
        if (currentTemple) {
            setCsvData([["ชื่อวัด"], ...currentTemple?.temples?.map((val: string) => [val]) as string[][]])
        }
    }), [currentTemple]

    return (
        <div className='font-Noto w-full h-full min-h-screen bg-custom-green overflow-x-hidden'>
            <Navbar location={location} />
            <div className='container mx-auto pt-28 pb-2 px-2 lg:px-0'>
                <div className='min-h-[85vh] h-fit bg-white rounded-xl shadow-2xl py-2'>
                    {children}
                </div>
            </div>
            {currentTemple ?
                // <div onClick={() => downloadCSV(currentTemple)} className='bg-custom-green md:bg-custom-darker-black hover:bg-gray-600 cursor-pointer w-fit h-fit fixed bottom-2 right-2 border-2 p-1 md:border-custom-darker-black rounded-lg'>
                //     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-custom-white">
                //         <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                //     </svg>
                // </div>
                <CSVLink filename={`temples-${currentTemple.province}.csv`} className='bg-custom-green md:bg-custom-darker-black hover:bg-gray-600 cursor-pointer w-fit h-fit fixed bottom-2 right-2 border-2 p-1 md:border-custom-darker-black rounded-lg' data={csvData} separator={","}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-custom-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                </CSVLink>
                : null}
        </div>
    )
}

export default Landing