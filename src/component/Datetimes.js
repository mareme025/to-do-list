import React from 'react';

const Datetimes = () => {

    let showDate = new Date();
    let showTodayDate = showDate.getDate() + '/' + showDate.getMonth() + 1 + '/' + showDate.getFullYear();
    return (
        <div className="dates">
            {showTodayDate}
        </div>
    );
};

export default Datetimes;