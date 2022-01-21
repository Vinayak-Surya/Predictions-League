import React from "react";
import Navbar from "../Components/Navbar";
import PredictionBox from "../Components/PredictionBox";

export default function Predictions() {
    return (
        <div id="d1">
            <div id="bg">
                <div>
                    <Navbar />
                    <section className="text-light">
                        <section>
                            <div className="main my-3">
                                <div>
                                    <h1 className="text-center display-3">Prediction</h1>
                                    <hr className="w-50 mx-auto" />
                                </div>
                            </div>
                        </section>
                        <div className=" d-flex justify-content-center">
                            <div>
                                <form style={{width: "275px"}}>
                                        <PredictionBox />   
                                        <PredictionBox />   
                                        <PredictionBox />
                                        <PredictionBox />
                                        <PredictionBox />
                                        <PredictionBox />
                                        <PredictionBox />
                                        <PredictionBox />
                                        <PredictionBox />
                                        <PredictionBox />
                                    <div className=" mt-4">
                                        <button type="submit" className="btn btn-success w-100">Confirm</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}