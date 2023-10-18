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
import { Routes, Route } from "react-router-dom";
import Contatto from "./home-components/contact-form";
export default function App() {
  return (
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
              <Map />
            </>
          }
        />
      </Routes>
      <RioFooter />
      <Whatsapp />
      <ScrollToTop />
    </>
  );
}
