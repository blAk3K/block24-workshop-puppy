import {puppyList} from './data.js'
import './App.css'
import { useState } from 'react'
function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)
  console.log("puppyList:", puppyList);
 

const featurePup = puppies.find((pup)=>pup.id === featPupId)
console.log(featurePup)

  return (
    <>
      <div className="App">
        {
          puppies.map((puppy) => {
            return (
               <p onClick= {()=>{setFeatPupId(puppy.id)}} key={puppy.id}>
                  {puppy.name} 
               </p>
            ); 
          })}
          {featPupId && (
            <div>
              <h2>{featurePup.name} </h2>
              <ul>
                <li>
                  age:{featurePup.age}
                </li>
                <li>
                  email:{featurePup.email}
                </li>
              </ul>
            </div>
          )}
      </div>
      
    </>
  );
}

export default App
