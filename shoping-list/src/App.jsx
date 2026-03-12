import { useState } from "react";




function App() {
  const [items,setItems] = useState([]);

  function handleAddItem (item){

    setItems((items)=> [...items,item]);//...items seperate operatörü

  }

  function handleDeleteItem (id) {
    setItems(items => items.filter(item => item.id !== id));
  }
  return (
    <div className="app">
      <Header/>
      <Form onAddItem={handleAddItem}/>
      <List items={items} onDeleteItem ={handleDeleteItem} />
      <Summary items={items}/>

    </div>

    
  );
}

function Header () {
  return (
  <h1>🛒 Shopping List</h1>)
}
function Form ({onAddItem}){ 

  const [title,setTitle] = useState('');
  const [quantity,setQuantity] =useState(1);
  

  function handleFormSubmit (e){
    e.preventDefault();
    const item= {id: Date.now() , title , quantity, completed:false};
    console.log(item);

    onAddItem(item);

    setTitle('');
    setQuantity(1);

  
  }
  return(
    <form className="form" onSubmit={handleFormSubmit}>
      <input type="text" placeholder="Ürün adı giriniz" value= {title} onChange={(e)=> setTitle(e.target.value)}/>
      <select value= {quantity} onChange={(e)=> setQuantity(Number(e.target.value))}>
        {
          Array.from({length:10},(v,i) => i+1)
            .map(num => <option value= {num} key= {num} > {num}</option>)
        }
      </select>
      <button type="submit">Ekle</button>  
      
    </form>    
  );
}
function List ({items , onDeleteItem}) {
    return <>
    {
    items.length > 0?(<div className="list">
        <ul>
          {items.map((i,index) =>(<Item item = {i} key={index} onDeleteItem={onDeleteItem} />))}
          
        </ul>
      </div>
    ): 
    <p>Ürün listesi boş</p>
    }
    </>;
      
    
  }
  function Item ({ item ,onDeleteItem}){
    return(
      <li>
        <span style = {item.completed ? {textDecoration:"line-through"}:{}}>{item.quantity} {item.title}</span>
        <button onClick={() => onDeleteItem(item.id) }>X</button>
      </li>
    );
  }
  function Summary ({items}) {
    const totalQuantity = items.reduce((sum,item)=>sum+item.quantity,0);

    
   return (
    <footer className="summary">
      {items.length > 0 
      ? `Alışveriş sepetinizde ${items.length} ürün bulunmaktadır.` 
      : "Alışveriş sepetiniz boş"}
    </footer>
  );

  }  
  


export default App
