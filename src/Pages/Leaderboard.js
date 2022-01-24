import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import PredictionBox from "../Components/PredictionBox";
import axios from "axios";
import $ from 'jquery';


export default function Leaderboard() {
    return (
            
        <div id="d1">
            
         
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
                        <div class="container py-1">
                            <div class="row">
                                <div class="col-lg-7 mx-auto bg-white rounded shadow">
                                    <div class="table-responsive">
                                        <table class="table table-fixed">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="col-3">#</th>
                                                    <th scope="col" class="col-3">First</th>
                                                    <th scope="col" class="col-3">Last</th>
                                                    <th scope="col" class="col-3">Handle</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row" class="col-3">1</th>
                                                    <td class="col-3">Mark</td>
                                                    <td class="col-3">Otto</td>
                                                    <td class="col-3">@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" class="col-3">2</th>
                                                    <td class="col-3">Jacob</td>
                                                    <td class="col-3">Thornton</td>
                                                    <td class="col-3">@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" class="col-3">3</th>
                                                    <td colspan="2" class="col-6">Larry the Bird</td>
                                                    <td class="col-3">@twitter</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" class="col-3">4</th>
                                                    <td class="col-3">Martin</td>
                                                    <td class="col-3">Williams</td>
                                                    <td class="col-3">@Marty</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" class="col-3">5</th>
                                                    <td colspan="2" class="col-3">Sam</td>
                                                    <td colspan="2" class="col-3">Pascal</td>
                                                    <td class="col-3">@sam</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" class="col-3">6</th>
                                                    <td class="col-3">John</td>
                                                    <td class="col-3">Green</td>
                                                    <td class="col-3">@john</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" class="col-3">7</th>
                                                    <td colspan="2" class="col-3">David</td>
                                                    <td colspan="2" class="col-3">Bowie</td>
                                                    <td class="col-3">@david</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" class="col-3">8</th>
                                                    <td class="col-3">Pedro</td>
                                                    <td class="col-3">Rodriguez</td>
                                                    <td class="col-3">@rod</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" class="col-3">9</th>
                                                    <td colspan="2" class="col-3">Sam</td>
                                                    <td colspan="2" class="col-3">Pascal</td>
                                                    <td class="col-3">@sam</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" class="col-3">10</th>
                                                    <td class="col-3">Jacob</td>
                                                    <td class="col-3">Thornton</td>
                                                    <td class="col-3">@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" class="col-3">11</th>
                                                    <td colspan="2" class="col-6">Larry the Bird</td>
                                                    <td class="col-3">@twitter</td>
                                                </tr>
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