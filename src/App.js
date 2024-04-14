import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo h-10 w-10" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      
      </header>

      <div className='text-green-400 text-[80px] bg-slate-900 min-h-screen flex flex-col md:flex-row justify-center items-center'>
          <button className='bg-white relative after:absolute after:bg-green-300 group p-10 hover:opacity-50 duration-300 flex item-center gap-4'>
            <h1>Button</h1>
            <span className='h-10 w-10 bg-amber-800 group-hover:rotate-45 duration-300'></span>
         </button>
         <button className='bg-red relative after:absolute after:bg-green-300 group p-10 hover:opacity-50 duration-300 flex item-center gap-4'>
            <h1>Button</h1>
            <span className='h-10 w-10 bg-amber-800 group-hover:rotate-45 duration-300'></span>
         </button>

        </div>


        <div className='text-green-400 text-[80px] bg-slate-900 min-h-screen grid grid-cols-1 md:grid-cols-3'>
          <button className='bg-white relative after:absolute after:bg-green-300 group p-10 hover:opacity-50 duration-300 flex item-center gap-4'>
            <h1>Button</h1>
            <span className='h-10 w-10 bg-amber-800 group-hover:rotate-45 duration-300'></span>
         </button>
         <button className='bg-red relative after:absolute after:bg-green-300 group p-10 hover:opacity-50 duration-300 flex item-center gap-4'>
            <h1>Button</h1>
            <span className='h-10 w-10 bg-amber-800 group-hover:rotate-45 duration-300'></span>
         </button>

        </div>

        
    </div>
  );
}

export default App;
