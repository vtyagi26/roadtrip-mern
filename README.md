# Road Trip Itinerary Generator

A full-stack MERN (MongoDB, Express, React, Node.js) project that helps users generate, analyze, and manage their road trip itineraries.

---

## 📁 Folder Structure

road-trip-itinerary/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Topbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Analytics.jsx
│   │   │   ├── Expenditure.jsx
│   │   │   ├── Distance.jsx
│   │   │   ├── Recommendations.jsx
│   │   │   └── styles/
│   │   │       ├── topbar.css
│   │   │       ├── sidebar.css
│   │   │       └── pages.css
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx
│   │   │   ├── MyTrips.jsx
│   │   │   └── GenerateTrip.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── package.json
├── README.txt
└── setup.sh

---

## ⚙️ Installation & Setup

1. Clone the repository
   git clone https://github.com/your-username/road-trip-itinerary.git
   cd road-trip-itinerary

2. Setup the backend
   cd backend
   npm install

3. Setup environment variables
   Create a `.env` file in the backend directory with:
   PORT=8000
   MONGODB_URI=your_mongodb_connection_string
   OPENAI_API_KEY=optional_ai_key_here

4. Run the backend
   npm run dev

5. Setup the frontend
   cd ../frontend
   npm install
   npm run dev

6. Open your browser and visit:
   http://localhost:5173

---

## 🧠 Features

- Generate AI-based road trip itineraries
- Analyze trip data (distance, expenditure, analytics)
- Save and view past trips
- Clean and responsive UI with React and Tailwind CSS
- Sidebar + Topbar layout
- MongoDB Atlas integration

---

## 📄 Tech Stack

Frontend: React, Vite, Tailwind CSS  
Backend: Node.js, Express.js  
Database: MongoDB (Atlas)  
AI (Optional): OpenAI API  

---

## 🚀 Future Enhancements

- User authentication (JWT)
- Real-time analytics
- Weather and maps integration
- Personalized recommendations
- Export itinerary as PDF or CSV

---

## 👨‍💻 Author
Developed by Vaibhav Tyagi
