import React, {useEffect, useState} from 'react';
import "../../css/load.css";

const Load = () => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setVisible(false);
        }, 1000);
    }, 1000);

    return visible ? (
        <div className="loadBg">
        <div class="container">
            <div class="📦"></div>
            <div class="📦"></div>
            <div class="📦"></div>
            <div class="📦"></div>
            <div class="📦"></div>
        </div>
        </div>
    ) : <div />;

}

export default Load;