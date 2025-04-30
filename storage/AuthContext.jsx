import React, {createContext, useEffect, useReducer} from "react";

// Implements both Context and Reducer
const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isAuthenticated: true,
                accessToken: action.payload.accessToken,
                idToken: action.payload.idToken,
            };
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                accessToken: null,
                idToken: null,
            };
        case "SET_ACCESS_TOKEN":
            return {
                ...state,
                accessToken: action.payload,
            };
        default:
            return state;
    }
}

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        isAuthenticated: false,
        accessToken: null,
        idToken: null,
    });

    useEffect(() => {
        const ini
    })
}