import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import UserPredictionRow from "../Components/UserPredictionRow";
import axios from "axios";

export default function UserPredictions() {

    const [gameWeek, setGameWeek] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38])
    const [selectedGW, setSelectedGW] = useState();
    const [username, setUsername] = useState();
    const [userPredictions, setUserPredictions] = useState([]);

    useEffect(() => {
        setUsername(sessionStorage.getItem("userName"));
    }, [])

    useEffect(() => {
        axios
            .get("/api/getUserPredictions", {
                params: {
                    gameweek: selectedGW,
                    username: username
                }
            })
            .then((res) => {
                console.log(res.data);
                setUserPredictions(res.data);
            })
    }, [selectedGW])

    return (
        <div id="d1" style={{ height: "100vh" }}>
            <div id="bg">
                <div>
                    <Navbar />
                    <div className="text-light">
                        <section>
                            <div className="main my-3">
                                <div>
                                    <h1 className="text-center display-3">Gameweek Scores</h1>
                                    <hr className="w-50 mx-auto" />
                                </div>
                            </div>
                        </section>
                        <div className="d-flex justify-content-center text-center"><div className=" form-group ">
                            <label for="gw" className="form-label mx-2">Select the GW you want to view your predictions for: </label>
                            <select value={selectedGW} onChange={(e) => setSelectedGW(e.target.value)} style={{width: "150px"}} className="form-control mx-auto" id="gw" placeholder="Gameweek" required>
                            <option value="" disabled selected id="ft_placeholder">Gameweek</option>
                            {gameWeek.map((gw, idx) => (
                                    <option key={idx}>{gw}</option>
                                ))}
                            </select>
                        </div></div>
                        <div class="container py-1">
                            <div class="row">
                                <div class="col-lg-8 mx-auto bg-white rounded shadow">
                                    <div class="table-responsive">
                                        <table class="table table-fixed">
                                            <thead className="text-center mx-auto">
                                                <tr>
                                                    <th scope="col" class="col-4">Home Team</th>
                                                    <th scope="col" class="col-2">Goals</th>
                                                    <th scope="col" class="col-2">Goals</th>
                                                    <th scope="col" class="col-4">Away Team</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {userPredictions.map((pred, idx) => (
                                                    <UserPredictionRow key={idx} homeTeam={pred.home_team} awayTeam={pred.away_team} pred_hg={pred.pred_home_goals} pred_ag={pred.pred_away_goals}></UserPredictionRow>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}