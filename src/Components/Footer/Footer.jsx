import Instagram from '../Assets/Instagram.svg'
import Facebook from '../Assets/Facebook.svg'
import Twitter from '../Assets/Twitter.svg'
const Footer=()=>{
    return(
        <div className='p-10'>
        <div className="font-bold flex justify-around h-[30%] ">
            <div className="w-[40%]">
                <div className="text-black">Fitness Gym</div>
                <div className='font-normal text-justify'>A gym is a large room, usually containing special equipment, where people go to do physical exercise and get fit. The gym has exercise bikes and running machines. While some guests play golf, others work out in the hotel gym. The large gym offers a variety of exercise equipment and weights going up to 100 pounds.</div>
            </div>
            <div className='w-[40%] font-bold'>
                <div className="text-black font-normal">About</div>
                <div className='text-black font-normal'>Address:&nbsp;<span>97 pension line north street</span></div>
                <div className='text-black font-normal'>Phone No: &nbsp;<span>8825929169</span></div>
            </div>
            
        </div>
        <div className='flex w-full justify-center gap-8'>
        <img src={Instagram} alt="" className='w-6 hover:scale-[120%] ease-in-out duration-300 '/>
        <img src={Facebook} alt="" className='w-6 hover:scale-[120%] ease-in-out duration-300'/>
        <img src={Twitter} alt="" className='w-6 hover:scale-[120%] ease-in-out duration-300'/>
    </div>
    </div>
    )
}

export default Footer