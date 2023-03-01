import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import List from './Components/List';
import { create, read, destroy, edit } from './Functions/localStorage';

const KEY = 'BANK-REACT';

function App() {

  const [account, setAccount] = useState(null);
  const [accList, setAccList] = useState(null);
  const [lastRefresh, setLastRefresh] = useState(Date.now());
  const [delAccount, setDelAccount] = useState(null);
  const [editValue, setEditValue] = useState(0);

  useEffect(() => {
    setAccList(read(KEY));
  }, [lastRefresh]);

  useEffect(() => {
    if (account === null) {
      return;
    }
    create(KEY, account);
    setLastRefresh(Date.now());
  }, [account]);

  useEffect(() => {
    if (delAccount === null) {
      return;
    }
    destroy(KEY, delAccount.id);
    setLastRefresh(Date.now());
  }, [delAccount]);
  
  useEffect(() => {
    if (editValue === null) {
      return;
    }
    edit(KEY, editValue, editValue.id);
    setLastRefresh(Date.now());
  }, [editValue])

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Create setAccount={setAccount} />
            </div>
            <div className="col-8">
              <List accList={accList} 
              setDelAccount={setDelAccount} 
              setEditValue={setEditValue} 
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
