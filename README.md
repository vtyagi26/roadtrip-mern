ROAD TRIP ITINERARY GENERATOR
--------------------------------------

OVERVIEW
The Road Trip Itinerary Generator is a full-stack MERN (MongoDB, Express, React, Node.js) web application that allows users to generate, view, and analyze personalized road trip itineraries.
It provides detailed insights including distance, expenditure, analytics, and smart recommendations — all within an intuitive dashboard layout.

--------------------------------------

FEATURES
- AI-powered itinerary generation
- Analytics dashboard for trip metrics and trends
- Expenditure tracking for each trip
- Distance calculator for destinations
- Smart trip recommendations
- MongoDB integration for storing user data
- Dark mode toggle for better user experience
- (Upcoming) JWT authentication for secure access

--------------------------------------

TECH STACK
Frontend: React.js (Vite) + Tailwind CSS
Backend: Node.js + Express.js
Database: MongoDB Atlas
Styling: SCSS / CSS Modules + Tailwind
Data Visualization (Planned): Recharts / Chart.js
AI (Future): OpenAI / LangChain for itinerary optimization

--------------------------------------

FOLDER STRUCTURE

road-trip-itinerary/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── models/
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Topbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Analytics.jsx
│   │   │   ├── Expenditure.jsx
│   │   │   ├── Distance.jsx
│   │   │   ├── Recommendations.jsx
│   │   │   └── styles/ (CSS files)
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── vite.config.js
│
├── package.json
├── README.txt
└── LICENSE

--------------------------------------

INSTALLATION & SETUP

PREREQUISITES
- Node.js (v16 or higher)
- MongoDB Atlas account or local MongoDB
- npm or yarn

1. Clone the Repository
   git clone https://github.com/<your-username>/road-trip-itinerary.git
   cd road-trip-itinerary

2. Backend Setup
   cd backend
   npm install

   Create a .env file inside /backend with the following:
   PORT=8000
   MONGODB_URI=<your_mongodb_connection_string>
   OPENAI_API_KEY=<optional_for_future_AI_features>

   Run the backend server:
   npm run dev
   (Server starts at http://localhost:8000)

3. Frontend Setup
   cd ../frontend
   npm install
   npm run dev
   (App runs at http://localhost:5173)

--------------------------------------

KEY COMPONENTS

Topbar.jsx - Navigation bar with dark mode and links
Sidebar.jsx - Sidebar for navigating between app pages
About.jsx - Information about the app and mission
Contact.jsx - Contact form and social links
Analytics.jsx - Dashboard for trip analytics
Expenditure.jsx - Expense tracking page
Distance.jsx - Route and distance calculator
Recommendations.jsx - Smart trip suggestions

--------------------------------------

FUTURE ENHANCEMENTS
- Integration with Google Maps API for route visualization
- JWT-based authentication and user login
- Recharts for graphical analytics
- AI-powered itinerary generation
- Offline caching for mobile use

--------------------------------------

DEVELOPER NOTES
- Built with React + Vite for high performance
- Backend follows modular route-controller-service architecture
- MongoDB Atlas for scalable data storage
- Uses Tailwind + SCSS for responsive UI design
- Pages are fully layout-aware (not overlapped by topbar/sidebar)

--------------------------------------

LICENSE
This project is licensed under the MIT License.

--------------------------------------

CONTACT
Developer: Vaibhav Tyagi
Email: vaibhavtyagi.dev@gmail.com
LinkedIn: https://www.linkedin.com/in/vaibhav-tyagi
