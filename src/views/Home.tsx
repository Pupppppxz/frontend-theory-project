import React, { useState, useEffect } from 'react'
import { Formik, Form } from 'formik'
import axios from 'axios';
import AppLoading from '../components/loading'
import { useTemples } from '../hooks/useTemples'
import { useAppDispatch } from '../redux/hooks';
import { CustomSelect } from '../components/formSelect';
import { BaseURL, ProvinceList } from '../constants/defaultValue';
import { IDefaultValueType, ISelectOption } from 'interfaces/form';
import Landing from '../components/landing';
import ContentTab from '../components/contentTab';
import { ITemple } from 'interfaces/temples';
import { setTemples } from '../redux/slices/currentTemples';

const home = () => {
    const dispatch = useAppDispatch()
    const [provinceFiltered, setProvinceFiltered] = useState<string[]>([
        "Nan",
        "Buriram",
        "Prathumthani",
        "Prachuapkhirikhan"
    ])
    const [data, setData] = useState<ITemple[] | null>(null);
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);
    const [initialValues,] = useState<IDefaultValueType>({
        provinces: undefined
    })

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`${BaseURL}/temple`)
            console.log(response.data)
            setData(response.data?.data)
            dispatch(setTemples(response.data?.data ?? null))
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
        fetchData()
    }, [])

    if (loading) {
        return <AppLoading success={success} />
    }

    if (error) {
        return <div>Error while getting data...</div>
    }

    return (
        <Landing>
            <div className='m-4'>
                <Formik
                    initialValues={initialValues}
                    onSubmit={(val) => {
                        console.log("test", val)
                        const provinces: string[] = val.provinces === undefined || val.provinces?.length === 0 ? [
                            "Nan",
                            "Buriram",
                            "Prathumthani",
                            "Prachuapkhirikhan"]
                            : val.provinces?.map((val: ISelectOption) => val?.value)
                        setProvinceFiltered(provinces)
                    }}
                    validateOnMount
                >
                    {({
                        errors,
                        touched,
                        setFieldValue,
                        setFieldTouched,
                        values,
                    }) => {
                        return (
                            <div >
                                <Form className='flex gap-x-4'>
                                    <CustomSelect
                                        className='w-full'
                                        name='provinces'
                                        id='province-select'
                                        value={values.provinces}
                                        options={ProvinceList}
                                        isMulti
                                        onChange={setFieldValue}
                                        onBlur={setFieldTouched}
                                        placeholder='-- เลือกจังหวัด --'
                                    />
                                    <button className='bg-custom-green text-custom-white px-4 text-lg rounded-md' type='submit'>ค้นหา</button>
                                </Form>
                            </div>
                        )
                    }}
                </Formik>
                <ContentTab temples={data as ITemple[]} filter={provinceFiltered} />
            </div>
        </Landing>
    )
}

export default home