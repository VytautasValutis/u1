function List({ accList }) {

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
                        accList.length ?
                            accList.map((w, i) => <li key={i} className="list-group-item">{w.surname + ' '+ w.name}
                                {/* <div className="ed-button"></div> */}
                                {/* <div className="del-button" onClick={destroy(w)}></div> */}
                            </li>)
                            :
                            <li className="list-group-item">No wishes yet</li>
                    }
                </ul>
            </div>
        </div>
    )
}

export default List;