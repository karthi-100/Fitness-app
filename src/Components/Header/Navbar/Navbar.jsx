import { Link } from "react-router-dom"

const Navbar =()=>{
    return( 
        <div className="sticky top-0 left-0 right-0 p-6 flex justify-between ">
            <div className="text-2xl text-white ">Fitness</div>
            <div className="text-l flex justify-between self-end">
                <div className="mx-5 hover:scale-125 duration-100 ease-in-out">
                <Link to="/">Home</Link></div>
                <div className="mx-5 hover:scale-125 duration-100 ease-in-out">
                <Link to='/exercise'>Exercise</Link></div>
            </div>
        </div>
    )
}
export default Navbar