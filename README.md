Road Trip Itinerary Generator 🗺️
A full-stack MERN (MongoDB, Express, React, Node.js) application that empowers users to generate, analyze, and manage their road trip itineraries. This project leverages AI to create personalized trip plans and provides detailed analytics to help you budget and plan effectively.

✨ Features
AI-Powered Itinerary Generation: Get unique, AI-based road trip plans tailored to your preferences using the OpenAI API.

Trip Analytics: Analyze key trip data, including estimated distance and expenditure.

Trip Management: Save and view all of your past and planned trips in one place.

Clean and Responsive UI: Enjoy a seamless user experience on any device with a modern interface built with React and Tailwind CSS.

Modular Design: The application features a clean sidebar and topbar layout for easy navigation.

Scalable Database: Uses MongoDB Atlas to store and manage user data and trip itineraries.

🚀 Tech Stack
Frontend: React, Vite, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (Atlas)

AI Integration (Optional): OpenAI API

📁 Folder Structure
road-trip-itinerary/
├── backend/
│   ├── controllers/

│   ├── routes/

│   ├── services/

│   ├── models/

│   ├── server.js

│   └── .env

├── frontend/

│   ├── src/

│   │   ├── components/

│   │   │   ├── Topbar.jsx

│   │   │   ├── Sidebar.jsx

│   │   │   ├── analytics/

│   │   │   ├── trip/

│   │   │   └── about/

│   │   ├── pages/

│   │   │   ├── LandingPage.jsx

│   │   │   ├── MyTrips.jsx

│   │   │   └── GenerateTrip.jsx

│   │   ├── App.jsx

│   │   └── main.jsx

│   ├── package.json

│   └── vite.config.js

├── package.json

└── README.md

🖼️ Screenshots
Generate Trip	Trip Analytics	Trip Expenditure
A clean interface for users to input their starting point, destination, and trip duration to generate a new itinerary.	A dashboard displaying key metrics like total trips, average distance, and total expenditure.	A view to track and manage trip expenses, showing a breakdown of costs.
![Generate Trip]	![Trip Analytics]	![Trip Expenditure]
Trip Recommendations	Distance Calculator	About & Contact
Curated suggestions for road trip routes based on user preferences or popular destinations.	A dedicated tool for calculating the distance between a starting and ending point.	Informational pages detailing the project's mission and how to get in touch.
![Trip Recommendations]	![Distance Calculator]	![About & Contact]

Export to Sheets
⚙️ Installation & Setup
Follow these steps to get the project up and running on your local machine.

1. Clone the repository
Bash

git clone https://github.com/your-username/road-trip-itinerary.git
cd road-trip-itinerary
2. Set up the Backend
Navigate to the backend directory, install the dependencies, and configure your environment.

Bash

cd backend
npm install
Create a .env file in the backend directory with the following content. Replace the placeholder values with your actual database and API keys.

Plaintext

PORT=8000
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
3. Run the Backend
Start the backend server. It will run on http://localhost:8000 by default.

Bash

npm run dev
4. Set up the Frontend
Open a new terminal window, navigate to the frontend directory, and install the dependencies.

Bash

cd ../frontend
npm install
5. Run the Frontend
Start the React development server. It will run on http://localhost:5173.

Bash

npm run dev
6. View the Application
Open your browser and visit:

http://localhost:5173
📈 Future Enhancements
User Authentication: Implement JWT-based authentication to allow users to have private profiles and save their itineraries securely.

Real-time Analytics: Integrate WebSocket for real-time updates on trip data.

Maps and Weather Integration: Use APIs like Google Maps or OpenWeather to provide dynamic map visualizations and real-time weather forecasts for trip destinations.

Personalized Recommendations: Develop a more sophisticated recommendation engine based on user history and preferences.

Export Functionality: Add the ability to export itineraries as PDF or CSV files.

👨‍💻 Author
Developed by Vaibhav Tyagi
