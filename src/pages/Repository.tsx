import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faArrowUpRightFromSquare, faStar, faCode, faScaleBalanced, faHammer, faRotateRight } from "@fortawesome/free-solid-svg-icons";

import { formatDistanceToNow } from "date-fns";

import { useUser } from "../hooks/useUser";

export function Repository() {
    const location = useLocation();
    const navigate = useNavigate();
    const { userData } = useUser();

    const repo = location.state;

    useEffect(() => {
        if (!userData || repo.owner.login !== userData.login) {
            navigate("/");
        }
    }, [repo, userData, navigate]);

    return (
        <div className="flex items-center flex-col mb-16">
            <div className="flex justify-center items-center">
                <div className="absolute w-[20rem] sm:w-[34rem] md:w-[44rem] lg:w-[54rem] p-6 bg-base-profile rounded-lg shadow-lg shadow-black/50">
                    <div className="flex justify-between items-center mb-4 text-blue hover:underline hover:cursor-pointer" onClick={() => navigate('/')}>
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faChevronLeft} className="text-sm"/>
                            Back
                        </span>
                        
                        <a href={repo.html_url} target="_blank" className="flex items-center gap-2 hover:underline">
                            Ver no GitHub
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm"/>
                        </a>
                    </div>

                    <h1 className="text-xl sm:text-2xl font-bold text-base-title line-clamp-1">{repo.name || userData?.login}</h1>
                    
                    <div className="mt-4 flex text-sm text-base-span">
                        <div className="flex w-full items-center mt-auto gap-2 text-sm text-base-span">
                            <div className="flex items-center gap-2 mr-auto sm:mr-7">
                                <FontAwesomeIcon icon={faGithub} className="text-lg text-base-label"/>
                                {userData?.login}
                            </div> 

                            <p><FontAwesomeIcon icon={faStar}/> {repo.stargazers_count}</p>

                            { repo.language && (
                                <div className="flex items-center gap-2">
                                    <p>|</p>
                                    <p className="flex items-center gap-2">
                                        <FontAwesomeIcon icon={faCode}/>
                                        <p className="">{repo.language}</p>
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-[20rem] sm:w-[34rem] md:w-[44rem] lg:w-[54rem] px-6 py-5 bg-base-post mt-32 rounded-lg">
                <div className="flex items-center justify-between w-full h-10 pb-4 gap-2 border-b border-base-border">
                    <div className="flex items-center gap-2">
                        <span className="flex items-center gap-2 font-bold">
                            <FontAwesomeIcon icon={faScaleBalanced}/>
                            <p className="hidden sm:flex">LICENSE:</p>
                        </span>
                        <span className="line-clamp-1">{repo.license?.name || "No License"}</span>
                    </div>

                </div>

                { repo.topics?.length > 0 && (
                    <div className="mt-4 sm:flex overflow-x-scroll scrollbar-hide border-b border-base-border pb-4">
                        <div className="flex items-center gap-2">
                            {repo.topics?.map((topic: string) => (
                                <div key={topic} className="py-1.5 px-2.5 text-xs text-base-title bg-base-label rounded-lg duration-200 hover:scale-105">
                                    <span className="line-clamp-1 truncate">{topic}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex mt-4 border-b border-base-border pb-4">
                    <p>{repo.description || "No description."}</p>
                </div>

                <div className="flex items-center mt-4 gap-3 text-xs sm:text-base">
                    <span className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faHammer}/>
                        <p className="hidden sm:flex">Created:</p> 
                        {formatDistanceToNow(repo.created_at, { addSuffix: true })}
                    </span>

                    <span>|</span>

                    <span className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faRotateRight}/>
                        <p className="hidden sm:flex">Updated:</p> 
                        {formatDistanceToNow(repo.updated_at, { addSuffix: true })}
                    </span>
                </div>
            </div>
        </div>
    );
}
