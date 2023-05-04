import React, { useState } from 'react'
import {useContract,useAddress, useStorageUpload, useContractWrite,Web3Button} from "@thirdweb-dev/react"

const Write = () => {

  const {contract} = useContract("0xDa792D8D2895FF29eF9d3479BBcc43dA57642f33")
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
      contractAddress= {"0xDa792D8D2895FF29eF9d3479BBcc43dA57642f33"} // Your smart contract address
      action={() => {
        setIpfsURL(()=>uploadToIpfs())
        console.log(ipfsURL[0])
        return mutateAsync({ args: [title,body,ipfsURL] })
        }}
    >
      Submit
    </Web3Button>
    </>
  )
}

export default Write