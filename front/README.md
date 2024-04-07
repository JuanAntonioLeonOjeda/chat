# FRONTEND
This part of the project has been created with Vite+Vue3. It uses Axios and Socket.IO-Client to communicate with the backend.
Pinia was added to be used as store. There a two stores created:
- `index.js`: user information (store user profile and their conversations)
- `connection.js`: store for socket connection, defining events and emiting data to the back.

**NOTE**: before creating the connection store, a socket instance must be created using sokcet.io-client. This is where we connect to the socket in the backend.
You can check it in the `/socket.js` file.

In `App.js`, we excecute the `bindEvents` function created in the connection store. This customized function defines the backend socket events that our front socket is listening for, so the moment we start the app, we start listening to these events that can be emitted from the back.
