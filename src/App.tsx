import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { UserProvider } from "./context/UserContext";

export function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </UserProvider>
  )
}