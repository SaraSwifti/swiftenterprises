// export default InvestorSignIn;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function InvestorSignIn() {
  let navigate = useNavigate();
  // this turns my fields into an object that stay connected and saves the corresponding value
  const [userLoggin, setUserLoggin] = useState({
    email: "",
    passWord: "",
  });
  //will create a separate cb function to compare the PW to see who it is: Come back to this with jeff.

  //this funcion will allow just the username or PW to be reentered or changed but not both
  function handleChange(event) {
    const newValue = event.target.value;
    const inputName = event.target.name;
    // This resets the one field without loosing another feild's previous value
    setUserLoggin((preValue) => {
      if (inputName === "email") {
        return {
          email: newValue,
          passWord: preValue.passWord,
        };
      } else if (inputName === "passWord") {
        return {
          email: preValue.email,
          passWord: newValue,
        };
      }
    });
  }

  function handleClick(e) {
    e.preventDefault();

    // console.log("this is our password", typeof userpw);
    if (userLoggin.passWord === "124") {
      console.log(userLoggin.passWord);
      navigate("/rusekpage");
      
      // navigate.push("/rusekpage"); use when useHistory was previously used.
    } else if (userLoggin.passWord === "123") {
      navigate("/investorpage");
      // navigate.push("/investorpage"); previous use when useHistory was previously used.
      console.log(userLoggin.passWord);
    } else {
      alert(
        "Access denied. Please contact Dr. Rusek should you want to become an investor"
      );
    }
  }

  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="max-w-4xl mx-auto p-2 ">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              name="email"
              alt="email field to type your email into"
              placeholder="you@example.com"
              onChange={handleChange}
              value={userLoggin.email}
              id="outlined-email-input"
              label="Email"
              type="email"
                      />
                         <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              onChange={handleChange}
              alt="Password field to type your password into"
              value={userLoggin.passWord}
              id="outlined-password-input"
              label="Password"
              type="password"
              name="passWord"
            />
            <button
              className="mt-2"
              variant="outlined"
              onClick={handleClick}
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InvestorSignIn;
