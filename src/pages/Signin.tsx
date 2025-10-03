import { useState } from "react"
import Button from "../components/Button"
import Input from "../components/Input"
import axios from "axios"
import { useNavigate } from "react-router-dom"



const Signin = () => {
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const navigate = useNavigate()

    return (
        <div className="bg-violet-950 h-screen w-screen pt-66">
        <div className="max-w-sm mx-auto">
        <Input label="Your email" placeholder="john@gmail.com" type="email" onChange={(e)=> {setEmail(e.target.value)}} /> 
        <Input label="Password" placeholder="1234567" type="password" onChange={(e)=> {setPassword(e.target.value)}}/>
        <Button placeholder="Signin" onClick={async() => {
           try {
            const signin = await axios.post("http://localhost:3000/api/v1/user/signin",{
                  email,
                  password
                   }               
               )
               localStorage.setItem("token" , signin.data.token)
           } catch (error) {
           return console.log("internal error")
           } 
    navigate("/dashboard")
        }}/> 
        </div>
        </div>
    )
}

export default Signin