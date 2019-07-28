import React from 'react';
import './services.scss'
import img1 from '../../assets/images/brandingTools.png'
import img2 from '../../assets/images/customSite.jpg'
import img3 from '../../assets/images/digitalMarketing.jpg'


export default () => {
    return (
        <div className="col-12 servicesContainer">
            <div className="backgroundImg"></div>
            <div className="row">
                <h2 className="col-12 text-center servicesText">WHAT WE DO</h2>
                <div className="d-inline-block col-md-12 col-lg-4 descContainer">
                    <div className="offset-md-2 offset-lg-8 col-lg-4 imgContainer">
                        <img className="imgContainer1" src={img1} alt="Branding Tools" />
                    </div>
                    <h3 className="offset-8 col-4 text-center mktText">
                            BRANDING TOOLS
                    </h3>  
                    <div className="offset-8 col-4 text-center descText">
                    In need of a company logo? HD-Tech's graphic designers have the tools to brand your business on paper and online.
                    </div>
                </div>
                <div className="d-inline-block col-4 descContainer">
                    <div className="offset-4 col-8 imgContainer">
                        <img className="imgContainer2" src={img2} alt="Branding Tools" />
                    </div>
                    <h3 className="offset-4 col-8 text-center mktText2">
                            CUSTOM WEBSITES
                    </h3>
                    <div className="offset-2 col-8 text-center descText">From templates to coded websites, we have affordable options for every business model.</div>  
                </div>
                <div className="d-inline-block col-4 descContainer">
                    <div className="col-8 imgContainer">
                        <img className="imgContainer3" src={img3} alt="Branding Tools" />
                    </div>
                    <h3 className="col-8 text-center mktText3 ">
                            DIGITAL MARKETING
                    </h3>
                    <div className="row col-8 text-center descText3">Our digital marketing specialists will develop the best marketing strategy to put your business on the map and attract online customers.   </div>  
                </div>
            </div>

        </div>
    )
}