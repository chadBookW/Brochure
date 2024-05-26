# Simple Real Estate Brochure Copy Generator


This repository contains a web application that empowers users to create marketing copy for a real estate developer's brochure, utilizing language models. The application has both front-end and back-end components.

Features

Front-End Desktop Web App: A React JS front-end with input fields for Tone, Length of the Copy, Features of the Building, and Brand Positioning. It also includes buttons for generating the marketing copy, inserting data into a database, and regenerating the copy.
Back-End Server: A backend server implemented in Node.js (Express) with REST API endpoints for generating marketing copy, inserting data into a Supabase database, and regenerating portions of the copy.
Prerequisites

Node.js and npm (or yarn)
Python (if you prefer to implement the backend server in Python)
Supabase account
Eden AI API Key
Setup Instructions

Front-End Setup
Install Dependencies: Navigate to the frontend directory and install the dependencies.

bash
Copy code
cd frontend
npm install
Start the Front-End Server: Start the development server.

bash
Copy code
npm start
Back-End Setup
Install Dependencies: Navigate to the backend directory and install the dependencies.

bash
Copy code
cd backend
npm install
Environment Variables: Create a .env file in the backend directory with the following environment variables:

plaintext
Copy code
EDEN_AI_API_KEY=your_eden_ai_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
Start the Back-End Server: Start the backend server.

bash
Copy code
npm start
Application Components

Front-End
The front-end is built with React JS and includes the following components:

Input Fields:

Tone: Dropdown list with options "Casual", "Formal", "Grandiose".
Length of the Copy: Dropdown list with options "Short" (4-6 sentences), "Medium" (8-10 sentences), "Long" (15-20 sentences).
Features of the Building: Text input box for building features.
Brand Positioning: Text input box for brand positioning.
Buttons:

Generate: Sends input data to the backend to generate marketing copy.
Insert in DB: Sends input data and generated copy to the backend to be inserted into the Supabase database.
Regenerate: Allows users to highlight portions of the generated copy and regenerate the selected portion.
Back-End
The backend is built with Node.js (Express) and includes the following REST API endpoints:

POST /generate: Generates marketing copy using the Eden AI platform's OpenAI model.
POST /insert: Inserts input data and generated copy into a Supabase database.
POST /regenerate: Regenerates selected portions of the generated copy.
Supabase Setup

Sign Up: Create a free account on Supabase.

Create a Project: Spin up a new project.

Create a Table: Create a table with the following schema:

Column Name	Data Type	Description
Positioning	text	Input A on Front End
Features	text	Input B on Front End
Tone	varchar	Input C on Front End
Length	varchar	Input D on Front End
Output	text	LLM Generated Output
Get Supabase URL and Key: Obtain the URL and API Key from your Supabase project settings and add them to the .env file in the backend.

Running the Application

Start the front-end server.

bash
Copy code
cd frontend
npm start
Start the back-end server.

bash
Copy code
cd backend
npm start
Open the front-end application in your browser and use the input fields to generate, insert, and regenerate marketing copy.

Bonus Task

The bonus task involves regenerating selected portions of the generated copy. Users can highlight portions of the text, choose to make it longer or shorter, and the backend will regenerate the highlighted portion accordingly.

Regenerate Endpoint
POST /regenerate: Accepts the highlighted text, the complete text output, and the chosen option ("Make it longer" or "Make it shorter"). Calls the language model API to regenerate the selected portion based on the prompt template and returns the modified copy.
References

Eden AI Guide
Supabase Documentation
