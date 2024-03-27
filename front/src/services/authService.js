import api from './index'

const login = async (body) => {
  try {
    const { data } = await api.post('auth/login', body)
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export {
  login
}