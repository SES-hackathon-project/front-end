import React, { useState, useEffect } from 'react'

const Loading = (hangout_id) => {

  const GetStatus = () => {

    const [submitted, setSubmitted] = useState(0)
    const [groupsize, setGroupsize] = useState(0)

    const getInfo = async (hangout_id) => {

      // const url = "http://localhost:8000/view_hangout/668100"
      const url = `http://localhost:8000/view_hangout/${hangout_id.hangout_id}`
      console.log(url)

      const response = fetch(url).then(response => response.json())
        .then(json => {

          console.log(json)

          console.log(`# of submissions:${json.number_submitted}`)
          setSubmitted(json.number_submitted)

          console.log(`group size: ${json.group_size}`)
          setGroupsize(json.group_size)
        })

    }

    useEffect(() => {
      getInfo(hangout_id)
    }, [])


    return (
      <>
      </>
    )
  }

  return (
    <div>
      <GetStatus hangout_id={hangout_id.hangout_id} />
    </div>
  )
}

export default Loading
