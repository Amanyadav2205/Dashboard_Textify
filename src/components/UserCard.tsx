
import DiamondIcon from '@mui/icons-material/Diamond';
const UserCard = ({}: { type: string }) => {
  
    return (
        <div className="rounded-lg bg-CARD px-4 pt-4 flex-1 ml-2 min-w-[130px] min-h-[100px] shadow-lg">
        <div className="flex items-center gap-4 "> 
          <div className='bg-[linear-gradient(360deg,#97ABFF,#123597)] p-2 rounded-full'>
          <DiamondIcon className='text-white'/></div>
          <h1 className="text-sm text-gray-500">Lorem ipsum dolor sit amet</h1>
        </div>

        <h1 className=' flex justify-end text-sm text-gray-400 mt-3 '>10.29%</h1>
      </div>
      
    )
}

export default UserCard