import './App.scss';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <div className="main">
      <div className="header">
        <div className='section one'>
          <h1>This is a page for beauty product search</h1>
        </div>
        <div className='section two'>
          <img src={require(`./resources/beauty-products.jpg`)} alt="beauty products" />
        </div>
      </div>
      <SearchComponent />
    </div>
  );
}

export default App;
