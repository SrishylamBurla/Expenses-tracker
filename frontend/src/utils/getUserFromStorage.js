
const getUserFromStorage = () => {
    const user = JSON.parse(localStorage.getItem("user")) || null
    return user?.token    
}

export default getUserFromStorage