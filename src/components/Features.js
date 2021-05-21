import React from 'react'

import featureOneImg from "../img/features-1.svg";
import featureTwoImg from "../img/features-2.svg";
import featureThreeImg from "../img/features-3.svg";
import featureFourImg from "../img/features-4.svg";

import Title from './Title';

function Features() {
    return (
        <div className="features">
            <div className="container">
                <Title titleName="FEATURES" descriptionName="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
                
                <div className="featuresContainer">
                    <div className="feature one">
                        <img src={featureOneImg} alt="feature image" />
                        <div className="featureText">
                            <h2>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2>
                            <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
                            <div className="featureList">
                                <p><span className="mark">&#10003;</span>  Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p><span className="mark">&#10003;</span>  Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature two">
                        <img src={featureTwoImg} alt="feature image" />
                        <div className="featureText">
                            <h2>Corporis temporibus maiores provident</h2>
                            <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
                            <div className="featureList">
                                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature three">
                        <img src={featureThreeImg} alt="feature image" />
                        <div className="featureText">
                            <h2>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h2>
                            <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
                            <div className="featureList">
                                <p><span className="mark">&#10003;</span>  Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <p><span className="mark">&#10003;</span>  Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                                <p><span className="mark">&#10003;</span>  Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</p>
                            </div>
                        </div>
                    </div>
                    <div className="feature four">
                        <img src={featureFourImg} alt="feature image" />
                        <div className="featureText">
                            <h2>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h2>
                            <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</i></p>
                            <div className="featureList">
                                <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
