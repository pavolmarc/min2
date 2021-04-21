import { Switch, Route} from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
      <Route exact path='/ba'>
        <div className='ba'></div>
      </Route>
      <Route exact path='/ta'>
        <div className='ta'></div>
      </Route>
      <Route exact path='/tc'>
        <div className='tc'></div>
      </Route>
      <Route exact path='/ni'>
        <div className='ni'></div>
      </Route>
      <Route exact path='/zi'>
        <div className='zi'></div>
      </Route>
      <Route exact path='/bb'>
        <div className='bb'></div>
      </Route>
      <Route exact path='/po'>
        <div className='po'></div>
      </Route>
      <Route exact path='/ke'>
        <div className='ke'></div>
      </Route>
      <Route exact path='/about'>
        <div className='about'></div>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
