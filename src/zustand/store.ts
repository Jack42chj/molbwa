import { create } from "zustand";
import { persist } from "zustand/middleware";

interface userInfoType {
    isLoggedIn: boolean;
    login: () => void;
    logout: () => void;
}

const AuthStore = create(persist<userInfoType>(
    (set) => ({
        isLoggedIn: false,
        login: () => {
            set({ isLoggedIn: true });
        },
        logout: () => {
            set({ isLoggedIn: false });
            localStorage.clear();
        },
    }),
    {
        name: 'userLoginStatus'
    }
));

export default AuthStore;