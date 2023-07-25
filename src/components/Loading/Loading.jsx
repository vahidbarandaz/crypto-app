import React from 'react';

import gif from "../../Gif/loading.gif";

const Loading = () => {
    return (
        <div style={{dispaly: "flex", justifyContent: "center", alignItems: "center"}}>
            <img src={gif} alt="loading" />
        </div>
    );
};

export default Loading;