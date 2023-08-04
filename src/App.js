import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">   
      <BrowserRouter>   
        <Header/>
          <Routes>
            <Route path="/" element={<ProductListing/>}/>
            <Route path="/products/:productId"  element={<ProductDetail/>}/>
            <Route path="*" element={<NotFound/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>     
    </div>
  );
}

export default App;
