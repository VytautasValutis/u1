import { useState } from "react";

function Create({ setAccount }) {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const doName = e => {
        setName(e.target.value);
    }

    const doSurname = e => {
        setSurname(e.target.value);
    }

    const createAcc = () => {
        if(name === '' && surname === '') {
            setAccount(null);
            return;
        }
        setAccount({
            name,
            surname,
            value: 0,
            money: 0,
        })
        setName('');
        setSurname('');
    }


    return (
        <div className="card mt-5">
            <div className="card-header">
                <h2>Create account</h2>
            </div>
            <div className="card-body">
                <div className="m-3">
                    <label className="form-label">Enter Your name</label>
                    <input type="text" className="form-control" onChange={doName} value={name} />
                </div>
                <div className="m-3">
                    <label className="form-label">Enter Your surname</label>
                    <input type="text" className="form-control" onChange={doSurname} value={surname} />
                </div>
                <button type="button" className="btn btn-outline-primary m-4" onClick={createAcc}>add account</button>
            </div>
        </div >
    )
}

export default Create;