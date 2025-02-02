
import DiamondIcon from '@mui/icons-material/Diamond';
const UserCard = ({}: { type: string }) => {
    return (
        <div className="rounded-2xl bg-CARD p-4 flex-1 ml-2 min-w-[130px] min-h-[100px] shadow-lg">
        <div className="flex items-center gap-4"> 
          <DiamondIcon 
            className="text-black p-4 rounded-full h-16 w-16" 
            style={{ background: "linear-gradient(90deg, #97ABFF, #123597)" }} 
          />
          <h1 className="text-sm text-gray-400">Lorem ipsum dolor sit amet</h1>
        </div>

        <h1 className=' flex justify-end text-sm text-gray-400 mt-3 '>10.29%</h1>
      </div>
      
    )
}

export default UserCard