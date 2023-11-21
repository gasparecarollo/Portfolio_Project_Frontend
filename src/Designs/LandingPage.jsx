import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

export const LandingPage = () => {
    return (
        <div className="LandingPage">
            <div className="div">
                <div className="overlap">
                    <img className="foodtruckdesign" alt="Foodtruckdesign" src="/images/foodtruckdesign-1@2x.png" />
                    <Link to="/" className="text-wrapper">HOME </Link>
                    <img className="rectangle" alt="Rectangle" src="/images/rectangle-1@2x.png" />
                    <img className="polygon" alt="Polygon" src="/images/Polygonleft.png" />
                    <div className="rectangle-2" />
                    <div className="rectangle-3" />
                    <img className="img" alt="Polygon" src="/images/polygonright.png" />
                    <div className="rectangle-4" />
                    <div className="rectangle-5" />
                    <Link to="/allmenuitems" className="text-wrapper-2">MENU </Link>
                    <div className="text-wrapper-3">ABOUT</div>
                </div>
                <div className="overlap-group">
                    <div className="frame">
                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <a href="https://github.com/gasparecarollo" target="_blank" rel="noopener noreferrer">
                                    <img className="github" alt="Github" src="/images/github-1@2x.png" />
                                </a>
                                <a href="https://www.linkedin.com/in/gcarollo85/" target="_blank" rel="noopener noreferrer">
                                    <img className="linkedin" alt="Linkedin" src="/images/linkedin-1@2x.png" />
                                </a>
                            </div>
                        </div>
                        <div className="frame-wrapper">
                            <div className="frame-3">
                                <div className="text-wrapper-4">Terms &amp; Conditions</div>
                                <div className="text-wrapper-4">Privacy Policy</div>
                            </div>
                        </div>
                    </div>
                    <img className="rectangle-6" alt="Rectangle" src="/images/rectangle-6@2x.png" />
                    <div className="text-wrapper-5">CAPRICCIO FOOD TRUCK INC.</div>
                    <p className="p">Coming to a neighborhood near you.</p>
                </div>
            </div >
        </div >
    );
};
