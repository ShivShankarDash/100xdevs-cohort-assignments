import Developer from "../classes/Developer";

export default function BusinessCard (props:Developer) {

    function onClickHandler(){
        console.log(`Hey there ${props.name}. Have a great day Mr. ${props.title}`)
    }
    return (
        <div className="business_card">
        <div>
        <h2>{props.name}</h2>
        <p>{props.title}</p>
        <h3>Interests</h3>
        {props.interests?.map((interest,index)=> <div className="interests_points" key={index}>{interest}</div>)}
        <br></br>
        {props.creds?.map((cred,index)=><button className="social_media_btn" key={index}>{cred}</button>)}
        </div>
        </div>
    )
}