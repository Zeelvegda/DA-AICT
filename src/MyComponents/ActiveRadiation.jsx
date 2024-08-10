export default function ActiveRadiation(){
    const myactive = {
        backgroundColor: "#4c2c77", // Use the HEX code for $indigo-200
    };

    return(
        <>
        <div  style={myactive}>
        <div class="container">
      <div class="text1  fw-bolder">RADIATION</div>
      <div class="text2 fw-bolder"><h1>Active Radiation Shielding</h1></div>
      <div class="text3">
        <h1>Dynamic Radiation Defence</h1>
      </div>
      <div class="text4">
       <h5>
        Water-based shielding is a promising approach to protecting both humans and electronic equipment from harmful 
        radiation in space. This method leverages the natural radiation-absorbing properties of water to 
        create a shield against cosmic rays and other forms of ionizing radiation. 
        The concept involves surrounding a spacecraft or habitat with a layer of water, 
        which can be stored in tanks or used as a structural component of the spacecraft itself.
         As radiation particles interact with the water molecules, they transfer their energy and are absorbed, 
         reducing the radiation exposure to the occupants and sensitive equipment.  <br/><br/><br/>
         This approach offers several advantages, including:</h5>
   
        - High radiation absorption efficiency due to water's high hydrogen content<br/>
        - Low cost and availability compared to traditional radiation shielding materials<br/>
        - Multi-purpose functionality, as water can also be used for life support, propulsion, and thermal management<br/>
        - Potential for in-situ resource utilization, where water is extracted from celestial bodies to create radiation shielding<br/>
        </div>
    </div>
    </div>

        </>
    )
}