import React, {useEffect, useState} from 'react';
import "../../css/load.css";

const Load = ({tm}) => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
        setVisible(false);
        }, tm);
    }, tm);

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