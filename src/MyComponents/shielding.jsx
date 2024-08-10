import React from 'react';

export default function Shield() {
    // Define the color code for the background
    const myshield = {
        backgroundColor: "#4c2c77", // Use the HEX code for $indigo-200
    };

    return (
        <div style={myshield}>
            <div className="container" >
                <div className="text1  fw-bolder">RADIATION</div>
                <div className="text2 fw-bolder"><h1>Water-Based Shielding</h1></div>
                <div className="text3">
                    <h1>Advanced Water Shielding Technology</h1>
                </div>
                <div className="text4">
                    <p>
                        Water-based shielding is a promising approach to protecting both humans and electronic equipment from harmful 
                        radiation in space. This method leverages the natural radiation-absorbing properties of water to 
                        create a shield against cosmic rays and other forms of ionizing radiation. 
                        The concept involves surrounding a spacecraft or habitat with a layer of water, 
                        which can be stored in tanks or used as a structural component of the spacecraft itself.
                        As radiation particles interact with the water molecules, they transfer their energy and are absorbed, 
                        reducing the radiation exposure to the occupants and sensitive equipment.  
                        <br /><br /><br />
                        This approach offers several advantages, including:
                    </p>
                    <ul>
                        <li>High radiation absorption efficiency due to water's high hydrogen content</li>
                        <li>Low cost and availability compared to traditional radiation shielding materials</li>
                        <li>Multi-purpose functionality, as water can also be used for life support, propulsion, and thermal management</li>
                        <li>Potential for in-situ resource utilization, where water is extracted from celestial bodies to create radiation shielding</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
