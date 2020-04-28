import React from "react";
import "./style.css";

function Portfolio () {
    return (
<div className="container context">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h1>Portfolio</h1>
                    </div>
                </div>

                <div className="row projectRow">
                    <div className="col-lg-2 col-md-2"></div>

                    <div className="col-lg-4 col-md-4 col-sm-12 top-buffer">
                        <div className="projects" id="pro1" data-deployed="https://bmalkmus.github.io/getOutsideApp/" data-repo="https://github.com/bmalkmus/getOutsideApp" data-screen="../bmalkmus.github.io/assets/images/ParkApp.png">
                            <div className="project-title">
                                <p>Park & Dinner</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 top-buffer">
                        <div className="projects" id="pro2" data-deployed="https://bmalkmus.github.io/dailyPlanner/" data-repo="https://github.com/bmalkmus/dailyPlanner" data-screen="../bmalkmus.github.io/assets/images/WorkdayPlan.png">
                            <div className="project-title">
                                <p>Daily Planner</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-2"></div>
                </div>

                <div className="row top-buffer projectRow">

                    <div className="col-lg-2 col-md-2"></div>

                    <div className="col-lg-4 col-md-4 col-sm-12 top-buffer">
                        <div className="projects" id="pro3" data-deployed="https://bmalkmus.github.io/WeatherApp/" data-repo="https://github.com/bmalkmus/WeatherApp" data-screen="../bmalkmus.github.io/assets/images/WeatherApp.png">
                            <div className="project-title">
                                <p>WeatherApp</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-12 top-buffer">
                        <div className="projects" id="pro4" data-deployed="https://arcane-escarpment-28279.herokuapp.com/" data-repo="https://github.com/rnyang-16/Project_2" data-screen="../bmalkmus.github.io/assets/images/main.png">
                            <div className="project-title">
                                <p>Bootleg Cooking</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-2 col-md-2"></div>
                </div>

                <div className="row top-buffer">
                    <div className="col-lg-2 col-md-2"></div>

                    <div className="col-lg-4 col-md-4 col-sm-12 top-buffer">
                        <div className="projects" id="pro5" data-deployed="https://burger23eater.herokuapp.com/" data-repo="https://github.com/bmalkmus/burger" data-screen="../bmalkmus.github.io/assets/images/Burger_App.png">
                            <div className="project-title">
                                <p>Eat Da BURGER!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 top-buffer">
                        <div className="projects" id="pro6" data-deployed="https://bmalkmus.github.io/codingQuiz/" data-repo="https://github.com/bmalkmus/codingQuiz" data-screen="../bmalkmus.github.io/assets/images/Quiz.png">
                            <div className="project-title">
                                <p>codingQuiz</p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-lg-2 col-md-2"></div>

            </div>
    )}

    export default Portfolio;