import React, { useState, useMemo, useEffect } from 'react'
import { ITemple } from 'interfaces/temples'
import Paginated from './paginated';
import { useAppDispatch } from '../redux/hooks';
import { setCurrentTemple } from '../redux/slices/currentTemples';
// import { ProvinceList, provinces } from 'constants/defaultValue'

type Props = {
    temples: ITemple[];
    filter: string[];
}

const ContentTab = ({ temples, filter }: Props) => {

    const dispatch = useAppDispatch()
    const [activeTab, setActiveTab] = useState<string>(filter[0])

    const filteredProvince = useMemo(() =>
        temples?.filter((d: ITemple) => filter.includes(d.province))
        , [temples, filter])

    const filteredSelect = useMemo(() => {
        const filteredTemple = temples?.filter((d: ITemple) =>
            d.province === activeTab
        )
        dispatch(setCurrentTemple(filteredTemple?.length === 1 ? filteredTemple[0] : null))
        return filteredTemple
    }
        , [activeTab])

    console.log({ filteredSelect })

    const getProvinceName = (province: string) => {
        console.log({ province })
        switch (province) {
            case "Nan":
                return "จังหวัดน่าน"
            case "Buriram":
                return "จังหวัดบุรีรัมย์"
            case "Prathumthani":
                return "จังหวัดปทุมธานี"
            default:
                return "จังหวัดประจวบคีรีขันธ์"
        }
    }

    useEffect(() => {
        setActiveTab(filter[0])
    }, [filter])

    return (
        <div>
            <div className='flex flex-col md:flex-row mt-4 gap-x-7 border-b-4 border-custom-black'>
                {filteredProvince && filteredProvince.map((val: ITemple, index: number) => (
                    <div key={`${val.province}-${index}`} onClick={() => setActiveTab(val?.province)} className={`py-3 px-4 ${activeTab === val.province ? "bg-custom-black" : "bg-custom-green"} text-custom-white first:rounded-t-xl md:rounded-t-xl cursor-pointer`}>{getProvinceName(val?.province)}</div>
                ))}
            </div>
            <div className='min-h-[74vh] bg-custom-black rounded-b-lg px-2'>
                {filteredSelect && <Paginated temples={filteredSelect[0].temples} itemsPerPage={13} />}
            </div>
        </div>
    )
}

export default ContentTab