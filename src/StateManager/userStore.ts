import { create } from 'zustand';

interface LoggedState {
    token: string;
    username: string;
    setToken: (logged: string) => void;
    setUsername: (username: string) => void;
    removeToken: () => void;
    removeUsername: () => void;
}

export const useLoggedStore = create<LoggedState>((set) => ({
    token: localStorage.getItem('token') || '',
    username: localStorage.getItem('username') || '',
    setToken: (token: string) => {
        localStorage.setItem('token', token);
        set({ token: token });
    },
    removeToken: () => {
        localStorage.removeItem('token');
        set({ token: '' }); // Set the token to an empty string in the state
    },
    setUsername: (username: string) => {
        localStorage.setItem('username', username);
        set({ username: username });
    },
    removeUsername: () => {
        localStorage.removeItem('username');
        set({ username: '' }); // Set the username to an empty string in the state
    },
}));



// export const useLoggedStore = create<LoggedState>((set) => ({
//     accessToken: '',
//     refreshToken: '', // Optionally manage the refresh token on the client side
//     setTokens: (accessToken, refreshToken) => {
//         set({ accessToken, refreshToken });
//     },
//     removeTokens: () => {
//         set({ accessToken: '', refreshToken: '' });
//     },
//     setUsername: (username) => set({ username }),
// }));

// const refreshAccessToken = async (refreshToken) => {
//     try {
//         const response = await fetch('http://localhost:8000/auth/refresh', {
//             method: 'POST',
//             headers: {
//                 Authorization: `Bearer ${refreshToken}`,
//             },
//         });
//
//         if (response.ok) {
//             const data = await response.json();
//             setAccessToken(data.accessToken);
//         } else {
//             // Handle refresh token failure
//         }
//     } catch (error) {
//         // Handle refresh token request error
//     }
// };

