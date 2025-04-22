import { useState } from "react"; 

export const Subjects = [
    {
      name: "Mathematics",
      code: "MATH101",
      description: "Covers algebra, calculus, and statistics fundamentals.",
      credits: 4,
      teacher: "Amit Sharma",
      // image: "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
    },
    {
      name: "English Literature",
      code: "ENG102",
      description: "Explores classic and modern literary works and grammar.",
      credits: 3,
      teacher: "Sonia Verma",
      // image: "https://cdn-icons-png.flaticon.com/512/1086/1086933.png"
    },
    {
      name: "Physics",
      code: "PHY201",
      description: "Mechanics, optics, electromagnetism and modern physics.",
      credits: 4,
      teacher: "Rakesh Mehta",
      // image: "https://cdn-icons-png.flaticon.com/512/2724/2724606.png"
    },
    {
      name: "Computer Science",
      code: "CS301",
      description: "Programming, data structures, algorithms and web dev.",
      credits: 5,
      teacher: "Neha Singh",
      // image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
    },
    {
      name: "History",
      code: "HIS210",
      description: "World history, Indian freedom struggle and civilization.",
      credits: 3,
      teacher: "Anil Kapoor",
      // image: "https://cdn-icons-png.flaticon.com/512/1172/1172042.png"
    },
    {
      name: "Chemistry",
      code: "CHEM110",
      description: "Organic, inorganic and physical chemistry principles.",
      credits: 4,
      teacher: "Dr. Kavita Joshi",
      // image: "https://cdn-icons-png.flaticon.com/512/2885/2885439.png"
    },
    {
      name: "Biology",
      code: "BIO150",
      description: "Cell biology, genetics, evolution and human anatomy.",
      credits: 4,
      teacher: "Rahul Menon",
      // image: "https://cdn-icons-png.flaticon.com/512/4243/4243712.png"
    },
    {
      name: "Economics",
      code: "ECO220",
      description: "Microeconomics, macroeconomics and policy making.",
      credits: 3,
      teacher: "Priya Nair",
      // image: "https://cdn-icons-png.flaticon.com/512/3011/3011270.png"
    },
    {
      name: "Political Science",
      code: "POL330",
      description: "Governance, constitution, politics and international relations.",
      credits: 3,
      teacher: "Abhishek Das",
      // image: "https://cdn-icons-png.flaticon.com/512/2586/2586493.png"
    },
    {
      name: "Philosophy",
      code: "PHIL101",
      description: "Ethics, logic, Indian and Western philosophies.",
      credits: 2,
      teacher: "Dr. Meera Rao",
      // image: "https://cdn-icons-png.flaticon.com/512/456/456212.png"
    },
    {
      name: "Environmental Science",
      code: "ENV180",
      description: "Ecosystems, biodiversity, sustainability and climate change.",
      credits: 2,
      teacher: "Sunil Bhatt",
      // image: "https://cdn-icons-png.flaticon.com/512/1866/1866069.png"
    },
    {
      name: "Psychology",
      code: "PSY210",
      description: "Human behavior, cognitive and developmental psychology.",
      credits: 3,
      teacher: "Ananya Rao",
      // image: "https://cdn-icons-png.flaticon.com/512/3032/3032936.png"
    },
    {
      name: "Business Studies",
      code: "BUS101",
      description: "Management, finance, entrepreneurship and marketing.",
      credits: 3,
      teacher: "Rohan Gupta",
      // image: "https://cdn-icons-png.flaticon.com/512/1903/1903162.png"
    },
    {
      name: "Geography",
      code: "GEO201",
      description: "Physical geography, maps, population and climate zones.",
      credits: 3,
      teacher: "Namita Kulkarni",
      // image: "https://cdn-icons-png.flaticon.com/512/2590/2590513.png"
    },
    {
      name: "Statistics",
      code: "STAT220",
      description: "Probability, sampling, hypothesis testing and regression.",
      credits: 4,
      teacher: "Dr. Arjun Patel",
      // image: "https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
    }
  ];
   
export const Teachers = [
    {
        name: "Amit Sharma",
        subject: "Mathematics",
        yearsOfExperience: 8,
        relevantInfo: "Specializes in calculus and competitive exam preparation"
    },
    {
        name: "Sonia Verma",
        subject: "English",
        yearsOfExperience: 5,
        relevantInfo: "Expert in literature and grammar, IELTS coach"
    },
    {
        name: "Rakesh Mehta",
        subject: "Physics",
        yearsOfExperience: 10,
        relevantInfo: "Former IIT professor, focuses on conceptual clarity"
    },
    {
        name: "Neha Singh",
        subject: "Computer Science",
        yearsOfExperience: 6,
        relevantInfo: "Experienced in Java, Python, and front-end development"
    },
    {
        name: "Anil Kapoor",
        subject: "History",
        yearsOfExperience: 7,
        relevantInfo: "Focuses on Indian and World History for UPSC aspirants"
    }
];

export const lightColors = [
  { name: "Light Pink", hex: "#FFB6C1" },
  { name: "Light Coral", hex: "#F08080" },
  { name: "Light Salmon", hex: "#FFA07A" },
  { name: "Light Yellow", hex: "#FFFFE0" },
  { name: "Light Green", hex: "#90EE90" },
  { name: "Light Sky Blue", hex: "#87CEFA" },
  { name: "Light Blue", hex: "#ADD8E6" },
  { name: "Light Cyan", hex: "#E0FFFF" },
  { name: "Light Goldenrod Yellow", hex: "#FAFAD2" },
  { name: "Light Gray", hex: "#D3D3D3" },
  { name: "Lavender", hex: "#E6E6FA" },
  { name: "Misty Rose", hex: "#FFE4E1" },
  { name: "Pale Turquoise", hex: "#AFEEEE" },
  { name: "Honeydew", hex: "#F0FFF0" },
  { name: "Mint Cream", hex: "#F5FFFA" }
];

 export const notes = [
        {
            title: "Math Notes",
            code: "MATH101",
            teacherName: "Prof. Sharma",
            uploadedBy: "Ankit",
            content: "Calculus: derivatives and integrals.",
            color: "bg-green-100"
        },
        {
            title: "Physics Notes",
            code: "PHY102",
            teacherName: "Dr. Verma",
            uploadedBy: "Riya",
            content: "Newton's laws, motion, gravity.",
            color: "bg-blue-200"
        },
        {
            title: "Chemistry Notes",
            code: "CHEM103",
            teacherName: "Dr. Rao",
            uploadedBy: "Mohit",
            content: "Reactions, periodic table.",
            color: "bg-purple-100"
        },
        {
            title: "Biology Notes",
            code: "BIO104",
            teacherName: "Ms. Singh",
            uploadedBy: "Sanya",
            content: "Cells & human anatomy.",
            color: "bg-pink-100"
        },
        {
            title: "Computer Science",
            code: "CS105",
            teacherName: "Mr. Agarwal",
            uploadedBy: "Aarav",
            content: "Programming & algorithms.",
            color: "bg-yellow-100"
        },
        {
            title: "English Literature",
            code: "ENG106",
            teacherName: "Mrs. Dey",
            uploadedBy: "Kavya",
            content: "Poetry, prose, and drama notes.",
            color: "bg-indigo-100"
        }
    ];

