import react, { useEffect, useState } from "react";
import axios from "axios";

export default function GWtotal({ gw, gw_points, total }) {

    return (
        <tr>
            <td className="col-6" ><p for="gw" className="form-label my-1 text-center">{gw}</p></td>
            <td className="col-6" ><p for="gw_points" className="form-label my-1 text-center">{gw_points}</p></td>
        </tr>

    )
}   