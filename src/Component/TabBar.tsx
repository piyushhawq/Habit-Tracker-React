import "./Component.scss"
import {AiFillHome, AiOutlineHistory } from 'react-icons/ai';
import { BsFillPlusCircleFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
export default function TabBar() {
  const navigate = useNavigate();
  return (
    // This component is used for navigating to, homepage, add new page and habits page.
    <div className='tab-bar'>
      <AiFillHome className="text-blue-400 text-3xl cursor-pointer"  onClick={() => navigate("/")}/>
     < BsFillPlusCircleFill className="text-blue-400 text-5xl -mt-6 cursor-pointer" onClick={() => navigate("/add-new")} />
      <AiOutlineHistory className="text-blue-400 text-3xl cursor-pointer" onClick={() => navigate("/all-history")}/>
    </div>
  )
}
