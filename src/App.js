import "./App.css";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Pages from "./pages/Pages/Pages";
import Shop from "./pages/Shop/Shop";

import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Home />
      <Shop />
      <Blog />
      <Pages />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
