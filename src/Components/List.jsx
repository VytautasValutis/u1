import { useState } from "react";

function List({ accList, setDelAccount, setEditValue, setAlertDel }) {

    const [money, setMoney] = useState({});

    const doSetMoney = e => {
        const { name } = e.target;
        const mmm = e.target.value;
        setMoney({
            ...money, [name]: mmm,
        })
    }

    const doAddValue = (w, i) => {
        setEditValue({
            name: w.name,
            surname: w.surname,
            value: +w.value + +money[i],
            id: w.id,
        });
        setMoney({
            ...money, [i]: 0,
        })
    }

    const doRemValue = (w, i) => {
        if (w.value < +money[i]) {
            setAlertDel(w);
            return;
        }
        setEditValue({
            name: w.name,
            surname: w.surname,
            value: +w.value - +money[i],
            id: w.id,
        });
        setMoney({
            ...money, [i]: 0,
        })
    }

    const destroyAcc = w => {
        if (w.value > 0) {
            setAlertDel(w);
            return;
        }
        setDelAccount(w);
    }

    if (accList === null) {
        return (
            <div className="card mt-5">
                <div className="card-header">
                    <h2>LOADING ...</h2>
                </div>
            </div>
        )
    }

    return (
        <div className="card mt-5">
            <div className="card-header">
                <h2>Account list</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        accList.length ? accList.map((w, i) =>
                            <div key={i} className="list-group-item">
                                <div className="d-flex w-100 justify-content-between">
                                    <h3 className="mb-1">{w.surname + ' ' + w.name}</h3>
                                    <small> Values: {w.value}</small>
                                </div>
                                <div className="list-group list-group-horizontal">
                                    <input type="number" className="form-control h-50 mt-5" onChange={doSetMoney} name={i} value={money[i] ? money[i] : 0} />
                                    <button type="button" className="btn btn-outline-success m-4" onClick={() => doAddValue(w, i)}>add value</button>
                                    <button type="button" className="btn btn-outline-warning m-4" onClick={() => doRemValue(w, i)}>remove value</button>
                                    <button type="button" className="btn btn-outline-danger m-4" onClick={() => destroyAcc(w)}>remove account</button>
                                </div>
                            </div>
                        ) : <li className="list-group-item">No accounts yet</li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default List;