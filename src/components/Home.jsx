import React, { useEffect, useState } from "react"
import { getDocs,collection } from "firebase/firestore"

import { database } from "../config"

function Home(){

    const [vals, setVals] = useState([])

    const value = collection(database,'users')

    useEffect(() =>{
        const getData = async() => {
            const dbvalue = await getDocs(value)
            setVals(dbvalue.docs.map(doc=>({...doc.data(),id:doc.id})))
        }
        getData()
    })

    return(
        <div>
            <div className="home-1">
                <div className="home-1-body">
                    <h1>Ремонт цифровой техники</h1>
                    <p>Быстрый и качественный ремонт всех видов цифровой техники с гарантией и бесплатной диагностикой</p>
                </div>
            </div>


            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium culpa hic debitis impedit nihil tempora! Pariatur sequi vero culpa minus dolorum iure hic corporis. Voluptate non odit architecto iste incidunt?</p>
            <div>
            {
                vals.map(values =>
                <div style={{display:"flex"}}>
                    <div style={{padding:"0 10px 0 10px"}}>{values.surname}</div>
                    <div style={{padding:"0 10px 0 10px"}}>{values.name}</div>
                    <div style={{padding:"0 10px 0 10px"}}>{values.lastname}</div>
                </div>
                )
            }
        </div>
        </div>
    )
}

export default Home