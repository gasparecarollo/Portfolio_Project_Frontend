import React from "react";
import MenuItems from "../Components/MenuItems";
import "../styles/style.css";

export const AllItemsPage = () => {
    return (
        <div className="AllItemsPage">
            <div className="div">
                <div className="overlap">
                    <div className="frame">
                        <div className="frame-wrapper">
                            <div className="frame-2">
                                <img className="github" alt="Github" src="/images/github-1@2x.png" />
                                <img className="linkedin" alt="Linkedin" src="/images/linkedin-1@2x.png" />
                            </div>
                        </div>
                        <div className="frame-wrapper">
                            <div className="frame-3">
                                <div className="text-wrapper">Terms &amp; Conditions</div>
                                <div className="text-wrapper">Privacy Policy</div>
                            </div>
                        </div>
                    </div>
                    <div className="overlap-group">
                        <img className="rectangle" alt="Rectangle" src="/images/rectangle-6@2x.png" />
                        <div className="text-wrapper-2 capriccio">CAPRICCIO FOOD TRUCK INC.</div>
                        <p className="p">Coming to a neighborhood near you.</p>
                    </div>
                </div>
                <div className="overlap-2">
                    <div className="text-wrapper-3">HOME</div>
                    <div className="text-wrapper-4">MENU</div>
                    <div className="text-wrapper-5">ABOUT</div>
                </div>
                <div className="overlap-group-2">
                    <img className="img" alt="Rectangle" src="/images/rectangle-1@2x.png" />
                    <img className="polygon" alt="Polygon" src="/images/polygonleft.png" />
                    <div className="rectangle-2" />
                    <div className="rectangle-3" />
                    <img className="polygon-2" alt="Polygon" src="/images/polygonright.png" />
                    <div className="rectangle-4" />
                    <div className="rectangle-5" />
                    <div className="text-wrapper-6">HOME</div>
                    <div className="text-wrapper-7">MENU FORM</div>
                    <div className="text-wrapper-8">EDIT FORM</div>

                    <MenuItems />
                    <img
                        className="italy-national-flag"
                        alt="Italy national flag"
                        src="/images/italy-national-flag-festive-bunting-against-plain-white-background-3d-rendering-601748-26030-1@2x.png"
                    />
                    <img
                        className="italy-national-flag-2"
                        alt="Italy national flag"
                        src="/images/italy-national-flag-festive-bunting-against-plain-white-background-3d-rendering-601748-26030-2@2x.png"
                    />
                </div>
            </div>
        </div>
    );
};
