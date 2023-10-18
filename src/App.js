
import Navigation from "./Navbar";
import CarouselUno from "./carousel";
import About from "./About";
import Counter from "./Counter";
import RioForm from "./BookingForm";
import Gallery from './Gallery';
import Testimonials from './Testimonials'
import Rooms from "./Rooms";
import Map from "./Map"
import RioFooter from "./Footer";
import {images} from './data/imagesgallery';
import Whatsapp from "./components/whatsapp";
import ScrollToTop from "./components/scrollToTop";

export default function App() {

  return (
    <>
     <Navigation/>
     <CarouselUno/>
     <div className="spacer"></div>
     <About/>
     <div className="spacer"></div>
     <Counter/>
     <RioForm/>
     <div className="spacer"></div>
     <Gallery images={images}/>
     <div className="spacer"></div>
     <Testimonials/>
     <div className="spacer"></div>
     <Rooms/>
     <div className="spacer"></div>
     <Map/>
     <RioFooter/>
     <Whatsapp/>
     <ScrollToTop/>
    </>
  );
}

