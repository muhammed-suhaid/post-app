import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewPost = () => {
    const [postData, changePostData] = useState(
        []
    )

    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{changePostData(response.data)})
        .catch()
    }

    useEffect(()=>{fetchData()},{})
    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Post ID</th>
                                    <th scope="col">User Id</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {postData.map((data, index) => {
                                    return (
                                        <tr>
                                            <td>{data.id}</td>
                                            <td>{data.userId}</td>
                                            <td>{data.title}</td>
                                            <td>{data.body}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewPost