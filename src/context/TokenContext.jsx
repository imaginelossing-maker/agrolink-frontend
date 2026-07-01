import { createContext, useReducer } from "react";

export const TokenContext = createContext(null);
export const TokenDispatchContext = createContext(null);

function tokenReducer(oldToken, action) {
    switch (action.type) {
        case "loggedIn":
            return {
                ...oldToken,
                token: action.payload,
            };

        case "loggedOut":
            return {
                ...oldToken,
                token: null,
            };

        default:
            return oldToken;
    }
}

export function TokenProvider({ children }) {
    const [token, dispatch] = useReducer(tokenReducer, { token: null });

    return (
        <TokenContext.Provider value={token}>
            <TokenDispatchContext.Provider value={dispatch}>
                {children}
            </TokenDispatchContext.Provider>
        </TokenContext.Provider>
    );
}

export default TokenProvider;