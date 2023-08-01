import { Link } from "react-router-dom"
import { Stack } from "@mui/material"
import FitLogo from '../Assets/FitLogo.png'
const Navbar =()=>{
    return( 
        <Stack direction="row" alignItems={"flex-end"} justifyContent='space-around' marginTop='2rem'>
            <Link to="/">
            <img src={FitLogo} alt="Sorry" style={{ width: '3rem', }}/>
            </Link>
            <Stack>I FITNESS</Stack>
            <Stack  direction="row" gap='3rem'>
                <Link to="/" style={{textDecoration:'none',color:'#000'}} >Home</Link>
                <Link to="/exercise" style={{textDecoration:'none',color:'#000'}}>Exercise</Link>

            </Stack>
        </Stack>
    )
}
export default Navbar