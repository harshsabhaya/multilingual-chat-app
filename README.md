# 🌐 ChatBridge - Multilingual Real-Time Chat Application

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white" alt="Socket.io"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
  <img src="https://img.shields.io/badge/Chakra%20UI-319795?style=for-the-badge&logo=chakraui&logoColor=white" alt="Chakra UI"/>
</p>

ChatBridge is a full-stack real-time chat application with **automatic language translation** capabilities. Users can communicate in their preferred language, and messages are automatically translated for the recipient based on their language preference.

## ✨ Features

### Core Features

- 🔐 **User Authentication** - Secure signup and login with JWT tokens
- 💬 **Real-Time Messaging** - Instant message delivery using Socket.IO
- 🌍 **Multi-Language Support** - Automatic message translation using DeepL API
- 👥 **Group Chats** - Create and manage group conversations
- 🔔 **Real-Time Notifications** - Instant notifications for new messages
- ⌨️ **Typing Indicators** - See when other users are typing
- 🔍 **User Search** - Search and find users to chat with
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices

### Supported Languages

- English (EN)
- French (FR)
- Spanish (ES)
- German (DE)
- Italian (IT)
- Portuguese (PT)
- Russian (RU)
- Chinese (ZH)
- Japanese (JA)
- Korean (KO)

## 🏗️ Tech Stack

### Backend

| Technology     | Purpose                               |
| -------------- | ------------------------------------- |
| **Node.js**    | Runtime environment                   |
| **Express.js** | Web framework                         |
| **MongoDB**    | NoSQL database                        |
| **Mongoose**   | MongoDB ODM                           |
| **Socket.IO**  | Real-time bidirectional communication |
| **JWT**        | Authentication tokens                 |
| **bcryptjs**   | Password hashing                      |
| **DeepL API**  | Language translation                  |

### Frontend

| Technology           | Purpose                 |
| -------------------- | ----------------------- |
| **React**            | UI library              |
| **Chakra UI**        | Component library       |
| **Socket.IO Client** | Real-time communication |
| **Axios**            | HTTP client             |
| **React Router**     | Client-side routing     |
| **Framer Motion**    | Animations              |
| **Lottie**           | Animation rendering     |

## 📁 Project Structure

```
ChatBridge/
├── backend/
│   ├── config/
│   │   ├── db.js              # MongoDB connection
│   │   └── generateToken.js    # JWT token generation
│   ├── controllers/
│   │   ├── userControllers.js  # User authentication & management
│   │   ├── chatControllers.js  # Chat CRUD operations
│   │   └── messageControllers.js # Message handling & translation
│   ├── middleware/
│   │   ├── authMiddleware.js   # JWT authentication middleware
│   │   └── errorMidleware.js   # Error handling middleware
│   ├── Models/
│   │   ├── userModel.js        # User schema
│   │   ├── chatModel.js        # Chat schema
│   │   └── messageModel.js     # Message schema
│   ├── routes/
│   │   ├── userRoutes.js       # User API routes
│   │   ├── chatRoutes.js       # Chat API routes
│   │   ├── messageRoutes.js    # Message API routes
│   │   └── languageRoutes.js   # Translation API routes
│   └── server.js               # Express server & Socket.IO setup
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Authentication/
│   │   │   │   ├── Login.js    # Login component
│   │   │   │   └── Signup.js   # Signup component
│   │   │   ├── UserAvatar/
│   │   │   │   ├── UserBadgeItem.js
│   │   │   │   └── UserListItem.js
│   │   │   ├── ChatBox.js      # Chat container
│   │   │   ├── MyChats.js      # Chat list sidebar
│   │   │   ├── SingleChat.js   # Individual chat view
│   │   │   └── ScrollableChat.js # Message display
│   │   ├── Context/
│   │   │   └── ChatProvider.js  # Global state management
│   │   ├── miscellaneous/
│   │   │   ├── SideDrawer.js   # Search drawer
│   │   │   ├── ProfileModel.js # User profile modal
│   │   │   ├── GroupChatModal.js # Create group modal
│   │   │   └── UpdateGroupChatModal.js
│   │   ├── Pages/
│   │   │   ├── HomePage.js     # Authentication page
│   │   │   └── Chatpage.js     # Main chat page
│   │   ├── config/
│   │   │   └── ChatLogics.js   # Chat utility functions
│   │   ├── animations/
│   │   │   └── typing.json     # Typing indicator animation
│   │   └── App.js              # Root component
│   └── package.json
├── Dockerfile
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- DeepL API key (for translation)
- Cloudinary account (for image uploads)

### Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=8080
NODE_ENV=development

# MongoDB
MONGO_URI=mongodb+srv://your-connection-string

# JWT
JWT_SECRET=your-jwt-secret

# DeepL API (for translation)
DEEPL_API_KEY=your-deepl-api-key
```

Create a `.env` file in the `frontend` directory:

```env
# Cloudinary (for image uploads)
REACT_APP_CLOUD_NAME=your-cloudinary-cloud-name
REACT_APP_UPLOAD_PRESET=your-upload-preset
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/harshsabhaya/multilingual-chat-app.git
   cd multilingual-chat-app
   ```

2. **Install dependencies**

   ```bash
   # Install backend dependencies
   npm install

   # Install frontend dependencies
   cd frontend
   npm install --legacy-peer-deps
   cd ..
   ```

3. **Run the application**

   **Development mode (separate terminals):**

   ```bash
   # Terminal 1 - Start backend server
   npm run server

   # Terminal 2 - Start frontend
   cd frontend
   npm start
   ```

   **Production build:**

   ```bash
   npm run build
   npm start
   ```

4. **Access the application**
   - Frontend: `http://localhost:3000`
   - Backend API: `http://localhost:8080`

## 🐳 Docker Deployment

```bash
# Build the Docker image
docker build -t chatbridge .

# Run the container
docker run -p 8080:8080 -p 3000:3000 chatbridge
```

## 📡 API Endpoints

### User Routes (`/api/user`)

| Method | Endpoint | Description       | Auth |
| ------ | -------- | ----------------- | ---- |
| POST   | `/`      | Register new user | No   |
| POST   | `/login` | User login        | No   |
| GET    | `/`      | Search users      | Yes  |

### Chat Routes (`/api/chat`)

| Method | Endpoint       | Description        | Auth |
| ------ | -------------- | ------------------ | ---- |
| POST   | `/`            | Create/Access chat | Yes  |
| GET    | `/`            | Fetch all chats    | Yes  |
| POST   | `/group`       | Create group chat  | Yes  |
| PUT    | `/rename`      | Rename group       | Yes  |
| PUT    | `/groupremove` | Remove from group  | Yes  |
| PUT    | `/groupadd`    | Add to group       | Yes  |

### Message Routes (`/api/message`)

| Method | Endpoint   | Description      | Auth |
| ------ | ---------- | ---------------- | ---- |
| POST   | `/`        | Send message     | Yes  |
| GET    | `/:chatId` | Get all messages | Yes  |

### Language Routes (`/api/language`)

| Method | Endpoint | Description       | Auth |
| ------ | -------- | ----------------- | ---- |
| POST   | `/`      | Translate message | No   |

## 🔄 Real-Time Events (Socket.IO)

| Event              | Direction       | Description                |
| ------------------ | --------------- | -------------------------- |
| `setup`            | Client → Server | Initialize user connection |
| `connected`        | Server → Client | Confirm connection         |
| `join chat`        | Client → Server | Join a chat room           |
| `new message`      | Bidirectional   | Send/receive new message   |
| `typing`           | Bidirectional   | Typing indicator start     |
| `stop typing`      | Bidirectional   | Typing indicator stop      |
| `message recieved` | Server → Client | New message notification   |

## 📊 Database Schema

### User Model

```javascript
{
  name: String,           // Required
  email: String,          // Required, Unique
  password: String,       // Required, Hashed
  lang: String,           // Required (Language preference)
  pic: String,            // Profile picture URL
  isAdmin: Boolean        // Default: false
}
```

### Chat Model

```javascript
{
  chatName: String,
  isGroupChat: Boolean,   // Default: false
  users: [ObjectId],      // Reference to User
  latestMessage: ObjectId,// Reference to Message
  groupAdmin: ObjectId    // Reference to User
}
```

### Message Model

```javascript
{
  sender: ObjectId,       // Reference to User
  content: String,
  chat: ObjectId          // Reference to Chat
}
```

## 🌐 How Translation Works

1. User sends a message in their preferred language
2. The application detects the recipient's language preference
3. Message is sent to DeepL API for translation
4. Translated message is appended to the original message
5. Both original and translated text are displayed

**Example:**

```
Original: "Hello, how are you?"
Displayed: "Hello, how are you? (Bonjour, comment allez-vous ?)"
```

## 🙏 Acknowledgments

- [Chakra UI](https://chakra-ui.com/) for the component library
- [DeepL](https://www.deepl.com/) for the translation API
- [Socket.IO](https://socket.io/) for real-time communication
- [MongoDB Atlas](https://www.mongodb.com/atlas) for database hosting
- [Cloudinary](https://cloudinary.com/) for image hosting

---
