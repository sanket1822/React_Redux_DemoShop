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
            <Route path="/" Component={ProductListing}/>
            <Route path="/products/:productId"  Component={ProductDetail}/>
            <Route path="*" component={NotFound} />
          </Routes>
        <Footer/>
        </BrowserRouter>
      
        
    </div>
  );
}

export default App;
