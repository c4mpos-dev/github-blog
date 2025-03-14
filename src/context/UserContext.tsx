import React, { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../lib/axios";

interface UserData {
    avatar_url: string;
    name?: string;
    html_url: string;
    bio?: string;
    login: string;
    company?: string;
    followers: number;
}

interface UserContextType {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    userData: UserData | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState<UserData | null>(null);

    async function fetchUserData(username: string) {
        try {
            const response = await api.get(`/users/${username}`);
            setUserData(response.data);
        } catch (error) {
            console.error("Erro ao buscar dados:", error);
        }
    }

    useEffect(() => {
        if (username) {
            fetchUserData(username);
        }

        setUserData(null);
    }, [username]);

    return (
        <UserContext.Provider value={{ username, setUsername, userData }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;