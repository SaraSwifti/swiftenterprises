import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Import Worker using this for now but take it away once I have Mongoose uploading.
import { Worker } from "@react-pdf-viewer/core";
// Import the main Viewer component
import { Viewer } from "@react-pdf-viewer/core";
// Import the styles
import { zoomPlugin } from "@react-pdf-viewer/zoom";

//full screen plug-in
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// import { ExitFullScreenIcon, FullScreenIcon } from '@react-pdf-viewer/full-screen';
import "@react-pdf-viewer/core/lib/styles/index.css";
// Import styles of default layout. keep this for uploading and viewing regardless of the plugins
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Import styles
import "@react-pdf-viewer/zoom/lib/styles/index.css";
// Import styles for full screen
import "@react-pdf-viewer/full-screen/lib/styles/index.css";

//This is for the temporary viewing before submission
function ReportIntake() {
  const [pdfFile, setPdfFile] = useState(null);
  //file error state
  const [pdfError, setPdfError] = useState("");
  //Hook for just the PDF and ut's title
  const [pdfFileForm, setPdfFileForm] = useState({
    // pdfFile: null,
    pdfFileName: "",
  });
  //still trying to figure out how this works//
  const navigate = useNavigate();

  // zoom plugin instance
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;
  // creating new plugin instance full screen
  const fullScreenPluginInstance = fullScreenPlugin();
  const { EnterFullScreen } = fullScreenPluginInstance;

  // These methods will update the state properties.
  function updatePdfFileForm(value) {
    return setPdfFileForm((prev) => {
      return { ...prev, ...value };
    });
  }

  //this sets the form if anything has changed. Doesn't seem to be working this time
  // function updateForm(value) {
  //     return setPdfFileForm((prev) => {
  //       return { ...prev, ...value };
  //     });
  //   }

  // function Create (event) {
  //   const newValue = event.target.value;
  //   const inputName = event.target.name;
  //   // This resets the one field without loosing another feild's previous value
  //   setPdfFileForm((preValue) => {
  //       if (inputName === "pdffilename") {
  //           return {
  //               pdffilename: newValue,

  //           }

  //   }})}

  //handle file onChange event

  const handleFile = (e) => {
    const allowedFiles = ["application/pdf"];
    let selectedFile = e.target.files[0];
    console.log(selectedFile.type);
    if (selectedFile) {
      if (selectedFile && allowedFiles.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfError("");
          setPdfFile(e.target.result);
          // This will store and set the file if it is an pdf
        };
      } else {
        setPdfError("Not a valid pdf: Please select only PDF");
      }
    } else {
      console.log("please select a PDF");
    }
  };
  //still trying to figure out how this works//
  //  const navigate = useNavigate();
  //This functin will handle the submission
  // let navigate = useNavigate();
  async function onSubmit(event) {
    event.preventDefault();

    // const newValue = event.target.value;
    // const inputName = event.target.name;
    // // This resets the one field without loosing another feild's previous value
    // setPdfFileForm((preValue) => {
    //     if (inputName === "pdffilename") {
    //         return {
    //             pdfFileName: newValue,

    //         }

    // }})

    //     // When post request is sent to the create url, we'll add a new record to the database
    const newReport = { ...pdfFileForm};

    await fetch("http://localhost:5000/report/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReport),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setPdfFileForm({ pdfFileName: "" });
    // ///this is where I need to figure out how to navigate it back to the rusekpage with the reports rendering on the right and reset on the left/

    navigate("/rusekpage");
  }

  return (
    <div>
      {/* Upload PDF */}
      <form>
        <label>
          <h5>Upload PDF</h5>
        </label>

        <br></br>

        {/* Input for pdf */}
        <input
          type="file"
         
          onChange={handleFile}
        ></input>

        {/* To display an error message in case user selects a file other than pdf */}
        {pdfError && <span className="text-danger">{pdfError}</span>}
      </form>
      {/* View PDF */}
      <h5>View PDF </h5>
      <div className="viewer">
        {/* Render if we have a PDF */}
        {pdfFile && (
          <div className="visible z-40">
            <form onSubmit={onSubmit}>
              <h1>Please submit form and PDF for data storage when ready</h1>
              <input
                
                type="text"
                placeholder="Report Title"
                id="pdfFileName"
                value={pdfFileForm.pdfFileName}
                onChange={(e) =>
                  updatePdfFileForm({ pdfFileName: e.target.value })
                }
              ></input>
              <button className="visable z-40" onClick={onSubmit}>
                Submit to investors when ready
              </button>
            </form>
            {/* // remove once mongoose is engaged worker is for temp storage */}

            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
              <div
                className="rpv-core__viewer"
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.3)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    backgroundColor: "#eeeeee",
                    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    justifyContent: "center",
                    padding: "4px",
                  }}
                >
                  <ZoomOutButton />
                  <ZoomPopover />
                  <ZoomInButton />

                  {/* the Enterfullscreen button and functionality I need to get the zoom buttons to come in some how */}
                  <EnterFullScreen></EnterFullScreen>
                </div>
                <div
                  style={{
                    flex: 1,
                    overflow: "hidden",
                  }}
                >
                  <Viewer
                    fileUrl={pdfFile}
                    plugins={[zoomPluginInstance, fullScreenPluginInstance]}
                  ></Viewer>
                </div>
              </div>
              ;
            </Worker>
          </div>
        )}
        {/* Render this if the pdf state is null */}
        {!pdfFile && <> No file is selected yet</>}
      </div>
    </div>
  );
}
export default ReportIntake;
