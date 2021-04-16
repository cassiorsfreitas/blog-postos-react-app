import { useState, useEffect } from 'react'
import loadCompanies from './loadCompanies'


function LoadNotices() {

    const [noticeAll, setNoticeAll] = useState([])
    const [noticeApple, setNoticeApple] = useState([])
    const [noticeGoogle, setNoticeGoogle] = useState([])

    const notices = [noticeAll, noticeApple, noticeGoogle]
    const companies = loadCompanies()

    useEffect(() => {
        async function fetchData() {
            const noticeAllResponse = await fetch(companies.init.url)
            const noticeAllJson = await noticeAllResponse.json()
            setNoticeAll(noticeAllJson.articles)

            const noticeAppleResponse = await fetch(companies.list[0].url)
            const noticeAppleJson = await noticeAppleResponse.json()
            setNoticeApple(noticeAppleJson.articles)

            const noticeGoogleResponse = await fetch(companies.list[1].url)
            const noticeGoogleJson = await noticeGoogleResponse.json()
            setNoticeGoogle(noticeGoogleJson.articles)

        }
        fetchData()

    }, [companies])


    return notices

}


export default LoadNotices