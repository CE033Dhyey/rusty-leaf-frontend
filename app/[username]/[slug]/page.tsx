"use client"

import axios from "axios"
import { useState, useEffect } from "react";

export default function Page({params}: {params: {slug: string, username: string}}) {
    const [content, setContent] = useState({})
    useEffect(() => {
        makeRequest().then((data) => {console.log("Success")}).catch((err) => `Error Occurred ${err}`)
    }
        , [])
    async function makeRequest(){
        let res = await axios.get(`http://127.0.0.1:8000/pages/get-page/${params.username}/${params.slug}`);
        setContent(res.data);
        console.log(res.data);

    }
     return<><h1 className="text-white">{params.username} / {params.slug}</h1>
     <h1 className="text-white font-bold">
     {content.title}
     {content.content}
     {content.slug}
     </h1>
     
     </>
  }
  