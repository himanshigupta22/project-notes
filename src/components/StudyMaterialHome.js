import { Link } from "react-router";
import StudyMaterialCards from "./StudyMaterialCards";
import Header from "./Header";

export default function StudyMaterialHome({ notes }) {
  return (
  <>
    <Header/>
    <div className="min-h-screen bg-blue-50 py-16 px-4">
      <h1 className="text-3xl font-bold text-center text-blue-900 mb-10">📚 Study Material</h1>
      <h3 className="text-center mb-10">
        <Link to="/addNotes" className="text-blue-600 hover:underline">Add Notes</Link>
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {notes.map((note) => (

          <StudyMaterialCards key={note.code} notesData={note}/>
          
        ))}
      </div>
    </div>
  </>
  );
}