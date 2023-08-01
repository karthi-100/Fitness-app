import { Box } from "@mui/material"
import Banner from "./Banner/Banner"
import SearchExercise from "./SearchExercise/SearchExercise"
import Exercise from "../Exercise/Exercise"

const Home=()=>{
return(
    <Box>
        <Banner />
        <SearchExercise />
        <Exercise />
    </Box>
)
}
export default Home