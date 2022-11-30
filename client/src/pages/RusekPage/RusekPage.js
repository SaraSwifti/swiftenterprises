import React from "react";
import ReportIntake from "../../components/ReportIntake/ReportIntake";
import RenderReportsRusekView from "../../components/RenderReportsRusekView/RenderReportsRusekView";

const RusekPage = () => {
  return (
    <>
      <div className="rusekcontent">
        <div className="  bg-white py-10 sm:py-5 lg:py-">
          <div className="sm:text-center border-b-4">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Rusek Upload Page
            </p>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Report Upload Page: Site administrators only Please.
            </p>
          </div>
         
            <div className="flex flex-row justify-between px-10 mt-20 mx-auto max-w-7xl lg:px-8">
              
                      {/* <PdfFormCreate /> */}
                      <div className="p-5 border-dashed border-4">
                <ReportIntake />
           
</div>
             
                <RenderReportsRusekView />
        
            </div>
         
        </div>
      </div>
    </>
  );
};

export default RusekPage;
