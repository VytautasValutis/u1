import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.scss';
import List from './Components/List';

function App() {

  const [accList, setAccList] = useState(null); 

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="row">
            <div className="col-4">
              Create
              {/* <Create setCreateData={setCreateData} /> */}
            </div>
            <div className="col-8">
              <List accList={accList} />
              {/* <List list={list} setDeleteData={setDeleteData} setModalData={setModalData} /> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
