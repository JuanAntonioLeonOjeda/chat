import api from "./index";

const getOwnProfile = async (body) => {
  try {
    const { data } = await api.get("user/profile", {
      headers: {
        token: localStorage.token
      }
    })
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
};

export { getOwnProfile }
