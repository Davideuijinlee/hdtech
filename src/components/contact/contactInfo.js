import React from 'react';

export default props => {
    return (
        <div className="col-12 col-sm-12 col-lg-4 contactInfoContainer">
            <h2 className="offset-4 text-center offset-sm-4 text-sm-center offset-md-4 text-lg-left offset-lg-1 text-lg-left contactMargin contactTitle">
                ADDRESS
            </h2>
            <div className="col-12 text-center text-lg-left contactInfoText">
                16250 Homecoming dr, Suite #B-4.
            <br />
                Chino,Ca 91708
            </div>
            <h2 className="offset-4 text-center offset-sm-4 text-sm-center offset-md-4 text-lg-left offset-lg-1 text-lg-left contactTitle">
                CONTACT
            </h2>
            <div className="col-12 text-center text-lg-left contactInfoText">
                954-651-1894
            </div>
            <h2 className="offset-4 text-center offset-sm-4 text-sm-center offset-md-4 text-lg-left offset-lg-1 text-lg-left contactTitle">
                OFFICE HOURS
            </h2>
            <div className="col-12 text-center text-lg-left contactInfoText">
                Mon - Fri: 8am - 4pm
            <br />
                Saturday: 8am - 4pm
            <br />
                Sunday: 8am - 11pm
            </div>
        </div>

    )
}