import { useState, useEffect } from 'react'
import loadCompanies from './loadCompanies'


function LoadNotices() {

    const [noticeAll, setNoticeAll] = useState([])
    const [noticeApple, setNoticeApple] = useState([])
    const [noticeGoogle, setNoticeGoogle] = useState([])
    const [noticeMicrosoft, setNoticeMicrosoft] = useState([])
    const [noticeFacebook, setNoticeFacebook] = useState([])
    const [noticeAmazon, setNoticeAmazon] = useState([])
    const [noticeIntel, setNoticeIntel] = useState([])

    const notices = [
        noticeAll,
        noticeApple,
        noticeGoogle,
        noticeMicrosoft,
        noticeFacebook,
        noticeAmazon,
        noticeIntel
    ]

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

            const noticeMicrosoftResponse = await fetch(companies.list[2].url)
            const noticeMicrosoftJson = await noticeMicrosoftResponse.json()
            setNoticeMicrosoft(noticeMicrosoftJson.articles)

            const noticeFacebookResponse = await fetch(companies.list[3].url)
            const noticeFacebookJson = await noticeFacebookResponse.json()
            setNoticeFacebook(noticeFacebookJson.articles)

            const noticeAmazonResponse = await fetch(companies.list[4].url)
            const noticeAmazonJson = await noticeAmazonResponse.json()
            setNoticeAmazon(noticeAmazonJson.articles)

            const noticeIntelResponse = await fetch(companies.list[5].url)
            const noticeIntelJson = await noticeIntelResponse.json()
            setNoticeIntel(noticeIntelJson.articles)
        }
        fetchData()

    }, [companies])


    return notices

}


export default LoadNotices