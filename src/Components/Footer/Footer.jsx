import Instagram from '../Assets/Instagram.svg'
import Facebook from '../Assets/Facebook.svg'
import Twitter from '../Assets/Twitter.svg'
import FooterImage from '../Assets/FooterImage.jpg'
const Footer=()=>{
    return(
        <div className='p-10'>
        <div className="font-bold flex justify-around h-[30%] ">
            <div className="w-[40%]">
                <div className="text-black">Fitness Gym</div>
                <img src={FooterImage} alt="footer image" className='bg-clip-content w-[6rem] my-5' />
            </div>
            <div className='w-[40%] font-bold'>
                <div className="text-black font-bold">About</div>
                <div className='text-black font-normal'>Address:&nbsp;<span>97 pension line north street</span></div>
                <div className='text-black font-normal'>Phone No: &nbsp;<span>8825929169</span></div>
            </div>
            
        </div>
        <div className='flex w-full justify-center gap-8 p-5'>
        <img src={Instagram} alt="" className='w-6 cursor-pointer hover:scale-[120%] ease-in-out duration-300 '/>
        <img src={Facebook} alt="" className='w-6 cursor-pointer hover:scale-[120%] ease-in-out duration-300'/>
        <img src={Twitter} alt="" className='w-6 cursor-pointer hover:scale-[120%] ease-in-out duration-300'/>
    </div>
    </div>
    )
}

export default Footer