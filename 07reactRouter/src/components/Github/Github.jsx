import React from 'react'
import { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            setData(data)
        })
    }, [])
  return (
    <div className='text-center m-10 bg-gray-600
    text-white p-4 text-2xl'>Github followers: {data.followers}</div>
  )
}

export default Github