import { useEffect, useState } from 'react';
import axios from "axios";
import { BaseURL } from "../constants/defaultValue";
import { ITemple } from "../interfaces/temples";
import { IApiResponse } from "../interfaces/hook";

export const useTemples = (): IApiResponse => {
    const [status, setStatus] = useState<Number>(0)
    const [data, setData] = useState<ITemple[] | null>(null);
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const getTemples = async () => {
        setLoading(true)

        try {
            const response = await axios.get(`${BaseURL}/temple`)
            setData(response.data?.data)
            setStatus(response.data?.status)
        } catch (error) {
            setError(error)
        } finally {
            setSuccess(true)
            setTimeout(() => {
                setLoading(false)
            }, 1500)
        }
    }

    useEffect(() => {
        getTemples()
    }, [])

    return { data, status, error, loading, success }
}