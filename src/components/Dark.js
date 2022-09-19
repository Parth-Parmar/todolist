import React, { useState } from 'react'

function Dark() {

    const [dark, setDarkmod] = useState({ backgroundColor: "white" })

    function ToggleStyle() {
        if (dark.backgroundColor === "white") {
            setDarkmod({ backgroundColor: "black" })
        }
        else {
            setDarkmod({ backgroundColor: "white" })
        }
    }

    return (

        <div className='main-body' style={dark}>
            <div className='toggle-section d-flex  justify-content-end'>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" onClick={ToggleStyle} id="flexSwitchCheckDefault" />
                </div>


            </div>
        </div>
    )
}

export default Dark