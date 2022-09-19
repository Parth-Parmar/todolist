import React, { useRef, useState } from 'react'

function Todo() {

    const [task, setTask] = useState("");
    
    const [description, setDescription] = useState("");

    const [storevalue, setStorevalue] = useState([]);

    const indexno = useRef(-1)



    function submitData() {
        if (task === "" || description === "") {
            return alert("Plz Enter a Task")
        } else {

            if (indexno.current > -1) {

                let updatevalue = [...storevalue]

                updatevalue[indexno.current] = {
                    task: task,
                    description: description
                }
                setStorevalue(updatevalue)
                indexno.current = -1

            } else {

                const storevalueObject = { task: task, description: description };
                setStorevalue([...storevalue, storevalueObject]);
            }


            setTask("")
            setDescription("")
            console.log(storevalue)

        }




    }


    function DeleteTask(e) {

        const list = [...storevalue]

        list.splice(e, 1)
        setStorevalue(list)

    }


    function EditItems(e, index) {

        const updateValuearray = [...storevalue]
        setTask(updateValuearray[index].task)
        setDescription(updateValuearray[index].description)
        indexno.current = index
        console.log(index)


    }

    return (
        <div className='todo-list-app'>

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-lg-12'>
                        <div className='all-data'>
                            <h2 className='heading text-center pt-3'>Todo-list</h2>

                            <div className='group-input'>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">Task Name</label>
                                    <input type="text" onChange={(e) => setTask(e.target.value)} value={task} className="form-control" placeholder="enter a task name" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Task Description</label>
                                    <textarea className="form-control" onChange={(e) => setDescription(e.target.value)} value={description} placeholder='enter a description of task' rows="3"></textarea>
                                </div>
                                <div className='mb-3'>
                                    <button className='btn btn-primary' onClick={submitData} >Add Task</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



                <div className='row'>
                    <div className='col-md-12 col-lg-12'>

                        <table className="table mt-5 text-center">
                            <thead>
                                <tr>

                                    <th scope="col">Task</th>
                                    <th scope="col">Task Description</th>
                                    <th scope="col">Update Task</th>
                                    <th scope="col">Remove Task</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    storevalue.length > 0 ? storevalue.map(function (value, index) {
                                        return (

                                            <tr key={index}>

                                                <td>{value.task}</td>
                                                <td>{value.description}</td>
                                                <td><button className='btn btn-success' onClick={(e) => { EditItems(e, index) }}>Edit Task</button></td>
                                                <td><button className='btn btn-danger' onClick={DeleteTask}>Delete Task</button></td>


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

export default Todo