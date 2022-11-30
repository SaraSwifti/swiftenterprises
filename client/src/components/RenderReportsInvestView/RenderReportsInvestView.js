import React from "react";
// { useEffect, useState }
// import Card from "@mui/material/Card";
import InvestPdfView from "../../components/InvestPdfView/InvestPdfView";



// const Report =(props) => {
//     <Card>
//         <h2>{props.report.Date}</h2>
//         <h2>{props.report.Title}</h2>

//     </Card>
// }


function RenderReportsInvestView(props) {
    // useEffect( () => {
    //     fetchItems();
    // }, []);

    // const [reports, setReports] = useState([]);

    // const fetchItems = async () => {
    //     const data = await fetch('/reports');
    //     const reports = await data.json();
    //     setReports(reports);
    // };
    // this method fetches the records from the database
    // useEffect(() => {
    //     async function getReports() {
    //         const response = await fetch('/reports');

    //         if (!response.ok) {
    //             const message = "an error occured: ${response.statusText";
    //             window.alert(message);
    //             return;

    //         }
    //         const data = await fetch('/reports');
    //         const reports = await data.json();
    //         setReports(reports);
    //     };

    //     getReports();
    //     return;

        
    // }, );

    //this method will map out the records to the cards
   
        // return reports.map((reports) => {
        //     return (
        //         <>
        //         <Card>
        //             <h1>{reports.title}</h1>
        //             </Card></>
               
        //     );
        // })
    

    //  const getReports = async () => {
    //     const data = await fetch('/reports');
    //     const report = await data.json();
    //     setReports(report);
    // }


    return (
        <>
        <div className="card">
        <h1> this is where the investor care will render</h1>
        </div>
        {/* <Card> {
            reports.map(item => (
                <div>
                    <h2> This is where the reports will render</h2>
                    <h2>{item.title}</h2>
                    <h2>{item.date}</h2>
                </div>

            )) 
 } </Card>  */}
 <InvestPdfView />
             </>
    )

       
        


      
       
}

export default RenderReportsInvestView;