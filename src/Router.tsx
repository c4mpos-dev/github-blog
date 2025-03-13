import { Routes, Route } from "react-router-dom"

import { DefaultLayout } from "./layouts/DefaultLayout.tsx";

import { Blog } from "./pages/Blog.tsx";
import { Post } from "./pages/Post.tsx";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Blog />} />
                <Route path="/post" element={<Post />}/>
            </Route>
        </Routes>
    );
}