import Header from "./components/Header/Header";
import MyGalleryPage from "./pages/MyGalleryPage/MyGalleryPage";
import AboutPage from "./pages/AboutPage/AboutPage"
import GalleryPage from "./pages/GalleryPage/GalleryPage"
import LogoPage from "./pages/LogoPage/LogoPage"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<LogoPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/mygallery" element={<MyGalleryPage />} />
          <Route path="/mygallery/:id" element={<MyGalleryPage />} />

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;



