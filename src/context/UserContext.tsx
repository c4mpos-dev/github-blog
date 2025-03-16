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

interface Repository {
    id: number;
    name: string;
    html_url: string;
    description?: string;
    stargazers_count: number;
    language?: string;
    topics?: string[];
}

interface UserContextType {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    userData: UserData | null;
    repositories: Repository[]; 
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    error: string | null;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState<UserData | null>(null);
    const [repositories, setRepositories] = useState<Repository[]>([]);
    const [page, setPage] = useState(1);
    const [error, setError] = useState<string | null>(null);

    async function fetchUserData(username: string) {
        try {
            setError(null);
            const response = await api.get(`/users/${username}`);
            setUserData(response.data);
        } catch {
            setError("Erro ao buscar dados do usuário. Verifique o nome e tente novamente.");
            setUserData(null);
            setUsername('');

            setTimeout(() => setError(null), 3000);
        }
    }

    async function fetchUserRepositories(username: string) {
        try {
            const response = await api.get(`/users/${username}/repos`, {
                params: {
                    sort: "updated",
                    per_page: 100
                }
            });
            setRepositories(response.data);
        } catch {
            setRepositories([]);
        }
    }

    useEffect(() => {
        setPage(1);
        setUserData(null);
        setRepositories([]);

        if (username) {
            fetchUserData(username);
            fetchUserRepositories(username);
        }
    }, [username]);

    return (
        <UserContext.Provider value={{ username, setUsername, userData, repositories, page, setPage, error }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;