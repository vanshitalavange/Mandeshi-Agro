export const logout = (setUserState) => {
    localStorage.removeItem("authToken");
    setUserState(userState => ({ ...userState, loginStatus: false, userDetails: {} }));
};