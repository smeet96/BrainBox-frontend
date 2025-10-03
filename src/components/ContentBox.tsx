import axios from "axios"
import { useEffect } from "react"


const ContentBox =  () => {
useEffect(()=> {
 const items = axios.get("http://localhost:3000/api/v1/content/get").then((items) => {console.log(items)})
 
},[ContentBox])



return (
    <div className="bg-gray-50 flex justify-center w-screen h-screen">
        <div className="flex items-center h-screen">
        <div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
 <div className="px-6 py-4">
   <div className="font-bold text-xl mb-2">Card Title</div>
   <p className="text-gray-700 text-base">
     This is a simple card example created using Tailwind CSS
   </p>
 </div>
 <div className="px-6 pt-4 pb-2">
   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag1</span>
   <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#tag2</span>
 </div>
</div>

        </div>   
        </div>
    </div>
)
}

export default ContentBox