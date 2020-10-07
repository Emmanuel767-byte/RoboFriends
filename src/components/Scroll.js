import React from 'react';

const Scroll=(props)=> {
return (//IN-Line styling //SCROLLABLE COMPONENT
    <div style={{overflowY: 'scroll', border: '5px ridge black', height:'400px'}}>
        {props.children}
    </div>
)
}

export default Scroll;