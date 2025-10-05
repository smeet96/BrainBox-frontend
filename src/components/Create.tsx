import axios from "axios"
import { useState } from "react"

const Create = () => {
    const [title , setTitle] = useState("")
    const [description , setDescription] = useState("")
    const [type , setType] = useState("")
    const token = localStorage.getItem("token")
console.log(token)
const Payload = {
    title,
    description,
     category: [
    { type }
  ],
}

return (
    <div className="pt-50 ">

    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">

 <div className="mb-4">
   <label  className="block text-gray-700 text-sm font-bold mb-2">Title</label>
   <input
     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
     placeholder="Enter your title"
     onChange={(e)=> {
        setTitle(e.target.value)
     }}
   />
 </div>

 <div className="mb-4">
   <label  className="block text-gray-700 text-sm font-bold mb-2">Type</label>
   <input
     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
     placeholder="document, tweet, video, Link"
     onChange={(e)=> {
        setType(e.target.value)
     }}
   />
 </div>
 
 <div className="mb-6">
   <label  className="block text-gray-700 text-sm font-bold mb-2">Description</label>
   <input
     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
     placeholder="Enter your description"
     onChange={(e)=> {
        setDescription(e.target.value)
     }}
   ></input>
 </div>
 <button
   className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
   onClick={async ()=> {
  await  axios.post("http://localhost:3000/api/v1/content/create",
    Payload,
    {
      headers : {
        Authorization : `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
   }}
 >
   Create
 </button>
</div>
    </div>
)
}

export default Create