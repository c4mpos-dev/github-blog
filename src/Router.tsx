import { Routes, Route } from "react-router-dom"

import { DefaultLayout } from "./layouts/DefaultLayout.tsx";

import { Blog } from "./pages/Blog.tsx";
import { Repository } from "./pages/Repository.tsx";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Blog />} />
                <Route path="/repository/:name" element={<Repository />}/>
            </Route>
        </Routes>
    );
}