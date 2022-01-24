import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import PredictionBox from "../Components/PredictionBox";
import axios from "axios";

export default function Predictions() {

    const [games, setGames] = useState([]);

    // add date to results table, compare user date and date in table to get closest matchday and put a useeffect on load to do this 
    // run below useeffect when matchday gets set

    // add gameweek to predictions table

    useEffect(() => {
        axios
            .get("http://localhost:7800/api/getFixtures", {
                params: {
                    matchday: 2,
                }
            })
            .then((res) => {
                console.log(res);
                setGames(res.data);
            })
    }, []);

    return (

        <div style={{height: "100vh"}} >
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
                                <form style={{ width: "850px" }}>
                                    <table>
                                        {games.map((game, idx) => (
                                            <PredictionBox key={idx} matchId={game.match_id} homeTeam={game.home_team} awayTeam={game.away_team}></PredictionBox>
                                        ))}
                                    </table>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}