import React from 'react'
import img1 from './images/client.jpg'
function ClientSay() {
  return (
    <section className=' flex flex-col items-center justify-center gap-11 p-16'>
      <h1>What our clients say</h1>
      <p className=' w-80'>''Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non.
         Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.''</p>
        <div className=' gap-6 flex'>
            <div className=' rounded-bl-full'>
                <img src={img1}/>
            </div>
            <div>
            <h3>Courtney Alexander</h3>
            <p>Position, Company name</p>
            </div>
        </div>
    </section>
  )
}

export default ClientSay
