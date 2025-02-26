import React from "react";
function WeatherDetail({detail,value}){
    return(
        <p className="flex justify-between border-b-1 pb-2 border-dashed border-gray-400 mt-2">
            <span>
                {detail}
            </span>
            <span>{value} </span>
        </p>
    );
}

export default WeatherDetail;