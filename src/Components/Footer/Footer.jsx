import Instagram from '../Assets/Instagram.svg'
import Facebook from '../Assets/Facebook.svg'
import Twitter from '../Assets/Twitter.svg'
const Footer=()=>{
    return(
        <div className="font-bold flex justify-between px-10 pt-10 ">
            <div className="">
                <div className="text-black">Company</div>
                <div></div>
            </div>
            <div>
                <div className="text-black">About</div>
                <div></div>
            </div>
            <div className='flex-col gap-2'>
                <img src={Instagram} alt="" className='w-5' />
                <img src={Facebook} alt=""/>
                <img src={Twitter} alt="" />
            </div>
        </div>
    )
}

export default Footer