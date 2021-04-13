import { useState, useEffect } from 'react'
import loadList from '../../utils/loadCompanies'

function LoadNotices() {

    const [notices, setNotices] = useState([])

    useEffect(() => {
        async function fetchData() {
            const noticesResponse = await fetch(loadList().init.url)
            const noticesJson = await noticesResponse.json()
            setNotices(noticesJson.articles)
        }

        fetchData()
    }, [])

    return notices

}


export default LoadNotices