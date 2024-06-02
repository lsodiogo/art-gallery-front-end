import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import { Route, Switch } from "wouter";

import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import HomePage from "./views/HomePage";
import GalleryPage from "./views/GalleryPage";
import AboutPage from "./views/AboutPage";
import ContactPage from "./views/ContactPage";
import NotFoundPage from "./views/NotFoundPage";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <ScrollToTop />

      <Header />

      <Switch>

        <Route path="/">
          <HomePage />
        </Route>

        <Route path="/gallery">
          <GalleryPage />
        </Route>

        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route>
          <NotFoundPage />
        </Route>

      </Switch>

      <Footer />
    </>
  );
};


export default App;