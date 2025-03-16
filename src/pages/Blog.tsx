import { ErrorMessage } from "../components/ErrorMessage";
import { ProfileCard } from "../components/ProfileCard";
import { RepositoryList } from "../components/RespositoryList";
import { SearchForm } from "../components/SearchForm";

export function Blog(){
    return (
        <div className="flex items-center flex-col">
            <ErrorMessage />
            <ProfileCard />
            <SearchForm />
            <RepositoryList />
        </div>
    );
}