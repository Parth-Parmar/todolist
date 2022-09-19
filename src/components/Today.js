import React, { useRef, useState } from 'react'
import '../css/today.css'

function Today() {


    const [inputvalue, setInputValue] = useState({ task: "", description: "" })
    const [storeDataArray, setDataArray] = useState([])

    const indexno = useRef(-1)

function showValue(e) {


        let newEntry = { ...inputvalue, [e.target.name]: e.target.value }
        setInputValue({ ...newEntry })
    }

    function AddTask() {
        if (indexno.current > -1) {
            let updateValuearray = [...storeDataArray]

            updateValuearray[indexno.current] = inputvalue

            setDataArray(updateValuearray)
            indexno.current = -1

        } else {

            setDataArray([...storeDataArray, inputvalue])
        }
        setInputValue({ task: "", description: "" })


    }

    function EditItems(e, index) {

        const updateDataArray = [...storeDataArray]

        setInputValue(updateDataArray[index])


        indexno.current = index
    }

    function DeleteTask(index) {

        const list = [...storeDataArray]
        setDataArray(list)

        list.splice(index, 1)



    }





    return (

        <div className='Today-section'>

            <div className='container-md mt-5'>

                <div className='row'>
                    <h3 className='heading text-center'>To-do-list</h3>
                    <div className='col-md-12  d-flex justify-content-center align-items-center'>



                        <div className='all-input-fild ' style={{ width: "500px" }}>

                            <div className="mb-3">
                                <label htmlFor="Task" className="form-label" >Task</label>
                                <input type="text" name="task" onChange={showValue} value={inputvalue.task} className="form-control" placeholder='Enter a Task' />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="Description" className="form-label">Description</label>
                                <input type="text" name='description' onChange={showValue} value={inputvalue.description} className="form-control" placeholder='Enter Task Description' />
                            </div>


                            <div className='mb-3'>
                                <button type='button' onClick={AddTask} className='btn btn-primary'>Add Task</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-12'>
                    <div className='container-md'>

                        <table className='table text-center mt-5'>
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Task Description</th>
                                    <th>Update Data</th>
                                    <th>Delete Data</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    storeDataArray.map(function (value, index) {
                                        return (<tr key={index}>
                                            <td>{value.task}</td>
                                            <td>{value.description}</td>
                                            <td><button type='button' className='btn btn-success' onClick={(e) => { EditItems(e, index) }}>Edit</button></td>
                                            <td><button type='button' className='btn btn-danger' onClick={DeleteTask}>Delete</button></td>
                                        </tr>)
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

export default Today