import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
function FetchApi() {

    const navigate = useNavigate()

    const [userData, setUserdata] = useState([])


    //dark mode

    const [darkMode, setDarkMode] = useState({ backgroundColor: "white" })



    function msgg() {

        if (darkMode.backgroundColor === "white") {

            setDarkMode({ backgroundColor: "black" })
        } else {
            setDarkMode({ backgroundColor: "white" })
        }
    }



    const pageValue = useRef()



    async function getData(pageNo = 1) {


        const response = await fetch(`https://reqres.in/api/users?page=${pageNo}`)
        const dataOfuser = await response.json()
        console.log(dataOfuser.data)

        const userAllData = dataOfuser.data

        setUserdata([...userAllData])
    }


    useEffect(function () {

        getData()


    }, [])


    function GetPage() {


        const pageNo = pageValue.current.value
        getData(pageNo)

    }



    return (

        <div className='FetchApi' style={darkMode}>





            <div className='toggle-section d-flex  justify-content-end'>

                <div className="form-check form-switch">
                    <input className="form-check-input" onChange={msgg} type="checkbox"/>

                </div>

            </div>





            <div className='container'>
                <input type='text' placeholder='enter a page' ref={pageValue} /><br />
                <button type='button' onClick={GetPage} className='btn btn-success mt-2'>Show Page</button>
            </div>


            {/* <p>{userData}</p> */}


            <table className='table text-center mt-4'>

                <thead>
                    <tr>
                        <th>Index no</th>
                        <th>Email</th>
                        <th>First name</th>
                        <th>Last Name</th>
                        <th>Images</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        userData.length > 0 ? (typeof userData !== "undefined" && Array.isArray(userData) && userData.map(function (value, index) {
                            return (
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.email}</td>
                                    <td>{value.first_name}</td>
                                    <td>{value.last_name}</td>
                                    <td><img src={value.avatar} /></td>
                                    <td><button onClick={(e) => { navigate(`/viewprofile/${value.id}`) }} className='btn btn-danger'>View Profile</button> </td>
                                </tr>
                            )
                        })
                        ) : <tr><td align='center' colSpan={5}>Data Not Found</td></tr>
                    }

                </tbody>
            </table>



        </div>

    )
}

export default FetchApi