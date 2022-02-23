import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./scss/styles.scss"

const App = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const main = async () => {
      const res = await axios.get("http://localhost:3200/listado-productos");
      setData(res.data)
    }
    main()
  },[])

  return (
    <div className="main">
      <h2>Lista</h2>
      <ul className='list-group border p-4 w-50'>
        <li className='list-group-item '> 
          <span className='id border-end'>#</span>
          <span className='name border-end'>nombre</span>
          <span className='caract'>caracteristicas</span>
        </li>
        {
          data.map((item, i)=> (
            <li className='list-group-item ' key={item.id}> 
            <span className='id border-end'>{item.id}</span>
            <span className='name border-end'>{item.nombre}</span>
            <span className='caract'>{item.caracteristica}</span>
          </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App