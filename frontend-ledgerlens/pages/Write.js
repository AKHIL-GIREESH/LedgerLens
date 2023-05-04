import React, { useState } from 'react'
import {useContract,useAddress, useStorageUpload, useContractWrite,Web3Button} from "@thirdweb-dev/react"

const Write = () => {

  const {contract} = useContract("0xFAB701E6c7BbeBB3AEFe265F457911B20f786ca7")
  const address = useAddress()
  
  const [file,setFile] = useState()
  const [title,setTitle] = useState("")
  const [body,setBody] = useState("")
  const [ipfsURL,setIpfsURL] = useState("")

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
    return uploadURL
  }

  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "addArticle"
  )

  return (
    <>
      <input type="text" placeholder='Enter the Title' onChange={({target}) => setTitle(target.value)}></input>
      <input type="file" onChange={(e) => {
      if(e.target.files){
        setFile(e.target.files)
      }}
      }
      />
      <textarea placeholder='Start Typing' onChange={({target}) => setBody(target.value)}></textarea>
      <Web3Button
      contractAddress= {"0xFAB701E6c7BbeBB3AEFe265F457911B20f786ca7"} // Your smart contract address
      action={() => {
        setIpfsURL(()=>uploadToIpfs())
        console.log(ipfsURL[0])
        mutateAsync({ args: [title,body,ipfsURL] })
        setFile("")
        setTitle("")
        setBody("")
        return(<>

        </>)
        }}
    >
      Submit
    </Web3Button>
    </>
  )
}

export default Write