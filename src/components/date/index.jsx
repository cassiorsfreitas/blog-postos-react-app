import React from "react"
import dayjs from "dayjs"

function Date() {

    let day = dayjs().format("DD MMMM, dddd")

    return <p> {day.toUpperCase()} </p>
}

export default Date;