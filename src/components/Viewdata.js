import React, { useRef, useState } from 'react'

import "../css/View.css"

function Viewdata() {


    const [addvalue, setValue] = useState("")
    const [valuearray, setvalueArray] = useState([])
    const indexno = useRef(-1)


    function showValue(e) {
        setValue(e.target.value)

    }




    function addinarray() {

        // const storeDataArray = [...valuearray, addvalue]

        if (addvalue === "") {
            alert("plz enter a value")
        }
        else {


            if (indexno.current > -1) {

                let updateDataArray = [...valuearray]
                updateDataArray[indexno.current] = addvalue
                setvalueArray(updateDataArray)
                indexno.current = -1

            } else {
                setvalueArray([...valuearray, addvalue])
            }

        }
        setValue("")

    }


    function updateItem(e, index) {

        const updateData = [...valuearray]

        setValue(updateData[index])
        indexno.current = index


    }


    function DropData(index) {

        const list = [...valuearray]
        list.splice(index, 1)
        setvalueArray(list)
        setValue("")

    }
    return (
        <div className='view-section'>


            <div className='container'>
                <div className='row'>
                    <div className='col-6'>

                        <input type="text" className='form-control' value={addvalue} onChange={showValue} placeholder='enter a task' />
                        <button type="button" onClick={addinarray} className="btn btn-primary mt-3">add</button>


                    </div>

                    <div className='col-6'>
                        <table className="table text-center table-striped">
                            <thead>
                                <tr>

                                    <th scope="col">Task</th>
                                    <th scope="col">Update</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    valuearray.length > 0 ? valuearray.map(function (value, index) {
                                        return (<tr key={index}>

                                            <td>{value}</td>
                                            <td><button type='button' onClick={(e) => { updateItem(e, index) }} className='btn btn-success'>Update</button></td>
                                            <td><button type='button' onClick={DropData} className='btn btn-danger'>Delete</button></td>

                                        </tr>
                                        )
                                    }) : (<tr> <td colSpan={4} align="center">No Data Found</td> </tr>)
                                }



                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Viewdata