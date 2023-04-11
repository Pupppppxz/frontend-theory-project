import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';

type Props = {
    temples: string[];
    itemsPerPage: number;
}

const Paginated = ({ temples, itemsPerPage }: Props) => {
    const [itemOffset, setItemOffset] = useState<number>(0);
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = temples.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(temples.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        console.log(typeof event)
        const newOffset = (event.selected * itemsPerPage) % temples.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    useEffect(() => {
        setItemOffset(0)
    }, [temples])

    return (
        <div className='pt-1 h-full pb-16 md:pb-20 relative'>
            <div className='flex flex-col gap-y-2'>
                {currentItems && currentItems.map((val: string, index: number) =>
                    <div key={`${val}-${index}`} className='flex items-center gap-x-3 bg-custom-navy py-2 px-3 rounded-lg hover:bg-custom-light-navy'>
                        <div className='flex items-center justify-center rounded-lg w-8 h-8 text-lg font-semibold text-custom-white bg-custom-red'>{itemOffset + 1 + index}</div> <p className='text-custom-white'>{val}</p>
                    </div>
                )}
            </div>
            <ReactPaginate
                className='flex w-full gap-x-1 md:gap-x-4 justify-center items-center mt-3 absolute bottom-3 text-lg'
                pageClassName='flex items-center justify-center text-lg w-9 h-9 bg-custom-white rounded-lg hover:bg-gray-400 hover:text-custom-white'
                nextClassName={`flex items-center justify-center px-2 md:px-3 h-7 md:h-9 bg-custom-red rounded-lg text-custom-white font-semibold`}
                previousClassName={`flex items-center justify-center px-2 md:px-3 h-7 md:h-9 bg-custom-red rounded-lg text-custom-white font-semibold`}
                breakClassName='text-custom-red font-bold text-xl md:text-3xl'
                activeClassName='font-bold text-xl lg:text-3xl w-12 h-12 lg:w-[3rem] lg:h-[3rem] text-custom-red'
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </div>
    )
}

export default Paginated