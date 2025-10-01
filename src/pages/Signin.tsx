import Button from "../components/Button"
import Input from "../components/Input"

const Signin = () => {
    return (
        <div className="bg-violet-950 h-screen w-screen pt-66">
        <form className="max-w-sm mx-auto">
        <Input label="Your email" placeholder="john@gmail.com" type="email" onChange={(e)=> {console.log(e.target.value)}} /> 
        <Input label="Password" placeholder="1234567" type="password" onChange={(e)=> {console.log(e.target.value)}}/>
        <Button placeholder="Signin" onClick={async() => { await console.log("axios.post")}}/> 
        </form>
        </div>
    )
}

export default Signin