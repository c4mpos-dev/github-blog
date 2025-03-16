import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export function Loading() {
    return (
        <div className="flex h-56 sm:h-full justify-center items-center">
            <FontAwesomeIcon icon={faCircleNotch} className="text-4xl text-blue animate-spin"/>
        </div>
    );
}