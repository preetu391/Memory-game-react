import Typewriter from 'typewriter-effect';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
      <h1 className='text'><Typewriter
           options={{
            strings: ['Memory Game'],
            autoStart: true,
            loop: true,
          }}
          /></h1>
          
          <Cards/>
          
    </div>
  );
}

export default App;
