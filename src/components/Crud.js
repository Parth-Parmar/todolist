import React, { useRef, useState } from 'react'

function Crud() {

    const [addvalue, setAddvalue] = useState("")

    const [addvalueArray, setvalueArray] = useState([])

    const indexno = useRef(-1)




    function showData(e) {

        setAddvalue(e.target.value)

    }

    function AddItems() {

        if (indexno.current > -1) {


            let updatevalue = [...addvalueArray]
            updatevalue[indexno.current] = addvalue
            setvalueArray(updatevalue)

            indexno.current = -1

        } else {
            setvalueArray([...addvalueArray, addvalue])
        }
        setAddvalue("")



    }

    function DeleteTask(index) {

        const list = [...addvalueArray]

        list.splice(index, 1)
        setvalueArray(list)
        console.log(index)

    }

    function EditItems(e, index) {
        console.log(index)

        const valueArray = [...addvalueArray]
        setAddvalue(valueArray[index])
        indexno.current = index


    }



    return (
        <div className="Main-todo-section">

            <div className='container'>

                <div className='row'>
                    <div className='col-6'>
                        <div className='all-input'>
                            <div className="mt-3">
                                <input type="text" onChange={showData} value={addvalue} name='enter a task' placeholder="enter a task" className="form-control" />
                            </div>

                            <div className='button-section'>
                                <div className="mt-3 d-flex gap-3">
                                    <button placeholder="enter a task" onClick={AddItems} className="Add btn btn-primary">Add</button>


                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='col-6'>
                        <table class="table border border-1">
                            <tbody>
                                {
                                    addvalueArray.map(function (value, index) {
                                        return (
                                            <tr key={index}>
                                                <td>{value}</td>
                                                <td> <button onClick={DeleteTask} className="Delete btn btn-danger">Delete</button></td>
                                                <td><button onClick={(e) => { EditItems(e, index) }} className="Add btn btn-primary">Edit</button></td>
                                            </tr>

                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Crud


