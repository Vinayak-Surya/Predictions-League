import React from "react";
import Navbar from "../Components/Navbar";

export default function Predictions() {
    return (
        <div id="d1">
        <div id="bg">
            <div style={{ backdropFilter: "blur(3px)" }} id="d1">
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
                    <section className="mt-1 mx-auto">
                        <div className="container ms-auto" id="form">
                            <form>
                                <div className="d-sm-flex my-1">
                                    <label for="un" className="form-label mx-4 my-1">Prediction</label>
                                    <input type="text" className="form-control" id="un" placeholder="Prediction" />
                                </div>
                                <div className="d-sm-flex my-1">
                                    <label for="un" className="form-label mx-4 my-1">Prediction</label>
                                    <input type="text" className="form-control" id="un" placeholder="Prediction" />
                                </div>
                                <div className="d-sm-flex my-1">
                                    <label for="un" className="form-label mx-4 my-1">Prediction</label>
                                    <input type="text" className="form-control" id="un" placeholder="Prediction" />
                                </div>
                                <div className="d-sm-flex my-1">
                                    <label for="un" className="form-label mx-4 my-1">Prediction</label>
                                    <input type="text" className="form-control" id="un" placeholder="Prediction" />
                                </div>
                                <div className="d-sm-flex my-1">
                                    <label for="un" className="form-label mx-4 my-1">Prediction</label>
                                    <input type="text" className="form-control" id="un" placeholder="Prediction" />
                                </div>
                                <div className="d-sm-flex my-1">
                                    <label for="un" className="form-label mx-4 my-1">Prediction</label>
                                    <input type="text" className="form-control" id="un" placeholder="Prediction" />
                                </div>
                                <div className="d-sm-flex my-1">
                                    <label for="un" className="form-label mx-4 my-1">Prediction</label>
                                    <input type="text" className="form-control" id="un" placeholder="Prediction" />
                                </div>
                                <div className="d-sm-flex my-1">
                                    <label for="un" className="form-label mx-4 my-1">Prediction</label>
                                    <input type="text" className="form-control" id="un" placeholder="Prediction" />
                                </div>
                                <div className="d-sm-flex my-1">
                                    <label for="un" className="form-label mx-4 my-1">Prediction</label>
                                    <input type="text" className="form-control" id="un" placeholder="Prediction" />
                                </div>
                                <div className="d-sm-flex my-1">
                                    <label for="un" className="form-label mx-4 my-1">Prediction</label>
                                    <input type="text" className="form-control" id="un" placeholder="Prediction" />
                                </div>
                                <div className=" mt-4">
                                    <button type="submit" className="btn btn-success w-100">Confirm</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    </div>
    )
}