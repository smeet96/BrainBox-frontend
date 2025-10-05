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