import { items} from "../data";
import Product from "./Product";

export default function ProductList (){


  // const items = [];
  
  return (
    <> 
      
      {
        items.length > 0 ? //Eğer items.length içeriği boş değilse ürünleri listele.Boşsa 93. satırı    ekrana ver. Bu bir ternary operatörü "?" simgesi onu gösteriyor.
        (
          <div className='row row-cols-2 row-cols-md-3 row-cols-xl-4 g-4' id="product_list">
            {
              items.map((item,index) => (
                <div className='col' key = { index } >
                  <Product productObj = { item }/>
                </div>
                //ProductObj burada artık bir döngü ve her yeni ürünü otomatik ekleyecek.Ve indeks değerine göre key atayacak.Burada "item" [items] dizisindeki indekslenmiş her bir ürünü temsil ediyor.
                
                
                // image = { item.image }     (Buradaki product bilgilerini productObj olarak paketleyelim)
                // title = { item.title } 
                // description = { item.description }
                // price = { item.price }
              ))
                
            }  
          </div>
        ):
        (
        <p>Şu anda satışta olan ürünümüz bulunmamaktadır.</p>
        )
      }
    </>  
  );
}  
  