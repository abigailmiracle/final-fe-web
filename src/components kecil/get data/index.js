import React, {useState, useEffect} from "react";
import axios from "axios";
export default function GetData(){
    const [features, setFeatures]= useState([])
  useEffect(()=>{
    axios.get("http://localhost:3333/biodata").then(res=>setFeatures(res.data))
  }, [])
    return(
        <>
        {
            features.map(item=>{
              return(
                <>
                <tr>
                <td bgcolor="#0000FF">{`${item.list}`}</td>
                <td>{`${item.insideList}`}</td>
                </tr>
                </>
            )
            })
          }
        </>
    )
}