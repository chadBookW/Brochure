# Real Estate Marketing Copy Generator

This web application I developed helps users create marketing copy for a real estate developer's brochure using language models.

# Features

## Front-End Web App: Built with React JS
Input fields for Tone, Length, Features, and Brand Positioning
Buttons for generating, inserting, and regenerating copy

### Input Fields:

Tone: Dropdown (Casual, Formal, Grandiose)

Length of the Copy: Dropdown (Short, Medium, Long)

Features of the Building: Text input

Brand Positioning: Text input

### Buttons:
Generate: Generates marketing copy

Insert in DB: Inserts data into the database

Regenerate: Allows regenerating portions of the copy



## Back-End Server: Built with Node.js (Express)
REST API endpoints for generating marketing copy, inserting data into Supabase, and regenerating copy
Back-End
POST /generate: Generates marketing copy using Eden AI.
POST /insert: Inserts data into Supabase.
POST /regenerate: Regenerates selected portions of the copy.


# Prerequisites
Node.js and npm
Supabase account
Eden AI API Key
Setup

## Front-End
In the frontend directory, I installed the dependencies and started the front-end server.

## Back-End
In the backend directory, I installed the dependencies, created a .env file with my Eden AI API Key, Supabase URL, and Supabase Key, and started the back-end server.
