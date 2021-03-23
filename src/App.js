import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Pages from "./pages/Pages/Pages";
import Shop from "./pages/Shop/Shop";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Confirmation from "./pages/Shop/pages/Confirmation";
import ProductCheckout from "./pages/Shop/pages/ProductCheckout";
import ProductDetails from "./pages/Shop/pages/ProductDetails";
import ShopCategory from "./pages/Shop/pages/ShopCategory";
import ShoppingCard from "./pages/Shop/pages/ShoppingCard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/shop/confirmation" component={Confirmation} />
        <Route path="/shop/product_checkout" component={ProductCheckout} />
        <Route path="/shop/product_details" component={ProductDetails} />
        <Route path="/shop/shopping_card" component={ShoppingCard} />
        <Route path="/shop/shop_category" component={ShopCategory} />
        <Route path="/blog" component={Blog} />
        <Route path="/pages" component={Pages} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
