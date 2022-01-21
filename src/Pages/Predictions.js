import React from "react";
import Navbar from "../Components/Navbar";
import PredictionBox from "../Components/PredictionBox";

export default function Predictions() {
    return (

        // get request to db to get fixtures of given gw. store the results in an array inside useState. map through the array
        // and you have to pass the name of the home team and away team and match id to the component.
        // inside the component you'll get the prediction and you have to do a post req to backend and insert into predictions table
        // username is in sessionstorage

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
                                <form style={{width: "850px"}}>
                                       {/* {values.map(val => (
                                           <PredictionBox homeTeam={val.homeTeam}></PredictionBox>
                                       ))} */}
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
                                    {/* <div className=" mt-4">
                                        <button type="submit"  className="btn btn-success w-100">Confirm</button>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}