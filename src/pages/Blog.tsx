import { ProfileCard } from "../components/ProfileCard";
import { SearchForm } from "../components/SearchForm";

export function Blog(){
    return (
        <div className="flex items-center flex-col">
            <ProfileCard />
            <SearchForm />
        </div>
    );
}