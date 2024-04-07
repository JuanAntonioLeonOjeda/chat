# BACKEND
This part of the project is in charge of establishing the socket connection in the API. It not only listens to http requests for the API to manage, it also listens to socket events and emits an answer to the users involved in the event (for example, emit a new message to the message receiver).
The back is connected to a Database where it stores all users, conversations and messages. In case a user logs in through a different device, they can access their previous information.

## DB DIAGRAM
<p align="center">
  <img height=500 src="/dbDiagram.png" />
</p>

### User
- `name`: user's name
- `email`: user's email (unique value)
- `friends`: array of other user's ids who have been added as friends
- `conversations`: array of conversation ids that the user has started with a friend
- `online`: status to check if user is active or not (default value: false)
- `avatar`: profile picture (default value: https://www.salisburyut.com/wp-content/uploads/2020/09/avatar-1-2048x2048.jpeg)

### Conversation
- `title`: title of the conversation (Only for group chats)
- `users`: array of users that can participate in the conversation
- `createdAt`: date of creation
- `updatedAt`: date of last modification
- `messages`: array of message ids that form the conversation
- `lastMessage`: id of the last message added to the conversation

### Message
- `conversation`: id of the conversation to which the message belongs
- `sender`: id of the user who created the message
- `text`: content of the message
- `createdAt`: date of the message's creation
- `attachment`: url of any media attached to the message (previously uploaded to cloudinary or similar)

## API ENDPOINTS

### Authentication

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
POST   | /auth/login      | -     | User Login               | `email`                                         | { success: `boolean`, message: `string`, result: `{ token, user }`}

### User Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /user            | -     | Get All Users            |                                                 | { success: `boolean`, message: `string`, result: `array`}
GET    | /user/:id        | -     | Get One User             |                                                 | { success: `boolean`, message: `string`, result: `object`}
GET    | /user/profile    | YES   | Get Own Profile          |                                                 | { success: `boolean`, message: `string`, result: `object`}
POST   | /user            | -     | Create One User          |  `name`, `email`, `avatar`                      | { success: `boolean`, message: `string`, result: `object`}
PUT    | /user/:id        | -     | Update One User          |  `name`, `email`, `avatar`                      | { success: `boolean`, message: `string`, result: `object`}
PUT    | /user/add/:id    | YES   | Add friend to logged User|                                                 | { success: `boolean`, message: `string`, result: `friends array`}
DELETE | /user/:id        | -     | Delete One User          |                                                 | { success: `boolean`, message: `string`, result: `object`}

### Conversation Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /conversation            | -     | Get All Conversations            |                                                 | { success: `boolean`, message: `string`, result: `array`}
GET    | /conversation/:id        | -     | Get One Conversation             |                                                 | { success: `boolean`, message: `string`, result: `object`}
POST   | /conversation            | YES   | Create One Conversation          |  `users`                                      | { success: `boolean`, message: `string`, result: `object`}
PUT    | /conversation/:id        | -     | Update One Conversation          |  `title`, `createdAt`, `updatedAt`              | { success: `boolean`, message: `string`, result: `object`}
PUT    | /conversation/add/:id    | YES   | Add message to Conversation      |   `text`                                           | { success: `boolean`, message: `string`, result: `message object`}
DELETE | /conversation/:id        | -     | Delete One Conversation          |                                                 | { success: `boolean`, message: `string`, result: `object`}

**NOTE**: *Add message to conversation first creates the message in the database and add automatically adds it to the conversations passed at the route param. You don't need to also call the 'create message' request*

### Message Endpoints

METHOD | ENDPOINT         | TOKEN | DESCRIPTION              | POST PARAMS                                     | RETURNS
-------|------------------|-------|--------------------------|-------------------------------------------------|--------------------
GET    | /message            | -     | Get All Messages            |                                                 | { success: `boolean`, message: `string`, result: `array`}
GET    | /message/:id        | -     | Get One Message             |                                                 | { success: `boolean`, message: `string`, result: `object`}
POST   | /message            | YES   | Create One Message          |  `text`                                      | { success: `boolean`, message: `string`, result: `object`}
PUT    | /message/:id        | -     | Update One Message          |  `text`, `createdAt`                         | { success: `boolean`, message: `string`, result: `object`}
DELETE | /message/:id        | -     | Delete One Message          |                                                 | { success: `boolean`, message: `string`, result: `object`}
