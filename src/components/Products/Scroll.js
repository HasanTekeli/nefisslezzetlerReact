import React from "react";

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: "1px solid blue", flex:"1 1 auto"}}>
            {props.children}
        </div>
    );
};

export default Scroll;