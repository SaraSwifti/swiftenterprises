import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";




function Login() {
    let navigate = useNavigate();
    // this turns my fields into an object that stay connected and saves the corresponding value
    const [userLoggin, setUserLoggin] = useState({
        email: "",
        passWord: ""
    });

    function handleChange(event) {
        const newValue = event.target.value;
        const inputName = event.target.name;
        // This resets the one field without loosing another feild's previous value
        setUserLoggin((preValue) => {
            if (inputName === "email") {
                return {
                    email: newValue,
                    passWord: preValue.passWord
                }
            } else if (inputName === "passWord") {
                return {
                    email: preValue.email,
                    passWord: newValue
                }
            }


        })


    }

    return (
        <>
            <div container className="InvestorContainer">

                <div className=""></div>
                <div  className="InvestForm">

                    <input
                        name="email"
                        onChange={handleChange}
                        value={userLoggin.email}
                        id="outlined-email-input"
                        label="Email"
                        type="email"


                    />
                </div>

                <div item xs={12} className="InvestForm">
                    <input
                        onChange={handleChange}
                        value={userLoggin.passWord}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name="passWord"
                    />
                </div>
               
                
                    <button className="btn-blue"
                       
                        onClick={(event) => {
                            event.preventDefault();
                            
                            // console.log("this is our password", typeof userpw);
                            if (userLoggin === "123") {
                                console.log('we are in investor page');
                                navigate("/investorpage");
                                // history.push("/investorpage");
                                console.log(userLoggin.passWord);
                              
                                
                            } else if (userLoggin.passWord === "124" && userLoggin.email.toLowerCase() ==='john.rusek@swiftenterprises.com' ) {
                                console.log('we are in the rusekpage');
                               
                                navigate("rusekpage");
                                console.log(userLoggin.passWord);
                                

                            } else {
                                alert("Access denied. Please contact Dr. Rusek should you want to become an investor");



                            }
                        }}

                    >
                        submit
                    </button>
                

                <div className="spacing for grid on end" />

            </div>
        </>
    )

                    }

    export default Login;