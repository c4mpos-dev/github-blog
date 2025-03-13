import bannerCover from "../assets/Cover.svg";
import logoGitHubBlog from "../assets/logo.svg";

export function Header(){
    return (
        <header className="relative shadow-lg shadow-black/40">
            <img src={bannerCover} className="w-full h-[296px] object-cover"></img>
            <img src={logoGitHubBlog} className="absolute left-1/2 top-2/5 transform -translate-x-1/2 -translate-y-1/2" />
        </header>
    );
}