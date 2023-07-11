import { useState, useEffect } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  
  const[personajes,setPersonajes]= useState([])
  const[page,setPages]=useState(1)

  useEffect(() => {
    const obtenerPersonajes=async()=>{
      const response= await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
      setPersonajes(response.data.results)
    }
    obtenerPersonajes()
    ;
  }, [page]);
 console.log(page)
  return (
    <>
      <div >
      <button onClick={()=>setPages(page-1)}>Anterior</button>
      <button onClick={()=>setPages(page+1)}>Siguiente</button>
        {personajes.map(personajes=>(
          <div Key={personajes.id}>
          <h2>{personajes.name}</h2>
          <img src={personajes.image}/>

          </div>
        ))}
        <button onClick={()=>setPages(page-1)}>Anterior</button>
       <button onClick={()=>setPages(page+1)}>Siguiente</button>

      </div>
     
    </>
  )
}

export default App
