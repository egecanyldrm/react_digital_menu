import axios from 'axios';
import React, { lazy, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setStore } from '../store/reducers/DataReducer';
import LoadingSkeleton from '../components/LoadingSkeleton';
// import Athena from '../themes/athena'
const Athena = lazy(() => import('../themes/athena'))
const Customer = () => {
    // ** Params 
    const params = useParams();

    // ** States 
    const [loading, setLoading] = useState(true);

    // ** Store && Dispatch 
    const dispatch = useDispatch();
    useEffect(() => {

        const fetchData = async () => {
            try {
                const { data } = await axios.get(process.env.REACT_APP_API_URL + '/customer/' + params.customer);
                const general = data.user.themeSettings.general;
                const langs = ['tr'];

                // Languages adding 
                if (general.english) langs.push('en')
                if (general.russian) langs.push('ru')
                if (general.germany) langs.push('de')
                if (general.french) langs.push('fr')
                if (general.arab) langs.push('ar')
                dispatch(setStore(
                    {
                        data: data,
                        general: general,
                        langs: langs,
                        localedetection: general.autoLocaleDetection
                    }
                ))
                if (data) setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()

    }, [])
    return (
        <LoadingSkeleton loading={loading} >
            <Athena />
        </LoadingSkeleton>
    )


}

export default Customer