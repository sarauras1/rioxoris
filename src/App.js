import Navigation from "./home-components/navbar";
import CarouselUno from "./home-components/carousel";
import About from "./home-components/about";
import Counter from "./home-components/counter";
import BookingsForm from "./home-components/bookings-form";
import Gallery from "./home-components/galleria";
import Testimonials from "./home-components/testimonials";
import Rooms from "./home-components/camere";
import Map from "./home-components/map";
import RioFooter from "./home-components/footer";
import Whatsapp from "./components/whatsapp";
import ScrollToTop from "./components/scrollToTop";
import { Routes, Route, Link } from "react-router-dom";
import Contatto from "./home-components/contact-form";
import SignIn from "./admin/sign-in";
import { useState, useEffect } from "react";
import Loader from "./components/loader";
import { Container } from "react-bootstrap";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  //   the useEffect will run on the first rendering of the App component
  //   after two seconds (about how long it takes for the data to load)
  //   the loaded state will become true
  useEffect(() => {
    let timer = setTimeout(() => setLoaded(true), 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <>
          <Navigation />
          <CarouselUno />
          <div className="spacer"></div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <About id="about" />
                  <div className="spacer"></div>
                  <Counter />
                  <BookingsForm id="prenota" />
                  <div className="spacer"></div>
                  <Gallery id="galleria" />
                  <div className="spacer"></div>
                  <Testimonials />
                  <div className="spacer"></div>
                  <Rooms id="camere" />
                  <div className="spacer"></div>
                  <Contatto id="contatto" />
                  <div className="spacer"></div>
                  <Map />
                </>
              }
            />
            <Route />
            <Route path="/login" element={<SignIn />} />
          </Routes>
          <RioFooter />
          <Whatsapp />
          <ScrollToTop />
          <Container className="admin-container" fluid>
            <Link className="admin-link" to="/login">
              Admin
            </Link>
          </Container>
        </>
      )}
    </>
  );
}
