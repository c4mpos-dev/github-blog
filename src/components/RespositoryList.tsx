import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCode, faArrowUpRightFromSquare, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { useUser } from "../hooks/useUser";

import { EmptyInfo } from "./EmptyInfo";


export function RepositoryList() {
    const navigate = useNavigate();
    const { repositories, page, setPage } = useUser();
    
    const reposPerPage = 9; 
    const totalPages = Math.ceil(repositories.length / reposPerPage);

    const displayedRepos = repositories.slice((page - 1) * reposPerPage, page * reposPerPage);

    return (
        <div className="w-[54rem] mt-6 mb-16">
            { !repositories.length ? 
                <EmptyInfo variant="repository"/>
            : (
                <div>
                    <div className="grid grid-cols-3 gap-4">
                        {displayedRepos.map((repo) => (
                            <div 
                                key={repo.id} 
                                className="flex flex-col w-full h-48 p-[18px] bg-base-post rounded-lg shadow-md shadow-black/50 duration-200 hover:scale-105 hover:cursor-pointer"
                                onClick={() => navigate(`/repository/${repo.name}`, { state: repo })}
                            >
                                <h3 className="text-xl mb-3.5 font-bold text-base-title line-clamp-1">{repo.name}</h3>
                                <p className="text-sm text-base-text line-clamp-2">{repo.description || "No description."}</p>

                                <div className="flex items-center mt-auto gap-2 text-sm text-base-span">
                                    <p><FontAwesomeIcon icon={faStar}/> {repo.stargazers_count}</p>
                                    { repo.language && (
                                        <div className="flex items-center gap-2">
                                            <p>|</p>
                                            <p><FontAwesomeIcon icon={faCode}/> {repo.language}</p>
                                        </div>
                                    )}
                                </div>

                                <a href={repo.html_url} target="_blank" className="flex items-center gap-2.5 mt-2 text-blue hover:underline">
                                    Ver no GitHub
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm"/>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-center mt-6 gap-4">
                        <button 
                            onClick={() => setPage(page - 1)}
                            disabled={page === 1}
                            className="px-4 py-2 bg-base-post text-base-title rounded-md shadow-md shadow-black/50 cursor-pointer duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        <span className="text-lg font-bold text-base-span">
                            {page} / {totalPages}
                        </span>

                        <button 
                            onClick={() => setPage(page + 1)}
                            disabled={page === totalPages}
                            className="px-4 py-2 bg-base-post text-base-title rounded-md shadow-md shadow-black/50 cursor-pointer duration-200 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
