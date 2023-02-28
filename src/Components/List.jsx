function List(accList) {
    return (
        <div className="card mt-5">
            <div className="card-header">
                <h2>Account list</h2>
            </div>
            <div className="card-body">
                <ul className="list-group">
                    {
                        accList.length ?
                            accList.map(w => <li className="list-group-item">{w.surName}" "{w.name}
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