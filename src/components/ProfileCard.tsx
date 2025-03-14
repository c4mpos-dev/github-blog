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
            <div className="absolute w-[54rem] h-[14rem] mt-12 bg-base-profile rounded-[10px] shadow-lg shadow-black/40">
                { !userData ? 
                    <Loading />
                : !username ?  
                    <EmptyInfo />
                :(
                    <div className="flex h-full items-center px-10 py-10">
                        <img
                            src={userData.avatar_url} 
                            alt="User photo"
                            className="w-40 h-40 border-2 border-base-border rounded-lg shadow-md shadow-black/30"
                        />
                        <div className="flex flex-col ml-10 w-full h-full">
                            <div className="flex items-center justify-between">
                                <h1 className="text-2xl font-bold">{userData.name || userData.login}</h1>
                                <a href={userData.html_url} className="flex items-center gap-2 font-bold text-blue">
                                    GitHub
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm"/>
                                </a>
                            </div>

                            <h2 className="mt-2.5 text-base-subtitle">
                                {userData.bio || "No bio available"}
                            </h2>

                            <div className="flex mt-auto gap-6 text-base-subtitle">
                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faGithub} className="text-lg text-base-label"/>
                                    {userData.login}
                                </div>

                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faBuilding} className="text-lg text-base-label"/>
                                    {userData.company || "No company"}
                                </div>

                                <div className="flex items-center gap-2">
                                    <FontAwesomeIcon icon={faUserGroup} className="text-lg text-base-label"/>
                                    {userData.followers} seguidores
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}