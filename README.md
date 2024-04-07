# CHAT DEMO
Small implementation of a private live chat using Socket.io and data storage in the cloud.

## MAIN FEATURES
- User login
- Users have friends they can talk with
- Private rooms for each friend
- Conversation storage in the cloud so users can continue their conversations in a different device

<div>
  <a href="https://chatreboot.netlify.app/" target="_blank">Try Demo</a>
</div>

You can login as one of the following:
- `juanan@gmail.com`
- `tati@gmail.com`
- `kimchi@gmail.com`
- `ada@gmail.com`
- `turing@gmail.com`

## MAIN DEPENDENCIES
![Node JS](https://img.shields.io/badge/NODE.JS-20.11.30-yellow?style=for-the-badge&logo=nodedotjs)
![ExpressJS](https://img.shields.io/badge/EXPRESS-4.19.1-yellow?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/MONGOOSE-8.2.3-880000?style=for-the-badge&logo=mongoose&logoColor=880000)
![SocketIO](https://img.shields.io/badge/SOCKET.IO-4.7.5-black?style=for-the-badge&logo=socketdotio)
![SocketIOClient](https://img.shields.io/badge/SOCKET.IO%20CLIENT-4.7.5-black?style=for-the-badge&logo=socketdotio)
![JSONWebToken](https://img.shields.io/badge/JWT-9.0.2-black?style=for-the-badge&logo=jsonwebtokens)
![Dotenv](https://img.shields.io/badge/DOTENV-16.4.5-black?style=for-the-badge&logo=dotenv&logoColor=white)
![Vue](https://img.shields.io/badge/VUE.JS-3.4.21-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=#4FC08D)
![Vuetify](https://img.shields.io/badge/VUETIFY-3.5.12-1867C0?style=for-the-badge&logo=vuetify&logoColor=1867C0)
![Axios](https://img.shields.io/badge/AXIOS-1.6.8-5A29E4?style=for-the-badge&logo=axios&logoColor=5A29E4)

## DEVELOPING TIME
**Total Time for MVP** - 2 weeks (Partial dedication)
### BACKEND
- **DB Design and corrections** - 2 days
- **Basic CRUD** - 2 days
- **Adding Socket.io** - 1 day
### FRONTEND
- **Adding Socket.io client** - 1 day 
- **Join a chat** - 1 day
- **Functional conversation** - 2 days

*Note for future projects: keep a tasks diary for better time descriptions*

## MAIN DIFFICULTIES
- Understanding the flow of using Socket.io
- Adding Socket.io inside the express instance
- Understading where to store Socket.io's events in the front
- Integrating Vue3 and Pinia

## MAIN DOCUMENTATION SOURCES
- [Socket.io Documentation](https://socket.io/docs/v4/tutorial/introduction)
- [Socket.io Chat tutorial](https://socket.io/get-started/private-messaging-part-1/)
- [Vue3 Documentation](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
- [Pinia Documentation](https://pinia.vuejs.org/core-concepts/)
- ... and ChatGPT :sweat_smile:

## FUTURE IMPLEMENTATIONS
- Add group chats
- Add SQLite so users can have a local database in their device, improving performance
- End-to-End message encryption
- Upload files/images (via cloudinary probably)
- Improve Styling
