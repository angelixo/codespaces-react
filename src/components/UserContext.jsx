
import React, { createContext, useState, useContext } from 'react';
// Crear el contexto
const UserContext = createContext({username: 'angel'});

// Crear un proveedor para el contexto
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ username: '', email: '' });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useUser = () => useContext(UserContext);

const UserResume = () =>{
    const { user } = useUser();
    return <div>
        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>
    </div>
}
const UserEmail = () => {
    const { user, setUser } = useUser();
    return <input type='text' value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} />
}
export const UserContextComponent = () => {
    
    return <UserProvider>
        <h1>User Context</h1>
        <UserResume />
        <UserEmail />
    </UserProvider>
}



