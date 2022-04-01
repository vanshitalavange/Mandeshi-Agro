import axios from "axios"
export const loginHandler = async (loginCredentials,setUserState,navigate,setErrorAlert) => {
    try {
        const response = await axios.post('/api/auth/login', loginCredentials)
        if (response.status === 200) {
            localStorage.setItem('authToken', response.data.encodedToken)
            const { firstName, cart, wishlist } = response.data.foundUser
            setUserState({ loginStatus: true, userDetails: { firstName, cart, wishlist } })
            navigate("/")
        }
    } catch (error) {
        console.error(error)
        setErrorAlert("alert alert-danger flex-row flex-wrap");
    }
}