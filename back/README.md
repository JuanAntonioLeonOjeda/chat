# BACKEND
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
GET    | /user            | -     | Get All Users            |                                                 | { success: `boolean`, message: `string`, result: `array`}
GET    | /user/:id        | -     | Get One User             |                                                 | { success: `boolean`, message: `string`, result: `object`}
GET    | /user/profile    | YES   | Get Own Profile          |                                                 | { success: `boolean`, message: `string`, result: `object`}
POST   | /user            | -     | Create One User          |  `name`, `email`, `avatar`                      | { success: `boolean`, message: `string`, result: `object`}
PUT    | /user/:id        | -     | Update One User          |  `name`, `email`, `avatar`                      | { success: `boolean`, message: `string`, result: `object`}
PUT    | /user/add/:id    | YES   | Add friend to logged User|                                                 | { success: `boolean`, message: `string`, result: `friends array`}
DELETE | /user/:id        | -     | Delete One User          |                                                 | { success: `boolean`, message: `string`, result: `object`}
