
import Cards from './Cards';
import { Subjects, notes } from './Dummy';
import Header from './Header';
// import { lightColors } from "./Dummy";

export default function Items() {
    return (
        <>
           <Header></Header>
            <h1 className=" text-4xl font-bold text-center  my-8">📘 Study Material</h1>
            <div className='flex justify-center '>
                <div  className='w-6xl m-auto'>
                    <div className='flex flex-wrap'  >
                        {
                        notes?.map((value,index) => {
                            return (
                                <div key={value.code} className={`${value.color} w-72 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-450 m-10`}>
                                    <Cards
                                        name={value.title}
                                        code={value.code}
                                        title={value.title}
                                        teacher={value.teacherName}
                                        uploadedBy={value.uploadedBy}
                                        content={value.content}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
// notes
//             title: "Math Notes",
//             code: "MATH101",
//             teacherName: "Prof. Sharma",
//             uploadedBy: "Ankit",
//             content: "Calculus: derivatives and integrals.",
//             color: "bg-green-100"

{/* <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
                {
                    // console.log(Subjects[0])
                    Subjects.map((value, index) => {
                        return (
                            <Cards name={value.name} bgc={lightColors[index]} code={value.code} credits={value.credits} teacher={value.teacher} key={index} />
                        );
                    })
                }
            </div> */}