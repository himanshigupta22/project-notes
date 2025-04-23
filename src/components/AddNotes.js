import { useState } from "react";
import Header from "./Header";


export default function AddNotes({ notes, setNotes }) {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [uploadedBy, setUploadedBy] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);

  const handleAddNote = () => {
    if (title && content && code && teacherName && uploadedBy) {
      const newNote = { title, content, code, teacherName, uploadedBy, file };
      setNotes([...notes, newNote]);

      setTitle("");
      setContent("");
      setCode("");
      setUploadedBy("");
      setTeacherName("");
      setFile(null);
    }
  };

 
    return (
      <>
      <Header/>
      <div className=" bg-gray-50 p-6">
        <div className="max-w-2xl mx-auto mt-[70px] bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Add Note</h1>
  
          <input
            type="text"
            placeholder="Title"
            className="w-full border p-2 mb-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
  
          <input
            type="text"
            placeholder="Code"
            className="w-full border p-2 mb-2 rounded"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
  
          <input
            type="text"
            placeholder="Teacher Name"
            className="w-full border p-2 mb-2 rounded"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Uploaded By"
            className="w-full border p-2 mb-2 rounded"
            value={uploadedBy}
            onChange={(e) => setUploadedBy(e.target.value)}
          />
  
          <textarea
            placeholder="Content"
            className="w-full border p-2 mb-2 rounded"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
  
          <input
            type="file"
            accept="application/pdf"
            className="w-full border p-2 mb-6 rounded"
            onChange={(e) => setFile(e.target.files[0])}
          />
  
          <button
            onClick={handleAddNote}
            className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900"
          >
            Add Note
          </button>
    
        </div>
     </div>
    </>
    );
}
