import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Viewn = () => {
    const [newsdata, changenewsdata] = useState(
        { "status": "ok", "totalResults": 5011, "articles": [] }
    )
    const fetchData = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c1139f61f624a3abc81786995a761c7").then(
            (response) => {

                changenewsdata(response.data)

            }
        ).catch()
    }


    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">





                        <div className="row p-3 g-5">
                            {newsdata.articles.map(
                                (value, index) => {
                                    return (

                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                            <div class="card h-100" >
                                                <img src={value.urlToImage} class="card-img-top" alt="..."></img>
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.title}</h5>
                                                    <p class="card-text">{value.description}</p>
                                                    <a href={value.url} target="_blank" class="btn btn-primary">Detailed News</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}

export default Viewn