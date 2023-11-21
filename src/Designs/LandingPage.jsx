import React from "react";
import "../styles/styles.css";

export const LandingPage = () => {
    return (
        <div className="desktop">
            <div className="div">
                <div className="overlap">
                    <img className="foodtruckdesign" alt="Foodtruckdesign" src="foodtruckdesign-1.png" />
                    <div className="text-wrapper">HOME</div>
                    <img className="rectangle" alt="Rectangle" src="rectangle-1.svg" />
                    <img className="polygon" alt="Polygon" src="polygon-1.svg" />
                    <div className="rectangle-2" />
                    <div className="rectangle-3" />
                    <img className="img" alt="Polygon" src="image.svg" />
                    <div className="rectangle-4" />
                    <div className="rectangle-5" />
                    <div className="text-wrapper-2">MENU</div>
                    <div className="text-wrapper-3">ABOUT</div>
                </div>
                <div className="overlap-group">
                    <div className="frame">
                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <img className="github" alt="Github" src="github-1.png" />
                                <img className="linkedin" alt="Linkedin" src="linkedin-1.png" />
                            </div>
                        </div>
                        <div className="frame-wrapper">
                            <div className="frame-3">
                                <div className="text-wrapper-4">Terms &amp; Conditions</div>
                                <div className="text-wrapper-4">Privacy Policy</div>
                            </div>
                        </div>
                    </div>
                    <img className="rectangle-6" alt="Rectangle" src="rectangle-6.png" />
                    <div className="text-wrapper-5">CAPRICCIO FOOD TRUCK INC.</div>
                    <p className="p">Coming to a neighborhood near you.</p>
                </div>
            </div>
        </div>
    );
};
