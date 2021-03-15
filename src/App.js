import "./App.css";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Pages from "./pages/Pages/Pages";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div>
      <Home />
      <Shop />
      <Blog />
      <Pages />
      <Contact />
    </div>
  );
}

export default App;
