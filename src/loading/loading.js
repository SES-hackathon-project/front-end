import React, { useState, useEffect } from 'react'
import { PieChart } from 'react-minimal-pie-chart'
import './loading.css'

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

    const one = submitted
    const two = groupsize - submitted
    // const two = 0

    const data_val = [
      { title: 'Two', value: two, color: '#cccccc', style: { strokeWidth: 9 } },
      { title: 'One', value: one, color: '#757171', style: { strokeWidth: 2 } }
    ]

    const data_val_full = [
      { title: 'One', value: 1, color: '#776585', style: { strokeWidth: 9 } }
    ]


    const message = `${submitted}/${groupsize} joined...`

    console.log(data_val)

    if (two == 0) {
      return (
        <>
          <div id="load">
            <PieChart
              lineWidth={30}
              data={data_val_full}
              radius={50}
              rounded={true}
            />
          </div>
        </>
      )
    }
    else {

      return (

        <>
          <div id="load">
            <h1 id="load_des">{message}</h1>
          </div>
          <div id="load">
            <PieChart
              lineWidth={30}
              data={data_val}
              radius={50}
              rounded={true}
            />
          </div>
        </>
      )
    }
  }


  return (
    <div>
      <GetStatus hangout_id={hangout_id.hangout_id} />
    </div>
  )
}

export default Loading
