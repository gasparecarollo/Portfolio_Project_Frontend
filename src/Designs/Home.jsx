import React from "react";
import "../styles/style.css";

export const Home = () => {
    return (
        <div className="Home">
            <div className="div">
                <div className="overlap-group">
                    <div className="frame">
                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <img className="github" alt="Github" src="/images/github-1@2x.png" />
                                <img className="linkedin" alt="Linkedin" src="/image/linkedin-1@2x.png" />
                            </div>
                        </div>
                        <div className="frame-wrapper">
                            <div className="frame-3">
                                <div className="text-wrapper">Terms &amp; Conditions</div>
                                <div className="text-wrapper">Privacy Policy</div>
                            </div>
                        </div>
                    </div>
                    <img className="rectangle" alt="Rectangle" src="/images/rectangle-8.png" />
                    <div className="text-wrapper-2">CAPRICCIO FOOD TRUCK INC.</div>
                    <p className="p">Coming to a neighborhood near you.</p>
                </div>
                <div className="overlap">
                    <div className="text-wrapper-3">HOME</div>
                    <div className="text-wrapper-4">MENU</div>
                    <div className="text-wrapper-5">ABOUT</div>
                    <img className="img" alt="Rectangle" src="/images/rectangle-7.png" />
                </div>
                <div className="overlap-2">
                    <img className="rectangle-2" alt="Rectangle" src="/images/rectangle-1@2x.png" />
                    <img className="polygon" alt="Polygon" src="/images/polygonleft.png" />
                    <div className="rectangle-3" />
                    <div className="rectangle-4" />
                    <img className="polygon-2" alt="Polygon" src="/images/polygonright.png" />
                    <div className="rectangle-5" />
                    <div className="rectangle-6" />
                    <div className="text-wrapper-6">HOME</div>
                    <div className="text-wrapper-7">MENU FORM</div>
                    <div className="text-wrapper-8">EDIT FORM</div>
                </div>
                <img className="rectangle-7" alt="Rectangle" src="/images/rectangle-6@2x.png" />
            </div>
        </div>
    );
};
