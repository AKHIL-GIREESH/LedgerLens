import React, { useState } from 'react'
import {useContract,useAddress, useStorageUpload} from "@thirdweb-dev/react"

const Write = () => {

  const contract = useContract("0xFAB701E6c7BbeBB3AEFe265F457911B20f786ca7")
  const address = useAddress()
  
  const [file,setFile] = useState()
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const {mutateAsync: upload} = useStorageUpload()

  const uploadToIpfs = async () => {
    const uploadURL = await upload({
      data:[file],
      options:{
        uploadWithGatewayUrl:true,
        uploadWithoutDirectory:true
      }
    })
    
    console.log("Upload URL",uploadURL)
  }

  return (
    <>
      <input type="text" placeholder='Enter the Title'></input>
      <input type="file" onChange={(e) => {
      if(e.target.files){
        setFile(e.target.files)
      }}
      }
      />
      <textarea placeholder='Start Typing'></textarea>
      <button onClick={() => uploadToIpfs()}>Submit</button>
    </>
  )
}

export default Write