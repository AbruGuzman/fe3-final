import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ContextGlobal } from '../Components/utils/global.context'
import axios from 'axios'



const Detail = () => {
 
  const [data, setData] = useState(null); 
  const { state } = useContext(ContextGlobal);
  const { id } = useParams();

  const getData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => setData(res.data))
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <div className={state.theme}>
      <h1>Detail Dentist id </h1>
     
          <ul>
            <li>Name</li>
            <li>Email</li>
            <li>Phone</li>
            <li>Website</li>
          </ul>
       
        
          {dents.map((dent) => (
            <ul key={dent.id}>
              <li>{dent?.name}</li>
              <li>{dent?.email}</li>
              <li>{dent?.phone}</li>
              <li>{dent?.website}</li>
            </ul>
          ))}
    </div>
  )
}

export default Detail