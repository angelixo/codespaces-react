import React, { createContext, useReducer, useContext } from 'react';

// Estado inicial del usuario
const initialState = {
    username: 'angel',
    email: ''
};

// Definir acciones
const userReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email
            };
        case 'CLEAR_USER':
            return initialState;
        default:
            return state;
    }
};

// Crear el contexto
const UserContext = createContext();

// Proveedor de contexto
export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useUser = () => useContext(UserContext);

const UserResume = () =>{
    const { state } = useUser();
        return <div>
        <div>Username: {state.username}</div>
        <div>Email: {state.email}</div>
    </div>
}

const UserEmail = () => {
    const { state, dispatch } = useUser();
    return <input type='text' value={state.email} onChange={(e) => dispatch({ type:'SET_USER', payload: {...state, email: e.target.value}})} />
}


export const UserReducerComp = () => {
    return <UserProvider>
        <h1>User Reducer</h1>
        <UserResume />
        <UserEmail />
    </UserProvider>
}