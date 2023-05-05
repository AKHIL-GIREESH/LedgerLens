import React, { useState } from 'react'
import {useContract,useAddress, useStorageUpload, useContractWrite,Web3Button} from "@thirdweb-dev/react"
import Navbar from './Navbar'


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
    setIpfsURL(uploadURL)
  }

  const { mutateAsync, isLoading, error } = useContractWrite(
    contract,
    "addArticle"
  )

  return (
    <>
    <Navbar/>
    <div className='bg-black text-white min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-medium mb-3'>Publish your new Article</h1>
      <div className='w-1/2 flex justify-center items-center flex-col  bg-gray-300 rounded-2xl p-6 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border-0'>


    <label
  for="UserEmail"
  className="relative block overflow-hidden w-48 mb-5 border-b border-gray-200 bg-transparent pt-3 focus-within:border-blue-600"
>
  <input
    type="name"
    id="Title"
    placeholder="Title"
    onChange={({ target }) => setTitle(target.value)}

    className="peer h-10 text-3xl w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />

  <span
    className="absolute start-0 top-2 -translate-y-1/2 text-3xl text-gray-100  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
  >
    Title
  </span>
</label>

   
<div className="flex items-center justify-center w-full">
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-black dark:hover:bg-bray-800  hover:bg-gray-800 mb-5 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden"  onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files);
          }
        }} />
    </label>
</div> 

    <textarea
      placeholder="Start Typing"
      onChange={({ target }) => setBody(target.value)}
      className="bg-gray-600 border-gray-300 rounded-md p-4 w-full h-52 border-0 focus:border-0 border-transparent focus:border-transparent focus:ring-0  mb-4"
    ></textarea>
    <div clasNames=" flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse dark:bg-gray-900 dark:border-gray-700 dark:divide-gray-700">
    <Web3Button
      contractAddress= {"0x0d3ad4087aEB8a608bD5c6C51EE24b34b44e243B"} // Your smart contract address
      action={() => {
        uploadToIpfs()
        return mutateAsync({ args: [title,body,ipfsURL[0]] })
        }}
        className="mb-5 flex items-center px-4 py-2 text-sm font-medium text-gray-600 transition-colors duration-200 sm:text-base sm:px-6 dark:hover:bg-gray-800 dark:text-gray-300 gap-x-3 hover:bg-gray-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 sm:w-6 sm:h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
        </svg>

        <span>Publish</span>
        
    </Web3Button>

</div>
 
    </div>

    </div>

  </>
  )
}

export default Write
