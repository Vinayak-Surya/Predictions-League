import react from "react";

export default function PredictionBox() {
    return (
    <div className="d-sm-flex my-2">
        <p for="un" className="form-label my-1 text-center">Prediction</p>
        <input type="text" className="form-control mx-2" id="un"  />
        <h5 className="text-center"> : </h5>
        <input type="text" className="form-control mx-2" id="un" />
        <p for="un" className="form-label my-1 text-center">Prediction</p>
    </div>
)}