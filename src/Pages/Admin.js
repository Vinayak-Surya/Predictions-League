import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {

    let values;
    const [matchday,setMatchday] = useState(22)

    useEffect(() => {
        values = [];
    }, [])

    async function getData() {
        const response = await fetch("https://api.football-data.org/v2/competitions/PD/matches", {
            method: "GET",
            headers: {
                // "Content-Type": "application/json",
                "X-Auth-Token": "ff7945142d0f472482acd7d9ea081ec7"
            },
        })
        return response.json();
    }

    const handlePopulate = () => {
        getData()
            .then((res) => {
                console.log(res)
                for(let i = 0; i < res.matches.length; i++) {
                    let tempValues = [];
                    tempValues.push(res.matches[i].matchday);
                    tempValues.push(res.matches[i].id);
                    tempValues.push(res.matches[i].homeTeam.name);
                    tempValues.push(res.matches[i].awayTeam.name);
                    tempValues.push(res.matches[i].score.fullTime.homeTeam);
                    tempValues.push(res.matches[i].score.fullTime.awayTeam);
                    tempValues.push(res.matches[i].score.fullTime.homeTeam - res.matches[i].score.fullTime.awayTeam);
                    tempValues.push(res.matches[i].status);
                    values.push(tempValues)
                }
                console.log(values)
                axios
                    .post("/api/fixtures", { matches:values })
                    .then((data) => {
                        console.log(data);
                    })
            })
    }

    async function getMatchDayScores() {
        const response = await fetch(`https://api.football-data.org/v2/competitions/PD/matches?matchday=${matchday}`, {
            method: "GET",
            headers: {
                // "Content-Type": "application/json",
                "X-Auth-Token": "ff7945142d0f472482acd7d9ea081ec7"
            },
        })
        return response.json();
    }

    const updateScores = () => {
        getMatchDayScores()
            .then((res) => {
                console.log(res);
                axios
                    .post("/api/updateScores", {matches: res.matches})
                    .then((data) => {
                        console.log(data);
                    })
            })
    }

    const calculatePoints = () => {

    }


    return (
        <div style={{height: "100vh"}} id="bg">
            <div className="container">
                <div className="text-light">
                    <h1 className="text-center display-3">Admin</h1>
                    <hr className="w-50 mx-auto" />
                </div><div className="my-5 pt-5 text-center">
                    <div>
                    <button type="submit" onClick={handlePopulate} className="btn btn-primary w-25 ">Populate fixtures</button>
                </div>
                <div className=" my-4">
                    <button type="submit" onClick={updateScores} className="btn btn-primary w-25 ">Update Scores</button>
                </div>
                <div>
                <button type="submit" onClick={calculatePoints} className="btn btn-primary w-25">Calculate Points</button>
                    </div></div>

                </div>

        </div>
    )
}