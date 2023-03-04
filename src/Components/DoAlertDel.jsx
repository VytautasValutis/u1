import { useState } from "react";

function DoAlertDel({ alertDel, setAlertDel }) {

    if (alertDel === null) {
        return null;
    };

    return (
        <>
            <div className="modal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">Error</h2>
                            <button type="button" className="btn-close" onClick={() => setAlertDel(null)}></button>
                        </div>
                        <div className="modal-body">
                            <p>Account : {alertDel.name} {alertDel.surname}</p>
                            {+alertDel.err > 1 ?
                                <p>Value is too low</p> :
                                <p>Value is not equal zero.</p> 
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DoAlertDel;