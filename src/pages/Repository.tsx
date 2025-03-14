import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCode } from "@fortawesome/free-solid-svg-icons";

export function Repository() {
    const location = useLocation();
    const repo = location.state; // Pegamos o estado enviado na navegação

    if (!repo) return <p>Repositório não encontrado.</p>; // Se tentar acessar direto sem clicar antes

    return (
        <div className="w-[54rem] mt-6 p-6 bg-base-post rounded-lg shadow-md shadow-black/50">
            <h1 className="text-2xl font-bold text-base-title">{repo.name}</h1>
            <p className="text-sm text-base-text mt-2">{repo.description || "No description."}</p>

            <div className="mt-4 flex gap-4 text-sm text-base-span">
                <p><FontAwesomeIcon icon={faStar}/> {repo.stargazers_count} stars</p>
                {repo.language && <p><FontAwesomeIcon icon={faCode}/> {repo.language}</p>}
            </div>

            <a href={repo.html_url} target="_blank" className="block mt-4 text-blue-500 hover:underline">
                Ver no GitHub
            </a>
        </div>
    );
}
