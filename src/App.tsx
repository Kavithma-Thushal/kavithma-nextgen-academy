import Home from "./views/pages/home.tsx";
import About from "./views/pages/about.tsx";
import Classes from "./views/pages/classes.tsx";
import Contact from "./views/pages/contact.tsx";
import Footer from "./views/components/footer.tsx";

export default function App() {
    return (
        <div>
            <Home/>
            <About/>
            <Classes/>
            <Contact/>
            <Footer/>
        </div>
    )
}