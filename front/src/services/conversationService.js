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
    const { data } = await api.post(`conversation/add${id}`, body, {
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

const getConversation = async (body) => {
  try {
    const { data } = await api.get("conversation", {
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
