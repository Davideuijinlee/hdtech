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
                    <div className="offset-3 offset-sm-4 offset-md-2 col-md-4 offset-lg-5 col-lg-6 imgContainer">
                        <img className="imgContainer1" src={img1} alt="Branding Tools" />
                    </div>
                    <div className="d-inline-block offset-md-1 col-md-5 col-lg-12">
                        <h3 className="col-12 col-sm-12 col-md-12 offset-lg-4 col-lg-7 text-center mktText">
                            BRANDING TOOLS
                    </h3>
                        <div className="col-12 col-sm-12 col-md-12 offset-lg-2 col-lg-9 text-center descText">
                            In need of a company logo? HD-Tech's graphic designers have the tools to brand your business on paper and online.
                    </div>
                    </div>
                </div>
                <div className="d-inline-block col-md-12 col-lg-4 descContainer">
                    <div className="offset-3 offset-sm-4 offset-md-2 col-md-4 offset-lg-3 col-lg-6 imgContainer">
                        <img className="imgContainer2" src={img2} alt="Branding Tools" />
                    </div>
                    <div className="d-inline-block offset-md-1 col-md-5 offset-lg-0 col-lg-12">
                        <h3 className="col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-9 text-center mktText">
                            CUSTOM WEBSITES
                    </h3>
                        <div className="col-12 col-sm-12 col-md-12 offset-lg-1 col-lg-10 text-center descText">
                        From templates to coded websites, we have affordable options for every business model.
                    </div>
                    </div>
                </div>
                <div className="d-inline-block col-md-12 col-lg-4 descContainer">
                    <div className="offset-3 offset-sm-4 offset-md-2 col-md-4 offset-lg-1 col-lg-7 imgContainer">
                        <img className="imgContainer3" src={img3} alt="Branding Tools" />
                    </div>
                    <div className="d-inline-block offset-md-1 col-md-5 offset-lg-0 col-lg-12">
                        <h3 className="col-12 col-sm-12 col-md-12 offset-lg-1 col-lg-9 text-center mktText">
                            DIGITAL MARKETING
                    </h3>
                        <div className="col-12 col-sm-12 col-md-12 offset-lg-0 col-lg-8 text-center descText">
                        From templates to coded websites, we have affordable options for every business model.
                    </div>
                    </div>
                </div>
                {/* <div className="d-inline-block col-4 descContainer">
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
                </div> */}
            </div>
        </div>
    )
}