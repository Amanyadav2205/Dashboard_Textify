import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const Navbar = () =>{
    return (
        <div className="flex items-center justify-between p-4"> 
        {/* Search Bar*/}
        <div className="md:flex hidden items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 ml-2">
            <span className='text-black'><SearchIcon/></span>
            <input type="text" placeholder='Search..' className='w-[200px] p-2 bg-transparent outline-none'/>
        </div>
        {/* iCONS */}
        <div className='flex items-center gap-6 justify-end w-full'>
            <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center'>
            <span><EmailIcon/></span>
            </div>
            <div className='flex flex-col'>
                <span className='text-xs leading-3 font-medium text-gray-500'>John Doe</span>
                <span className='text-[10px] text-gray-500 text-right' >UI/UX Developer</span>
            </div>
            <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
            
        </div>
        </div>
    )
}

export default Navbar