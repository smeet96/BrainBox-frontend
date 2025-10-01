import axios from "axios"
import Button from "../components/Button"
import Input from "../components/Input"
import { useState } from "react"



const Signup = () => {
    const [name , Setname] = useState("")
    const [email , Setemail] = useState("")
    const [password , Setpassword] = useState("")
    return (
        <div className="bg-violet-950 h-screen w-screen">
        <div className="max-w-sm mx-auto pt-66">
       <Input label="Your Name" placeholder="John" type="text" onChange={(e)=> {Setname(e.target.value)}}/> 
       <Input label="Your Email" placeholder="John@gmail.com" type="email" onChange={(e)=> {Setemail(e.target.value)}} /> 
       <Input label="Password" placeholder="1234567" type="password" onChange={(e)=> {Setpassword(e.target.value)}}/> 
       <Button placeholder="Signup" onClick={async()=> {
        await axios.post("http://localhost:3000/api/v1/user/signup",{
         name,
         email,
         password}
        )
       }}/>
        </div>
        </div>
    )
}

export default Signup