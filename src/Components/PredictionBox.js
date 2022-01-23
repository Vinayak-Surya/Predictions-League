import react, { useEffect, useState } from "react";
import axios from "axios";

export default function PredictionBox({ matchId, homeTeam, awayTeam }) {

    const [username, setUsername] = useState('');
    const [homeGoals, setHomeGoals] = useState();
    const [awayGoals, setAwayGoals] = useState();


    useEffect(() => {
        setUsername(sessionStorage.getItem("userName"));
    }, [])

    const handlePredictionConfirm = () => {
        axios
            .post("http://localhost:7800/api/addPrediction", {
                matchId: matchId,
                username: username,
                homeGoals: homeGoals,
                awayGoals: awayGoals,
                goalDiff: homeGoals-awayGoals
            })
            .then((res) => {
                console.log(res);
                console.log("Prediction added");
            })
    }

    return (
    <div className="d-sm-flex my-2">
        <div className="row">
        <div className="col-1"></div>
            <div className="col-3"><p for="home_team" className="form-label my-1 text-center">{homeTeam}</p></div>
            <div className="d-flex col-2">
            <input type="number"  value={homeGoals} onChange={(e) => setHomeGoals(e.target.value)} className="form-control" id="home_goals"  />
            <h5 className="text-center mx-2"> : </h5>
            <input type="number"  value={awayGoals} onChange={(e) => setAwayGoals(e.target.value)} className="form-control" id="away_goals"  />
        </div>
        <div className="col-3"><p for="away_team" className="form-label my-1 text-center">{awayTeam}</p></div>       
        <div className="col-3"><button type="submit"  className="btn btn-success mx-3" onClick={handlePredictionConfirm}>Confirm</button></div>
        </div>
    </div>
)}