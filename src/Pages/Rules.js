import React from "react";
import Navbar from "../Components/Navbar";
import BG from "../Images/pre.jpg";

export default function Rules() {
    return (
        <div id="bg">
            <div style={{ height: "100vh" }}>
                <Navbar />
                <section className="text-light">
                    <div className="main my-4">
                        <div>
                            <h1 className="text-center display-3">Rules</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>
                    <div className="text-center">
                        <table className="table table-dark w-75">
                            <tr>
                                <td>1</td>
                                <td>Deadline to predict the scorelines for each gameweek is one hour before the kickoff of the first game of that particular week</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>If you do not submit your predictions before the time ends, the portal which allows you to predict shall close and any unsaved changes will be lost</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Points will be alloted as follows (the first occurence will only be considered):</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>
                                    <ol>
                                        <li>Exact scoreline match with |GD| &gt; 3: 10 points</li>
                                        <li>Exact scoreline match : 5 points</li>
                                        <li>Correct goal difference(GD of 0 doesn't count) : 3 points</li>
                                        <li>Correct result(winning team/draw) : 2 points</li>
                                        <li>Wrong result : 0 points</li>
                                    </ol>
                                </td>
                            </tr>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}