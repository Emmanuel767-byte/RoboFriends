import React from 'react';

const Searchbox=({searchChanged})=>{
    return(
<div className="pa2">
    <input 
    className="pa3 ba b--green bg-lightest-blue"
    type="search" 
    placeholder="search robots"
    onChange={searchChanged}
/>
</div>
    );
}

export default Searchbox;