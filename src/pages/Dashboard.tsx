import { useEffect} from "react"
import ContentBox from "../components/ContentBox";
import axios from "axios";



const Dasboard = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    
axios.get("http://localhost:3000/api/v1/content/get", {
  headers: {
    Authorization: `Bearer ${token}`,  
  },
}).then((auth)=> {console.log(auth)})
  }, [Dasboard]);
return (
  <div>
    Heloo from chai aur code 
  <ContentBox />
  </div>
)
}

export default Dasboard