import React from 'react';
//import './Imgsize.css'

const Card= (props)=>{

    return(
        //tachyons
        <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
            <img style={{width:'200px', height: '200px'}} alt=""src={`https://robohash.org/${props.id}`}/>
            <div className="">
    <h2>{props.name}</h2> {/*this passes in the name property we labelled in index.js, same for the following props.email props.id */}
    <p>{props.email}</p>
        </div>
</div>

    )
}

export default Card;