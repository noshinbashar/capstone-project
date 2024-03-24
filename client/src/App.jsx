import Header from "./components/Header/Header";
import MyGallery from "./pages/MyGallery/MyGallery";
// import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>

          <Route path="/" element={<MyGallery />} />
          <Route path="/:id" element={<MyGallery />} />
          {/* <Route path="/uploadpage" element={<UploadPage />} /> */}

        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;



