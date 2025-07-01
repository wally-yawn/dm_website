import "./BandContainer.css";
import bandMembers from '../data/bandmembers.json'
import { useState } from "react"
import BandMembers from "../BandMembers/BandMembers";

function BandContainer(){
  
  const[allBandMembers, setbandMembers] = useState(bandMembers)

  const dmBandMembers = allBandMembers.map((member, index) => {
    return (
      <BandMembers
      id={index}
      key={index}
      name={member.name}
      instrument={member.instrument}
      />
    )
  })

  return(
    <section className="container">
      <h2>This is the band container</h2>
      {dmBandMembers}
    </section>
  )
}

export default BandContainer;