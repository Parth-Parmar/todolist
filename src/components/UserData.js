import React, { useState, useRef,useEffect } from 'react'

import {useParams,useNavigate} from "react-router-dom"

function UserData() {

    const navigate = useNavigate()

    const usepara = useParams()
    console.log(usepara)

    const [addUser, setUserData] = useState({})
    const userIdvalue = useRef()

    async function getUserData(userid = 0) {

        const response = await fetch(`https://reqres.in/api/users/${userid}`)
        const registerUser = await response.json()
        const storeUser = registerUser.data

        console.log(storeUser)
        setUserData({ ...storeUser})
    }



    useEffect(function () {
        getUserData(usepara.id)

    }, [usepara])


    function GetUser() {

        const userValue = userIdvalue.current.value
        getUserData(userValue)



    }

    return (
        <div className='UserData'>

            <div className='container'>
                {/* <div className='row'>

                    <div className='col-12'>
                        <div className="mb-3">

                            <input type="text" className="form-control" ref={userIdvalue} placeholder='enter a user id' />
                        </div>
                        <div className='mb-3'>
                            <button type='button' onClick={GetUser} className='btn btn-success'>show user</button>
                        </div>
                    </div>
                </div> */}


                <div className='row'>
                    <div className='col-12-md'>


                        <div className='user-information d-flex '>
                            <div className='user-personal-info'>
                                <h6 className='id'>{addUser.id}</h6>
                                <h6 className='email'>{addUser.email}</h6>
                                <h4 className='email'>{addUser.first_name}</h4>
                                <h4 className='email'>{addUser.last_name}</h4>

                            </div>
                            <img src={addUser.avatar} className="img-fluid" />
                            <button onClick={()=>{navigate("/")}} className='btn btn-success'>back</button>
                        </div>







                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserData