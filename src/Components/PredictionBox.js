import react from "react";

export default function PredictionBox() {
    return (
    <div className="d-sm-flex my-2">
        <div className="row">
        <div className="col-1"></div>
            <div className="col-3"><p for="un" className="form-label my-1 text-center">RCD Espanyol de Barcelona</p></div>
            <div className="d-flex col-2"><input type="number" className="form-control" id="un"  />
        <h5 className="text-center mx-2"> : </h5>
        <input type="number" className="form-control" id="un"  />
        </div>
        <div className="col-3"><p for="un" className="form-label my-1 text-center">RCD</p></div>       
        <div className="col-3"><button type="submit"  className="btn btn-success mx-3">Confirm</button></div>
        </div>
    </div>
)}