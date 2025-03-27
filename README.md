# CMPT 315 Project Setup:

This is a Vite + React-based web application designed to showcase CMPT 315 Project. It integrates MongoDB for data storage.

## Prerequisites

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [MongoDB](https://www.mongodb.com/try/download/community) (Locally installed or a cloud database like MongoDB Atlas)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the Repository
```sh
git clone https://github.com/Fishington/CMPT315_Gym.git
cd CMPT315_Gym
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add the following:
```env
ATLAS_URI= (Find your MongoDB connection string should look like:
    mongodb+srv://(Username):(Password)g@cluster0.kocab.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0)

```

### 4. Start MongoDB

```sh
cd server
node server.cjs
```

### 5. Start the Development Server
```sh
npm run dev
```
This will start the application in development mode. Open `http://localhost:5173/` in your browser.


## License
This project is licensed under the [GNU GENERAL PUBLIC LICENSE](LICENSE).

