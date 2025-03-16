import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { useUser } from "../hooks/useUser";

import { Loading } from "./Loading";
import { EmptyInfo } from "./EmptyInfo";

export function ProfileCard() {
    const { userData, username } = useUser();

    return (
        <div className="flex justify-center items-center">
            <div className="absolute w-[20rem] sm:w-[34rem] md:w-[44rem] lg:w-[54rem] sm:h-[12rem] md:h-[14rem] mt-12 bg-base-profile rounded-[10px] shadow-lg shadow-black/40">
                { !username ? 
                    <EmptyInfo variant="profile"/>
                : !userData ?  
                    <Loading />
                :(
                    <div className="flex flex-col sm:flex-row h-full items-center gap-4 sm:gap-6 md:gap-8 p-5 sm:p-5 md:p-10">
                        <img
                            src={userData.avatar_url} 
                            alt="User photo"
                            className="w-32 h-32 md:w-40 md:h-40 border-2 border-base-border rounded-lg shadow-md shadow-black/30"
                        />
                        <div className="flex flex-col w-full h-full sm:py-3 md:py-0">
                            <div className="flex items-center justify-between">
                                <h1 className="text-base-title line-clamp-1 sm:text-xl md:text-2xl font-bold">
                                    {userData.name || userData.login}
                                </h1>
                                <a href={userData.html_url} className="flex items-center gap-2 font-bold text-blue hover:underline hover:cursor-pointer">
                                    GitHub
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm"/>
                                </a>
                            </div>

                            <h2 className="mt-2.5 text-base-text line-clamp-2 md:line-clamp-4">
                                {userData.bio || "No bio available"}
                            </h2>

                            <div className="flex jus mt-3 sm:mt-auto gap-4 sm:gap-3 text-base-subtitle text-sm md:text-base">
                                <div className="hidden sm:flex items-center gap-2">
                                    <FontAwesomeIcon icon={faGithub} className="text-base-label"/>
                                    {userData.login}
                                </div>

                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faBuilding} className="text-base-label"/>
                                    <p className="line-clamp-1">{userData.company || "No company"}</p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faUserGroup} className="text-base-label"/>
                                    <p className="line-clamp-1">{userData.followers} followers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}