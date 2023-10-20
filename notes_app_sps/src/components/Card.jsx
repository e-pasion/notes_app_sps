import { NavLink } from "react-router-dom";

function Card({note,onDelete}) {



    function calculateTime(date) {
        const currentDate = new Date();
        const targetDate = new Date(date);
        const differenceInMilliseconds = currentDate - targetDate;
        let seconds = Math.floor(differenceInMilliseconds / 1000);
        const negative = (seconds<0)?true:false;
        seconds=Math.abs(seconds);
        let time=0;
        let sufix;

        if (seconds < 60) {
            time=seconds;
            sufix=`second${(time>1)?'s':''}`
        } else if (seconds < 3600) {
                time=seconds/60
                sufix=`minute${(time>1)?'s':''}`
          } else if (seconds < 86400) {
                time=seconds/3600
                sufix=`hour${(time>1)?'s':''}`
            } else if (seconds < 604800) {
                time=seconds/86400
                sufix=`day${(time>1)?'s':''}`
          } else if (seconds < 2419200) {
                time=seconds/604800
                sufix=`week${(time>1)?'s':''}`
          }  else if (seconds < 29030400) {
            time=seconds/2419200
            sufix=`month${(time>1)?'s':''}`
          } else {
            time=seconds/29030400
            sufix=`year${(time>1)?'s':''}`
          }

        if(negative) return `in ${time.toFixed(1)} ${sufix}`
        return `${time.toFixed(1)} ${sufix} ago`;
      }


  return (
    <div className="w-80 h-80 rounded-md bg-gray-100">
        <div className="p-3 flex justify-between">
            <p className="font-semibold">{note.title}</p>
            <NavLink to={'/notes/'+note._id} className="bg-gray-600 text-white px-3 py-2">Edit</NavLink>
        </div>
        <div className="bg-white h-48 border-y-2 px-3 py-4 space-y-4">
            <p>{note.content}</p>
            <p>{note.user.name}</p>
            <p>{calculateTime(note.date)}</p>
        </div>
        <div className="p-3">
        <button onClick={()=> onDelete(note._id)} className="bg-red-600 text-white px-3 py-2">Delete</button>
        </div>

    </div>
  )
}
export default Card