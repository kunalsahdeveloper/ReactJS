
import { useNavigate } from "react-router-dom"

export default function Home(){

    const navigate = useNavigate()
    function gotoabout(){
        navigate('/about')
    }

    return (
        <>
            <h2>Welcome to Home page</h2>
            <button onClick={gotoabout}>Goto About</button>
        </>
    )
}