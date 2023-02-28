function List({ accList, setDelAccount }) {

    const destroyAcc = w => {
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
                                    <input type="text" className="form-control h-50 mt-5" />
                                    <button type="button" className="btn btn-outline-success m-4">add value</button>
                                    <button type="button" className="btn btn-outline-warning m-4">remove value</button>
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