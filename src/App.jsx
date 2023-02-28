import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import List from './Components/List';
import { create, read, destroy } from './Functions/localStorage';

const KEY = 'BANK-REACT';

function App() {

  const [account, setAccount] = useState(null);
  const [accList, setAccList] = useState(null);
  const [lastRefresh, setLastRefresh] = useState(Date.now());

  useEffect(() => {
    if (account === null) {
      return;
    }
    create(KEY, account);
  }, [account]);


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Create setAccount={setAccount} />
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
