import { FiCheckCircle } from "react-icons/fi/index";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateDayStatus } from "../Redux/updateHabitSlice";
// import { State } from "../redux/types";

interface IProps {
  habitTitle: string;
  habitDescription: string;
  id: number;
}

// This components take the props as IProps and display the habit.
export default function Task({
  habitTitle,
  habitDescription,
  id,
}: IProps) {
  const navigate = useNavigate();

  return (
    // It only shows the habit title and description and clicking on that habit it will redirect to the habit page where you can view the history of that particular habit.
    <div
      className="flex items-center gap-5 mt-2 hover:bg-slate-300 hover:border p-2 cursor-pointer"
      onClick={() => {
        navigate(`/history/${id}`);
      }}
    >

      <div className="flex flex-col">
        <span className="text-base font-bold text-black">{habitTitle}</span>
        <span className="text-xs font-normal text-slate-500">
          {habitDescription}
        </span>
      </div>
    </div>
  );
}
