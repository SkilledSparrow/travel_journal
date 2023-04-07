import './App.css';
import Navbar from './components/Heading';
import Place from './components/Place';
import Data from './Data';

import world from "./assets/world.png"
import pointer from "./assets/pngtree-flat-red-location-sign-png-image_6553065.png"

function App() {
  const dataset = Data.map((itemDetails) =>{
    return(
      <Place 
      point={pointer}
      details={itemDetails}
    />
    )
    
  })
  return (
    <div className="app--container">
      <Navbar img={world}/>
      <section className='section--item'>
        {dataset}
      </section>
      
    </div>
  );
}

export default App;
