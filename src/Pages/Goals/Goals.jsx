import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function Goals() {
  return (
    <>
    <div>Goals</div>
    <section><GoalList /></section>
    <section><GoalDetails /></section>
    
    </>
  )
}

function GoalList() {
const [ apiData, setApiData] = useState([])

useEffect(() => {
  const url = 'https://api.mediehuset.net/sdg/goals'
   
  const getData = async () => {
    try {
            const result = await axios.get(url)
    setApiData(result.data.items)
    console.log(result.data.items);
    } catch (error) {
        console.log(error);
    }

  }
getData()

}, [setApiData])
return (
    <ul>
        {apiData && apiData.map(item => {
            return (
                <li key={item.id}><Link to={`/goals/${item.id}`}>{item.title}</Link></li>
            )
        })}
    </ul>
)
}

function GoalDetails() {
    const { id } = useParams()
    const [ apiData, setApiData] = useState({})

    useEffect(() => {
      const url = `https://api.mediehuset.net/sdg/goals/${id}`
       
      const getData = async () => {
        try {
                const result = await axios.get(url)
        setApiData(result.data.item)
        console.log(result);
        } catch (error) {
            console.log(error);
        }
    
      }
    getData()
    
    }, [id])
    console.log(id);
    return (
        <div style={{
            backgroundColor: `#${apiData.color}`,
        }}>
            <h1>Detalier</h1>
            
            {
                apiData && (
                    <>
                   <p>{apiData.id}</p> 
                   <p>{apiData.title}</p> 
                   <p>{apiData.byline}</p> 
                   </>
                )
            }
        </div>
    )
}

export {Goals}