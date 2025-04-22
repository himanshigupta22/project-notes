import { Link } from "react-router";
import SubjectCard from "./SubjectCard";
const Body = () => {
    const subjectData = [
      {
       title: "DWDM",
       code: "3301",
       subject: "Data Warehouse & Data Mining",
       teacher: "Mr. Diwakar Tripathi",
       bgColor: "bg-purple-300"
      },
      {
        title: "AI",
        code: "3302",
        subject: "Artificial Intelligence",
        teacher: "Ms.Gopa mam",
        bgColor: "bg-blue-400"
      },
      {
        title: "FL&AT",
        code: "3303",
        subject: "Finite Language & Automata Theory",
        teacher: "Mr. Mayukh Sir",
        bgColor: "bg-red-400"
      },
      {
        title: "SE",
        code: "3304",
        subject: "Software Engineering",
        teacher: "Ms. Shuchismita Mahato",
        bgColor: "bg-pink-400"
      },
      {
        title: "IWT",
        code: "3305",
        subject: "Internet & Web Technology",
        teacher: "Mr. Rakesh Kumar",
        bgColor: "bg-green-400"
      }
    ]
    return(
      <div className="w-9/12 m-auto">
        <div className="flex items-center justify-center">
           <h1 className="text-5xl text-center m-10">Welcome to MCA notes site</h1>
           <img src="https://cdn-icons-png.flaticon.com/128/4854/4854268.png" className="w-12 h-12 mt-2"/>
        </div>
    
        <div className="flex flex-wrap">
          {
            subjectData.map((item) => (
                <SubjectCard key={item.code} subData={item} />
            ))
          }
        </div>
      </div>
    )
}

export default Body;