import { useState } from "react";

function DoAlertDel({ alertDel}) {

    if(alertDel === null) {
        return null;
    };
    console.log('function DoAlertDel', alertDel);
    return (
            <div className="modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">Error</h2>
                            <button type="button" className="btn-close" onClick={() => setAlertDel(null)}></button>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setAlertDel(null)}></button> */}
                        </div>
                        <div className="modal-body">
                            <p>Account : {alertDel.name} {alertDel.surname}</p>
                            {alert.err === 1 ?
                            <p>The balance of the account is greater than zero.</p>
                            :
                            <p>There are insufficient funds in the account to perform the operation</p>}
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default DoAlertDel;