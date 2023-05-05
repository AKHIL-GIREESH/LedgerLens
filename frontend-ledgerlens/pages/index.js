// import { ConnectWallet,useConnectionStatus,useContractRead,useContract } from "@thirdweb-dev/react";
// import Navbar from "./Navbar";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Home from "./Home";
// export default function HomeO() {

//   const {contract} = useContract("0xDa792D8D2895FF29eF9d3479BBcc43dA57642f33")
  
//   const loopingThroughArticles = async (i) => {
//   const {data : posts} = await useContractRead(contract,"Articles",[i])
//   console.log(posts[0],posts.creator)
//   }

// 

//   for(let i=0;i<3;i++){
//     loopingThroughArticles(i)
//   }


// const connectionStatus = useConnectionStatus()
// console.log(connectionStatus)
// //   <ConnectWallet
// //   theme="dark"
// //   btnTitle="Connect Wallet"
// // />

//   return (
//     (connectionStatus === "connected")?
//    <>
// <Navbar/>
// <section className=" dark:text-gray-100 bg-black text-white">
// 	<div className="container max-w-6xl py-6 px-0 mx-auto space-y-6 sm:space-y-12">

// 		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//     <motion.div
//       className="box"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.5,
//         ease: [0, 0.71, 0.2, 1.01]
//       }}
//     >
//     <Link href="/Article" className="group relative block bg-black rounded-3xl my-2 mx-4">
//   <img
//     alt="Developer"
//     src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
//     className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-3xl"
//   />

//   <div className="relative p-4 sm:p-6 lg:p-8">
//     <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
//       Developer
//     </p>

//     <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

//     <div className="mt-32 sm:mt-48 lg:mt-64">
//       <div
//         className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
//       >
//         <p className="text-sm text-white">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
//           perferendis hic asperiores quibusdam quidem voluptates doloremque
//           reiciendis nostrum harum. Repudiandae?
//         </p>
//       </div>
//     </div>
//   </div>
// </Link>
// </motion.div>  
// <motion.div
//       className="box"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.5,
//         ease: [0, 0.71, 0.2, 1.01]
//       }}
//     >
//     <Link href="/Article" className="group relative block bg-black rounded-3xl my-2 mx-4">
//   <img
//     alt="Developer"
//     src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
//     className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-3xl"
//   />

//   <div className="relative p-4 sm:p-6 lg:p-8">
//     <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
//       Developer
//     </p>

//     <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

//     <div className="mt-32 sm:mt-48 lg:mt-64">
//       <div
//         className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
//       >
//         <p className="text-sm text-white">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
//           perferendis hic asperiores quibusdam quidem voluptates doloremque
//           reiciendis nostrum harum. Repudiandae?
//         </p>
//       </div>
//     </div>
//   </div>
// </Link>
// </motion.div>  
// <motion.div
//       className="box"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.5,
//         ease: [0, 0.71, 0.2, 1.01]
//       }}
//     >
//     <Link href="/Article" className="group relative block bg-black rounded-3xl my-2 mx-4">
//   <img
//     alt="Developer"
//     src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
//     className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-3xl"
//   />

//   <div className="relative p-4 sm:p-6 lg:p-8">
//     <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
//       Developer
//     </p>

//     <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

//     <div className="mt-32 sm:mt-48 lg:mt-64">
//       <div
//         className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
//       >
//         <p className="text-sm text-white">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
//           perferendis hic asperiores quibusdam quidem voluptates doloremque
//           reiciendis nostrum harum. Repudiandae?
//         </p>
//       </div>
//     </div>
//   </div>
// </Link>
// </motion.div>  
// <motion.div
//       className="box"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.5,
//         ease: [0, 0.71, 0.2, 1.01]
//       }}
//     >
//     <Link href="/Article" className="group relative block bg-black rounded-3xl my-2 mx-4">
//   <img
//     alt="Developer"
//     src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
//     className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-3xl"
//   />

//   <div className="relative p-4 sm:p-6 lg:p-8">
//     <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
//       Developer
//     </p>

//     <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

//     <div className="mt-32 sm:mt-48 lg:mt-64">
//       <div
//         className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
//       >
//         <p className="text-sm text-white">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
//           perferendis hic asperiores quibusdam quidem voluptates doloremque
//           reiciendis nostrum harum. Repudiandae?
//         </p>
//       </div>
//     </div>
//   </div>
// </Link>
// </motion.div>  
// <motion.div
//       className="box"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.5,
//         ease: [0, 0.71, 0.2, 1.01]
//       }}
//     >
//     <Link href="/Article" className="group relative block bg-black rounded-3xl my-2 mx-4">
//   <img
//     alt="Developer"
//     src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
//     className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-3xl"
//   />

//   <div className="relative p-4 sm:p-6 lg:p-8">
//     <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
//       Developer
//     </p>

//     <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

//     <div className="mt-32 sm:mt-48 lg:mt-64">
//       <div
//         className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
//       >
//         <p className="text-sm text-white">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
//           perferendis hic asperiores quibusdam quidem voluptates doloremque
//           reiciendis nostrum harum. Repudiandae?
//         </p>
//       </div>
//     </div>
//   </div>
// </Link>
// </motion.div>  
// <motion.div
//       className="box"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.5,
//         ease: [0, 0.71, 0.2, 1.01]
//       }}
//     >
//     <Link href="/Article" className="group relative block bg-black rounded-3xl my-2 mx-4">
//   <img
//     alt="Developer"
//     src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
//     className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-3xl"
//   />

//   <div className="relative p-4 sm:p-6 lg:p-8">
//     <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
//       Developer
//     </p>

//     <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

//     <div className="mt-32 sm:mt-48 lg:mt-64">
//       <div
//         className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
//       >
//         <p className="text-sm text-white">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
//           perferendis hic asperiores quibusdam quidem voluptates doloremque
//           reiciendis nostrum harum. Repudiandae?
//         </p>
//       </div>
//     </div>
//   </div>
// </Link>
// </motion.div>  
// <motion.div
//       className="box"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.5,
//         ease: [0, 0.71, 0.2, 1.01]
//       }}
//     >
//     <Link href="/Article" className="group relative block bg-black rounded-3xl my-2 mx-4">
//   <img
//     alt="Developer"
//     src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
//     className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-3xl"
//   />

//   <div className="relative p-4 sm:p-6 lg:p-8">
//     <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
//       Developer
//     </p>

//     <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

//     <div className="mt-32 sm:mt-48 lg:mt-64">
//       <div
//         className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
//       >
//         <p className="text-sm text-white">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
//           perferendis hic asperiores quibusdam quidem voluptates doloremque
//           reiciendis nostrum harum. Repudiandae?
//         </p>
//       </div>
//     </div>
//   </div>
// </Link>
// </motion.div>  
// <motion.div
//       className="box"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.5,
//         ease: [0, 0.71, 0.2, 1.01]
//       }}
//     >
//     <Link href="/Article" className="group relative block bg-black rounded-3xl my-2 mx-4">
//   <img
//     alt="Developer"
//     src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
//     className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-3xl"
//   />

//   <div className="relative p-4 sm:p-6 lg:p-8">
//     <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
//       Developer
//     </p>

//     <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

//     <div className="mt-32 sm:mt-48 lg:mt-64">
//       <div
//         className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
//       >
//         <p className="text-sm text-white">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
//           perferendis hic asperiores quibusdam quidem voluptates doloremque
//           reiciendis nostrum harum. Repudiandae?
//         </p>
//       </div>
//     </div>
//   </div>
// </Link>
// </motion.div>  
// <motion.div
//       className="box"
//       initial={{ opacity: 0, scale: 0.5 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{
//         duration: 0.8,
//         delay: 0.5,
//         ease: [0, 0.71, 0.2, 1.01]
//       }}
//     >
//     <Link href="/Article" className="group relative block bg-black rounded-3xl my-2 mx-4">
//   <img
//     alt="Developer"
//     src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
//     className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-3xl"
//   />

//   <div className="relative p-4 sm:p-6 lg:p-8">
//     <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
//       Developer
//     </p>

//     <p className="text-xl font-bold text-white sm:text-2xl">Tony Wayne</p>

//     <div className="mt-32 sm:mt-48 lg:mt-64">
//       <div
//         className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
//       >
//         <p className="text-sm text-white">
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
//           perferendis hic asperiores quibusdam quidem voluptates doloremque
//           reiciendis nostrum harum. Repudiandae?
//         </p>
//       </div>
//     </div>
//   </div>
// </Link>
// </motion.div>  







// 		</div>
	
// 	</div>
// </section>
//    </>:<Home/>
//   );
// }


import { ConnectWallet,useConnectionStatus,useContractRead,useContract } from "@thirdweb-dev/react";
import Navbar from "./Navbar";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Home from "./Home";

export default function HomeO() {

  const {contract} = useContract("0x0d3ad4087aEB8a608bD5c6C51EE24b34b44e243B")
  const { data, isLoading, error } = useContractRead(contract, "returnAllTheArticles");
  data.map()

  //0 --> Heading
  //1 --> Creator Address
  //2 --> Body
  //3 --> ipfs url (URL has some issues, so use this URL for everything --> https://ipfs.thirdwebcdn.com/ipfs/QmaqiPvdrM7yytunSiGRdNfiEFXA5edhnhQNYXkSMKGiho/ )

const connectionStatus = useConnectionStatus()
console.log(connectionStatus)
//   <ConnectWallet
//   theme="dark"
//   btnTitle="Connect Wallet"
// />

  return (
    (connectionStatus === "connected")?
   <>
<Navbar/>
<section className=" dark:text-gray-100 bg-black text-white">
	<div className="container max-w-6xl py-6 px-0 mx-auto space-y-6 sm:space-y-12">

		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5}}
        >
    <Link href="/Article" className="group relative block bg-black rounded-3xl my-2 mx-4">
  <img
    alt="Developer"
    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-3xl"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    {/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
      Developer
    </p> */}

    <p className="text-xl font-bold text-white sm:text-2xl">{posts0 && posts0[0]}</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
          {posts0 && posts0[2]}
        </p>
      </div>
    </div>
  </div>
</Link>
</motion.div>  
<motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5}}
        >
    <Link href="/Article" className="group relative block bg-black rounded-3xl my-2 mx-4">
  <img
    alt="Developer"
    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-3xl"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
      Developer
    </p>

    <p className="text-xl font-bold text-white sm:text-2xl">{posts1[0]}</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
        {posts1[2]}
        </p>
      </div>
    </div>
  </div>
</Link>
</motion.div>  
<motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5}}
        >
    <Link href="/Article" className="group relative block bg-black rounded-3xl my-2 mx-4">
  <img
    alt="Developer"
    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50 rounded-3xl"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
      Developer
    </p>

    <p className="text-xl font-bold text-white sm:text-2xl">{posts2[0]}</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
        {posts2[2]}
        </p>
      </div>
    </div>
  </div>
</Link>
</motion.div>  
 







		</div>
	
	</div>
</section>
   </>:<Home/>
  );
}

