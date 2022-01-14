//import { IMeetup } from '../models/Meetup'
import { useState } from 'react'

type props = { 
    id: string,
    name: string,
    date: string,
    description: string,
    comments: string[],
    addComment: (id:string, comment:string) => void
 }

const MeetupItem = ({id, name, date, description, comments, addComment}:props) => {
    let [showButton, setShowButton]  = useState(true);
    let [showCommentary, setShowCommentary] = useState(false)
    let [showDetails, setShowDetails] = useState(false)
    let [showComments, setShowComments] = useState(comments)
    let [inputComment, setInputComment] = useState('')

    const attendBtnStuff = () => {
        setShowButton(false);
        setShowCommentary(true)
        setShowDetails(true)
    }

    const dateCompare = (eventDate: any) => {
        let hasPassed = true
        const todaysDate = new Date().getTime()
        const processedTodaysDate = Number(todaysDate)
        console.log("processed is: " + processedTodaysDate) //works ==> prints a timestamp

        const dateofEvent = (new Date(eventDate)).getTime()
        console.log("dateofEvent is: " + dateofEvent)
        const processedEventDate = Number(dateofEvent)
        console.log("testDate is: " + processedEventDate) //works ==> prints a timestamp

        if(processedTodaysDate > processedEventDate){
            hasPassed = false;
        }
        if(todaysDate < processedEventDate){
            hasPassed = true
        }

        return hasPassed

    }

    /*dateCompare({date})
    console.log(dateCompare({date}))
    console.log("Date is: " + date)*/
            
        return(
            <>
                <h1>{name}</h1>
                
                { showDetails ? <div><h3 className="registration-confirmed">Welcome to our event!</h3> 
                    <p><img src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Golden_star.svg"></img></p>
                <p className="event-details">We hope you enjoy it, we cannot wait for you to experience it and please do not forget to leave a comment or two</p></div>
                : <></>}

                <p className="date">DATE: {date}</p>
                <p className="description">{description}</p>
                <div>
                     { dateCompare(date) ? <div><p className="meetup-starting">Meetup open for registration</p><p>Comments</p></div> : <p className="meetup-ended">Meetup already ended</p> }

                    <ul>
                        {                     
                            comments.map(comment => <li data-test="comment-item">{comment}</li>) 
                        }
                    </ul> 
                    { showButton && dateCompare(date) ? <div className="attend-btn"><button onClick={attendBtnStuff} data-test="attend-btn">Attend</button></div> : <></> }

                            { showCommentary ? <div className="member-comment">
                                <button data-test="meetups-comment-btn" onClick={() => addComment(id, inputComment)}>Comment</button>
                            <input type="text" data-test="meetups-comment-field" placeholder="You are attending" value={inputComment} onChange={(ev: React.ChangeEvent<HTMLInputElement>,) => setInputComment(ev.target.value)}></input></div> : <></> }
   
                </div>
            </>
        );
}

export default MeetupItem