import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import GWtotal from "../Components/GWtotal";
import axios from "axios";


export default function GameweekTotal() {
    const [GW, setGW] = useState([]);
    const [username, setUsername] = useState();

    useEffect(() => {
        setUsername(sessionStorage.getItem("userName"));
    }, [])

    useEffect(() => {
        axios
            .get("http://localhost:7800/api/getGameweekScores", {
                params: {
                    username: username,
                }
            })
            .then((res) => {
                console.log(res);
                setGW(res.data);
            })
    }, [username]);

    return (

        <div id="d1" style={{ height: "100vh" }}>

            <div id="bg">
                <div>
                    <Navbar />
                    <section className="text-light">
                        <section>
                            <div className="main my-3">
                                <div>
                                    <h1 className="text-center display-3">Gameweek Scores</h1>
                                    <hr className="w-50 mx-auto" />
                                </div>
                            </div>
                        </section>
                        <div class="container py-1">
                            <div class="row">
                                <div class="col-lg-3 mx-auto bg-white rounded shadow">
                                    <div class="table-responsive">
                                        <table class="table table-fixed">
                                            <thead className="text-center mx-auto">
                                                <tr>
                                                    <th scope="col" class="col-6">Gameweek</th>
                                                    <th scope="col" class="col-6">Points</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                {GW.map((GWrow, idx) => (
                                                    <GWtotal key={idx} gw={GWrow.gameweek} gw_points={GWrow.gw_score} total={GWrow.total_score}></GWtotal>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </section>
                </div>

            </div>
        </div>


    )
}