import { useEffect, useState } from "react"
// import ContentBox from "../components/ContentBox";
import axios from "axios";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

interface ContentItem {
  id: number;
  title: string;
  description: string;
  date: string;
  category: any[];
}


const Dasboard = () => {
  const navigate = useNavigate()
  const [content , setContent] =  useState<ContentItem[]>([])
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    
axios.get("http://localhost:3000/api/v1/content/get", {
  headers: {
    Authorization: `Bearer ${token}`,  
    "Content-Type": "application/json"
  },
}).then((response)=> {setContent(response.data)})
  }, [Dasboard]);

  return (
    <div className="bg-gray-50 ">
      <div className="ml-450 ">
        <Button
        placeholder="LogOut"
        onClick={() => {
          localStorage.removeItem("token");
        }}
      />

      <Button placeholder="add content" onClick={()=>{navigate("/create")}}/> 
      </div>
      
<div className="bg-gray-50 flex justify-center w-screen h-screen">
      <div className="flex items-center h-screen">
        <div>
          {content.length === 0 ? (
            <p>No content to show</p>
          ) : (
            content.map((item) => (
              <div
                key={item.id}
                className="max-w-sm rounded overflow-hidden shadow-lg bg-white mb-4"
              >
            
                <div className="flex justify-end hover:cursor-pointer">

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

                <svg  onClick={async() => {
                   axios.delete(`http://localhost:3000/api/v1/content/delete/${item.id}`,{
                    headers :{
                      Authorization : `Bearer ${localStorage.getItem("token")}`,
                      "Content-Type" : "application/json",
                    },
                    
                   })
                }}  xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

                </div>
                

                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base">{item.description}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(item.date).toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-400">
                    Categories: {item.category.map(cat => {return cat.type}).join(", ")}
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  {item.category &&
                    item.category.map((cat, id) => (
                      <span
                        key={id}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                      >
                        #{cat.type}
                      </span>
                    ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Dasboard