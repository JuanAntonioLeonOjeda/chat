# FRONTEND
This part of the project has been created with Vite+Vue3. It uses Axios and Socket.IO-Client to communicate with the backend.
Pinia was added to be used as store. There a two stores created:
- `index.js`: user information (store user profile and their conversations)
- `connection.js`: store for socket connection, defining events and emiting data to the back.
