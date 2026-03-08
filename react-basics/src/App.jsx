import Header from "./components/Header";
import ProductList from "./components/ProductList";

export default function App() //Diğer dosyaların import işlemi için bu dosyayı export yapıyoruz.Yani dış erişime açıyoruz.
{
  return ( 
    
    <>
        <Header/>
        <div className='container mt-3'>
          <ProductList/>
       
        </div>
    </>
    ); 
}
  

