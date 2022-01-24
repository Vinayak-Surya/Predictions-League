import React, { useEffect, useState, useContext } from "react";
import Navbar from "../Components/Navbar";
import PredictionBox from "../Components/PredictionBox";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { MatchDayContext } from "../MatchDayContext";

export default function Predictions() {

    const [games, setGames] = useState([]);
    const navigate = useNavigate();
    const {matchday, setMatchday} = useContext(MatchDayContext);

    // add date to results table, compare user date and date in table to get closest matchday and put a useeffect on load to do this 
    // run below useeffect when matchday gets set


    useEffect(() => {
        axios
            .get("http://localhost:7800/api/getFixtures", {
                params: {
                    matchday: matchday,
                }
            })
            .then((res) => {
                console.log(res);
                setGames(res.data);
            })
    }, []);

    const handleUserPredictions = () =>{
        navigate("/userpredictions");
    }
    
    return (

        <div style={{height: "100vh"}} >
            <div id="bg">
                <div>
                    <Navbar />
                    <section className="text-light">
                        <section>
                            <div className="main my-3">
                                <div>
                                    <h1 className="text-center display-4">Prediction</h1>
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
                        <div className=" d-flex justify-content-center mt-3"><button type="submit" className="btn btn-success" onClick={handleUserPredictions}>Previous Predictions</button></div>                     
                    </section>
                </div>
            </div>
        </div>
    )
}