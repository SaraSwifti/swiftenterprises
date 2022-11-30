// import React, { useState } from 'react';
// import { useNavigate } from "react-router";
// import Card from "@material-ui/core/Card";
// //the code for the PDF upload <div >
//                     //     <label htmlFor="pdf">Report Date</label>
//                     //     <input
//                     //         Placeholder="upload PDF"
//                     //         type="text"
//                     //         className=""
//                     //         id="pdf"
//                     //         // value={form.pdf}
//                     //         // onChange={(e) => updateForm({ date: e.target.value })}
//                     //     />
//                     // </div> */
// function CreateReport() {
//     const [form, setForm] = useState({

//         date: "",
//         title: "",
//     });
//     const navigate = useNavigate();
//     //these methods will update the state properties.
//     function updateForm(value) {
//         return setForm((prev) => {
//             return { ...prev, ...value };


//         });
//     }
//     // This function will handle the submission.
//     async function onSubmit(e) {
//         e.preventDefault();

//         // When a post request is sent to the create url, we'll add a new record to the database.
//         const newReport = { ...form };

//         await fetch("http://localhost:5000/record/add", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newReport),
//         })
//             .catch(error => {
//                 window.alert(error);
//                 return;
//             });

//         setForm({ date: "", title: "" });
//         navigate("/");
//     }

//     return (
//         <div>
//             <h2>Post a new report</h2>
//             <Card>
//                 <form 
//                 onSubmit={onSubmit}
//                 >
//                     <div >
//                         <label htmlFor="date">Report Date</label>
//                         <input
//                             placeholder='Report date'
//                             type="text"
//                             className=""
//                             id="date"
//                             value={form.date}
//                             onChange={(e) => updateForm({ date: e.target.value })}
//                         />
//                     </div>
//                     <div >
//                         <label htmlFor="title">Report Date</label>
//                         <input
//                             Placeholder="Report Title"
//                             type="text"
//                             className=""
//                             id="title"
//                             value={form.title}
//                             onChange={(e) => updateForm({ title: e.target.value })}
//                         />
//                     </div>
                    
//                     <div>
//                         <button>Submit</button>
//                     </div>
//                 </form>
//             </Card>
//         </div>
//     );
// }


// export default CreateReport;