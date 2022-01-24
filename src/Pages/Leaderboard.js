import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import LeaderboardRow from "../Components/LeaderboardRow";
import axios from "axios";


export default function Leaderboard() {
    const [LB, setLB] = useState([]);


    useEffect(() => {
        axios
            .get("http://localhost:7800/api/getLeaderboard")
            .then((res) => {
                console.log(res);
                setLB(res.data);
            })
    }, []);

    return (
            
        <div id="d1" style={{height: "100vh"}}>
            
            <div id="bg">
                <div>
                    <Navbar />
                    <section className="text-light">
                        <section>
                            <div className="main my-3">
                                <div>
                                    <h1 className="text-center display-3">Leaderboard</h1>
                                    <hr className="w-50 mx-auto" />
                                </div>
                            </div>
                        </section>
                        <div class="container py-1 mt-5">
                            <div class="row">
                                <div class="col-lg-7 mx-auto bg-white rounded shadow">
                                    <div class="table-responsive">
                                        <table class="table table-fixed">
                                            <thead className="text-center mx-auto">
                                                <tr>
                                                    <th scope="col" class="col-3">Rank</th>
                                                    <th scope="col" class="col-3">Username</th>
                                                    <th scope="col" class="col-3">Name</th>
                                                    <th scope="col" class="col-3">Score</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {LB.map((LBrow, idx) => (
                                                    <LeaderboardRow key={idx} rank={LBrow.rank} username={LBrow.username} name={LBrow.name} score={LBrow.total_score}></LeaderboardRow>
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