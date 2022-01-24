import react, { useEffect, useState } from "react";
import axios from "axios";

export default function UserPredictionRow({ homeTeam, awayTeam, pred_hg, pred_ag }) {

    return (
        <tr>
            <td className="col-4" ><p for="gw" className="form-label my-1 text-center">{homeTeam}</p></td>
            <td className="col-2" ><p for="gw" className="form-label my-1 text-center">{pred_hg}</p></td>
            <td className="col-2" ><p for="gw" className="form-label my-1 text-center">{pred_ag}</p></td>
            <td className="col-4" ><p for="gw" className="form-label my-1 text-center">{awayTeam}</p></td>
        </tr>

    )
}   