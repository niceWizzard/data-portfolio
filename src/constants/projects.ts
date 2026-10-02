export interface Project {
    name: string;
    slug: string;
    description: string;
    longDescription: string;
    url?: string;
    githubUrl?: string;
    videoLink?: string;
    image?: string;
    images: string[];
    tags: string[];
    features: string[];
    techStack: { name: string; icon?: string }[];
}

export const PROJECT_LIST: Project[] = [
    {
        name: "Lakad",
        slug: "lakad-thesis",
        description: "A smart travel companion designed to simplify tourism in Bulacan through automated itinerary planning and route optimization.",
        longDescription: "Lakad is a cross-platform mobile application that removes the stress of travel planning. Built for the province of Bulacan, it leverages intelligent algorithms to generate personalized itineraries based on popular tourist spots. The app optimizes travel routes to ensure users spend less time in transit and more time exploring, all while providing a seamless UI powered by GluestackUI and a robust Supabase backend.",
        url: "https://github.com/niceWizzard/thesis-lakad-rn",
        image: "lakad.jpg",
        images: ["lakad.jpg"],
        tags: ["Thesis", "Mobile", "React Native", "Expo", "TypeScript"],
        videoLink: "https://www.youtube.com/watch?v=L0KH_t4deGQ",
        features: [
            "User Authentication",
            "Itinerary Generation",
            "Tourist Spot Recommendation",
            "User Management",
        ],
        techStack: [
            { name: "React Native / Expo" },
            { name: "Typescript" },
            { name: "Supabase" },
            { name: "GluestackUI" },
        ],
    },
    {
        name: "DocuQuery",
        slug: "docuquery",
        description: "An intelligent document RAG platform enabling semantic search and precise context retrieval across personal and enterprise files.",
        longDescription: "DocuQuery is an advanced retrieval-augmented generation (RAG) system designed to locate precise information across unstructured document collections. By leveraging high-dimensional vector embeddings, optical character recognition (OCR), and fast similarity search, DocuQuery allows users to ask natural language questions—such as 'Which document contains my email about Company B?'—and receive exact document matches and contextual summaries instantly.",
        features: [
            "RAG-Powered Semantic Search",
            "Multi-Format Document Ingestion",
            "OCR Text Extraction (PaddleOCR)",
            "Vector Embeddings & Context Retrieval",
            "Interactive Web Workspace"
        ],
        images: ["docuquery1.png", "docuquery2.png", "docuquery3.png", "docuquery4.png"],
        tags: [
            "Website",
            "Laravel",
            "React / Inertia",
            "PostgreSQL",
            "Qwen-Embedding",
            "FastAPI",
            "PaddleOCR"
        ],
        techStack: [
            { name: "Laravel / Inertia.js" },
            { name: "FastAPI / Python" },
            { name: "PaddleOCR & Qwen Embeddings" },
            { name: "PostgreSQL & Vector Store" }
        ],
        githubUrl: "https://github.com/niceWizzard/docuquery",
        image: "docuquery1.png",
        videoLink: "https://drive.google.com/drive/folders/1acmkxCZ8dSYiJtfpHKYh8igFJ50BzGUt?usp=drive_link"
    },
     {
        name: "ReviewTrail",
        slug: "reviewtrail",
        description: "A comprehensive study and exam preparation tracker designed to help learners manage review progress and study routines.",
        longDescription: "ReviewTrail is a modern productivity web application built to streamline exam preparation and study management. It empowers users to monitor their review progress systematically, customize tracking systems to match their study style, and utilize a template hub tailored for various examinations.",
        url: "https://reviewtrail.vercel.app",
        image: "reviewtrail1.png",
        images: ["reviewtrail1.png", "reviewtrail2.png", "reviewtrail3.png", "reviewtrail4.png"],
        tags: ["Website", "NextJS", "TypeScript", "Productivity"],
        features: [
            "Review Progress Tracking",
            "Template Hub for Different Exams",
            "Tracker Customization",
        ],
        techStack: [
            { name: "Next.js" },
            { name: "TypeScript" },
            { name: "Tailwind CSS" },
        ],
    },
    {
        name: "Karaokie",
        slug: "karaokie",
        description: "A karaoke web application that allows users to sing along to their favorite songs using youtube videos.",
        longDescription: "Karaokie is a web application that transforms YouTube videos into karaoke experiences. It is designed to be accessible without requiring user login, making it easy for anyone to enjoy karaoke sessions.",
        githubUrl: "https://github.com/niceWizzard/karaokie",
        features: [
            "Song Queuing",
            "Hosting and Joining Party Rooms",
            "YouTube Video Songs Integration",
            "No Login Required",
        ],
        images: ["karaokie1.png", "karaokie2.png", "karaokie3.png", "karaokie4.png", "karaokie5.png", "karaokie6.png"],
        tags: ["Website", "Fullstack"],
        techStack: [
            {name: "Laravel"},
            {name: "React"},
            {name: "Inertia.js"},
        ],
        image: "karaokie1.png",
        videoLink: "https://drive.google.com/drive/folders/1AeiYeiqgWqshaNvTZd8PqvJXXcCXPHUf?usp=sharing",
    },
    {
        name: "Biyaheng Tipid",
        slug: "biyaheng-tipid",
        description: "A smart travel planner designed to help travelers save money and time by providing optimized itineraries and cost-effective travel options.",
        longDescription: "Biyaheng Tipid is a web application that serves as a comprehensive travel companion for budget-conscious travelers. It utilizes advanced algorithms to generate optimized itineraries, ensuring users can explore destinations efficiently while minimizing expenses. The platform integrates data on tourist attractions, providing users with cost-effective travel options and personalized recommendations.",
        url: "https://biyahengtipid.vercel.app/",
        image: "biyaheng_tipid.png",
        images: ["biyaheng_tipid.png", "biyaheng_tipid2.png", "biyaheng_tipid3.png"],
        tags: ["Website", "NextJS", "Typescript", "Fullstack"],
        features: [
            "Optimized Itinerary Generation",
            "Cost-effective Travel Recommendations",
            "Effective Data Integration",
        ],
        techStack: [
            { name: "Next.js" },
            { name: "Tailwind"},
        ]
    },
    {
        name: "Forum Post",
        slug: "forum-post",
        description: "A simple forum website for sharing to the community! Similar to reddit.",
        longDescription: "Forum Post is a modern, responsive web application built to facilitate community discussions. Inspired by platforms like Reddit, it allows users to create posts, comment on discussions, and engage with a global audience. The project focuses on clean architecture, immediate notifications, and a seamless user experience across all devices.",
        url: "http://forum-post.vercel.app/",
        image: "forum_post1.png",
        images: ["forum_post1.png", "forum_post2.png", "forum_post3.png", "forum_post4.png"],
        tags: ["Website", "NextJS", "Typescript", "Fullstack"],
        features: [
            "User Authentication and Profiles",
            "Fast Post Creation and Commenting",
            "Upvoting and Downvoting System",
            "Category-based Tagging and Filtering",
            "Responsive Modern UI with Dark Mode support"
        ],
        techStack: [
            { name: "Next.js" },
            { name: "React" },
            { name: "TypeScript" },
            { name: "Tailwind CSS" },
            { name: "Prisma" },
            { name: "PostgreSQL" }
        ]
    },
    {
        name: "Event Registration",
        slug: "event-registration",
        description: "A simple event registration website for registering events and attendees.",
        longDescription: "Event Registration is a streamlined web application designed to simplify the process of event management. It allows organizers to create events, manage attendee registrations, and track participation efficiently. The platform emphasizes user-friendly interfaces, updates, and secure data handling to ensure a smooth experience for both organizers and participants.",
        image: "event-registration1.png",
        images: ["event-registration1.png", "event-registration2.png", "event-registration3.png", "event-registration4.png"],
        features: [
            "Event Creation and Management",
            "Attendee Registration and Tracking",
            "QR Code Generation for Event Check-ins",
            "Responsive Design for Mobile and Desktop"
        ],
        tags: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        techStack: [
            { name: "Laravel" },
            { name: "PHP" },
            { name: "MySQL" },
            { name: "Bootstrap" }
        ],
    },
    {
        name: "Zombrawl.io",
        slug: "zombrawl",
        description: "A 2d topdown survival shooting game. ",
        longDescription: "Zombrawl.io is an action-packed, top-down survival shooter developed using the Godot Engine. Players must navigate through waves of increasingly difficult zombies, collecting power-ups and upgrading their arsenal to survive as long as possible. The game features fast-paced combat, custom particle effects, and an engaging high-score system.",
        url: "https://coderrm23.itch.io/zombrawlio",
        image: "zombrawl_pic.png",
        images: ["zombrawl_pic.png"],
        tags: ["Game", "Godot Engine"],
        features: [
            "Fluid top-down character movement and aiming",
            "Dynamic wave-based enemy spawning system",
            "Multiple weapon types with unique behaviors",
            "Experience and Level-up progression system",
            "High-quality 2D sprites and custom visual effects"
        ],
        techStack: [
            { name: "Godot Engine" },
            { name: "GDScript" },
            { name: "Aseprite (Pixel Art)" },
            { name: "Itch.io Distribution" }
        ]
    }

]