import React, { useMemo } from 'react'
import { ITemple } from "../interfaces/temples";

export const useFilterProvince = (provinces: ITemple[], filter: string[]) => {
    console.log("kkk")
    const filtered = provinces.filter(province => filter.includes(province.province))
    // , [provinces, filter])
    console.log(filtered)
    return filtered
}