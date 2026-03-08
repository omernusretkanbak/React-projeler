

export default function Footer () 
  {

    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 20;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);
    
    return 
    (

      <footer>
        {
          isOpen ? (
            <p>Akşam {closeHour} 'e kadar sipariş verebilirsiniz.</p>
          ):
          (
            <p>İşyerimiz sabah {openHour}'da hizmete başlamaktadır</p>
          )
        }

      </footer>
    )

  }    
