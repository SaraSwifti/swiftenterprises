import React from 'react';
import BeakerFCell from "../../images/Researchimg/FuelCell1.jpg";
import Diagramimg from "../../images/Researchimg/eVia.jpg";


const Dircell = () => {
    return (
    <>
        <div className="researchcontent" >
                <div className="diragramimage flex justify-between md:flex-col-1" >
                    <div className="celldiagram">
                        <img alt="Lab set up with testing of the Fuel Cell properties, two beakers and monitors" src={BeakerFCell}></img>
                    </div>
                    <div  className="celldiagram" >
                        <img alt="Diagram of the fuel cell connections to processess, battery and engine" src={Diagramimg}></img>
                    </div>
                  

                </div>
               

            </div>
        </>
        
    )
};

export default Dircell;