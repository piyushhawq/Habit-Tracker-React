import "./Component.scss";
import { BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import { GrSubtractCircle } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { updateDayStatus } from "../Redux/updateHabitSlice";
interface IProps {
  day: string;
  habitStatus: "done" | "not-done" | "none";
  handleChange?: (status: "done" | "not-done" | "none") => void;
  id: number;
  index: number;
}
//  This components take the props as IProps and display the habit History card.
export default function HabitHistoryCard({
  day,
  habitStatus,
  id,
  index,
}: IProps) {
  const dispatch = useDispatch();

  return (
    <div className="day-history mr-2">
      <span>{day}</span>
      <div className="flex justify-between">
        {/* BsHandThumbsUpFill  icon will change the status to be done */}
        <div
          className={`status mr-2  text-xl ${
            habitStatus === "done" ? "active text-green-500" : "text-slate-200"
          } cursor-pointer`}
          onClick={() => {
          dispatch(
            updateDayStatus({
              id: id,
              index: index,
              status: "done",
            })
            )
        }
         }
        >
          {" "}
          <BsHandThumbsUpFill />
        </div>

        {/* BsHandThumbsDownFill  icon will change the status to be not-done */}
        <div
          className={`status mr-2  text-xl ${
            habitStatus === "not-done"
              ? "active text-red-500"
              : "text-slate-200"
          } cursor-pointer`}
          onClick={() => {
            dispatch(
              updateDayStatus({
                id: id,
                index: index,
                status: "not-done",
              })
              )
          }
           }
        >
          <BsHandThumbsDownFill />
        </div>
                {/* GrSubtractCircle  icon will change the status to be none */}

        <div
          className={`status  text-xl ${
            habitStatus === "none" ? "active text-slate-500" : " text-slate-200"
          } cursor-pointer`}
          onClick={() => {
            dispatch(
              updateDayStatus({
                id: id,
                index: index,
                status: "none",
              })
              )
          }
           }
        >
          {" "}
          <GrSubtractCircle />{" "}
        </div>
      </div>
    </div>
  );
}
