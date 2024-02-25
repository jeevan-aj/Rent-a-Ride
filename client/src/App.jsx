import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignUp";
import SignUp from "./pages/SignUp";

import About from "./pages/About";
import Header from "./components/Header";
import styles from ".";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={`${styles.paddingX}  `}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sing-up" element={<SignUp />} />
            <Route path="/contact" element={<contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
