import React from 'react'
import {useContract} from "@thirdweb-dev/react"

const Write = () => {

  const contract = useContract("0xFAB701E6c7BbeBB3AEFe265F457911B20f786ca7")
  return (
    <>
      <input type="text" placeholder='Enter the Title'></input>
      <input type="file"/>
      <textarea placeholder='Start Typing'></textarea>
      <button onClick={() => console.log("Submit")}>Submit</button>
    </>
  )
}

export default Write