import React from 'react'


const UserContext = React.createContext();

// provider
const UserProvider = UserContext.Provider
// Consumer
const UserConsumer = UserContext.Consumer

export {UserConsumer, UserProvider}