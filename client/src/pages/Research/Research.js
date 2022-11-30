import React from 'react';
import "./Research.css";
// import Grid from "@mui/material/Grid";
// import Container from "@mui/material/Container";
import FlaskImg from "../../images/Researchimg/labphoto.jpg";
// import FuelLabPhoto from "../../images/Researchimg/fuellabphoto.jpg";

const Research = () => {
    return (
        <>



            <div className="researchcontent"  >
                <br />
                <h1>Research at its Finest. </h1>
                <div  className="researchimages" >
                    <img alt="Glass Flask with a clear liquid being held up for observation" src={FlaskImg}></img>
                </div>
                {/* <Grid item className="researchimages" >
                    <img alt="Lab set up with testing of the Fuel Cell properties, two beakers and monitors" src={FuelLabPhoto}></img>
                </Grid> */}




                <div className="researchimages">

                </div>

            </div>
        </>
    )
}
export default Research;