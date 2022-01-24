import react, { useEffect, useState } from "react";
import axios from "axios";

export default function PredictionBox({ rank, username, name, score }) {

    return (
        <tr>
            <td className="col-3" ><p for="rank" className="form-label my-1 text-center">{rank}</p></td>
            <td className="col-3" ><p for="username" className="form-label my-1 text-center">{username}</p></td>
            <td className="col-3" ><p for="name" className="form-label my-1 text-center">{name}</p></td>
            <td className="col-3"><p for="score" className="form-label my-1 text-center">{score}</p></td>
        </tr>
       
    )
}   