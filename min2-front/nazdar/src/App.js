import { Switch, Route} from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
      <Route exact path='/'>
        <div className='about'></div>
      </Route>
      <Route path='/ba'>
        <div className='ba' ></div>
      </Route>
      <Route path='/ta'>
        <div className='ta'></div>
      </Route>
      <Route path='/tc'>
        <div className='tc'></div>
      </Route>
      <Route path='/ni'>
        <div className='ni'></div>
      </Route>
      <Route path='/zi'>
        <div className='zi'></div>
      </Route>
      <Route path='/bb'>
        <div className='bb'></div>
      </Route>
      <Route path='/po'>
        <div className='po'></div>
      </Route>
      <Route path='/ke'>
        <div className='ke'></div>
      </Route>
      <Route path='/about'>
        <div className='about'></div>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
