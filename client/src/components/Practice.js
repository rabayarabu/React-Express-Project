import React, {useEffect, useState} from 'react'

function Practice(){

  const [name,setName] = useState([{}])


  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setName(data)
      }
    )
  }, []

  )
  return(
    <div>
      {(typeof name.names=== 'undefined') ? (
        <p>Buffering...</p>
      ) : (name.names.map((name, i) => (
        <p key={i}>{name}</p>
      )
      ))}
    </div>

  )
}

export default Practice