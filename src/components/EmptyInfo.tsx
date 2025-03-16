import { useUser } from "../hooks/useUser";
import { Loading } from "./Loading";

interface EmptyInfoProps {
    variant: "profile" | "repository";
}

export function EmptyInfo({ variant }: EmptyInfoProps) {
    const { username } = useUser();

    if (variant === "profile") {
        return (
            <div className="flex flex-col h-56 sm:h-full justify-center items-center p-10 sm:p-0">
                <h1 className="text-base-text text-lg uppercase font-bold animate-bounce">Search for any user</h1>
                <p className="text-base-label px-3 sm:px-0">To display profile data, you need to search for a valid user</p>
            </div>
        );
    } else {
        return (
            <div className="lg:w-[54rem] mt-6 mb-5">
                <div className="flex flex-col w-full h-48 p-[18px] bg-base-post rounded-lg shadow-md shadow-black/50 duration-200 hover:scale-105">
                    <div className="flex h-full justify-center items-center">
                        { !username ? 
                            <div className="flex flex-col items-center">
                                <h1 className="text-base-text text-lg uppercase font-bold animate-bounce">Search for any user</h1>
                                <p className="text-base-label px-9 sm:px-0">To display the repositories, you need to find a valid user</p>
                            </div>
                        :(
                            <Loading />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}