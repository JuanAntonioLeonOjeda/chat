import api from "./index"

const createConversation = async (body) => {
  try {
    const { data } = await api.post("conversation", body, {
      headers: {
        token: localStorage.token,
      },
    })
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const addMessage = async (id, body) => {
  try {
    const { data } = await api.put(`conversation/add/${id}`, body, {
      headers: {
        token: localStorage.token,
      },
    })
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

const getConversation = async (id) => {
  try {
    const { data } = await api.get(`conversation/${id}`, {
      headers: {
        token: localStorage.token,
      },
    })
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export { 
  createConversation,
  addMessage,
  getConversation
}
