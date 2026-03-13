import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img:"card2.jpg",
      intro:"",
      tag:"Satisfied"
    },
    {
      img:"card1.jpg",
      intro:"",
      tag:"Undertaken"
    },
    {
      img:"card2.jpg",
      intro:"",
      tag:"Deserved"
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/> 
    </div>
  )
}

export default App
