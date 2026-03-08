export default function Product ({productObj}) 
  {//Paketlediğimiz productObj yi burada çağırıyoruz.
  

    // const imageUrl = "/public/img/1.jpg"; 1. ŞEKİLDE YAPIM
    // const title = "iPhone 16";
    // const description = "Lorem İpsum";
    // const price = 80000;

    if(!productObj.is_active) return null;//Eğer productObj içindeki item lardan birisi active değilse yani satışta değilse aşağıdaki kod bloğunu is_active değeri false item için çalıştırma demektir. 120. satırda productObj'in price özelliği eğer 100000 tl den düşükse discount .price-discount class ının CSS ini uygula. index.css e bak.

    return (
    <div className='card shadow-sm'>
      {/* <img src={imageUrl} alt="" />1. ŞEKİLDE YAPIM
      <h2>{title}</h2>
      <p>{description}</p>
      <span>{price} ₺</span>  */}
      <img className = 'card-img-top p-2 p-md-3 border-bottom' src= { "/public/img/"+productObj.image } alt="" />
          <div className='card-body'>
              <h2 className='card-title'> { productObj.title } </h2>
              <p className='card-text'> { productObj.description } </p>
              <span className='badge text-bg-success'> { productObj.price } ₺ </span>
          </div>
      
    </div>
    );
  }
