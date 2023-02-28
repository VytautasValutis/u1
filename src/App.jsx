import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import List from './Components/List';
import create, { read, destroy } from './Functions/localStorage';

const KEY = 'BANK-REACT';

function App() {

  const [accList, setAccList] = useState(null); 
  const [lastRefresh, setLastRefresh] = useState(Date.now());

  useEffect (() => {
    setAccList(read(KEY));
  }, [lastRefresh]);

  useEffect(() => {
    if (null === accList) {
      return;
    }
    create(KEY, accList);
  }, [accList]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Create setAccList={setAccList} />
            </div>
            <div className="col-8">
              <List accList={accList} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
