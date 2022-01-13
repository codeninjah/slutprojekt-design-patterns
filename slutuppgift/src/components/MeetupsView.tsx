import { Key, ReactChild, ReactFragment, ReactPortal } from 'react';
import React, {useState, useEffect} from 'react';
import  MeetupItem  from './MeetupItem';
import { Props } from '../models/Meetup';
import  {Meetups}  from '../database.json';

export const MeetupsView = () => {
    const parsedmeetupsList = JSON.parse(JSON.stringify(Meetups))
    let sortedmeetupsList = parsedmeetupsList.sort((a: { date: string; },b: { date: string; }) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : 0))
    
    let [meetups, setMeetups] = useState(sortedmeetupsList)
    const [inputValue, setInputValue] = useState<string>("")
    
    const addComment = (id: string, comment: string) => {
        const newMeetupsList = meetups.map((item: any) => {
            if(item.id === id) item.comments.push(comment) 
            return item
        })

        setMeetups(newMeetupsList)
    }
    
    //Denna funktion skall jämföra dagens datum med datumen för meetups'en
    //Borde skriva tester innan jag fortsätter bygga ut den
    const dateCompare = (eventDate: any) => {
        const todaysDate = new Date()
        const processed = todaysDate.getTime()
        console.log("processed is: " + processed) //works ==> prints a timestamp

        const testDate = (new Date(eventDate)).getTime()
        console.log("testDate is: " + testDate) //works ==> prints a timestamp
    }

    dateCompare("2022-10-10")

    return (
        <>
        <div>
          <div className="inputContainer">
            <label htmlFor="">Search </label>
            <input 
            type="text"
            data-test="meetups-input"
            value={inputValue}
            onChange={(
              ev: React.ChangeEvent<HTMLInputElement>,
            ): void => setInputValue(ev.target.value)}
          />
        </div>
        <div>
            <img className="header-image" src="https://it-kanalen.se/wp-content/uploads/2021/04/f54fe04bddc90aa10037fcd9f770b9a73d7902b2-1.jpg"></img>
            <p className="header-text">Here's a list of upcoming Meetups. We'd want you to enjoy them. Attent, connect and network, welcome to the best Meetups.</p>
        </div>
            <div className="meetups-list">

                <ol className="sorted-meetups-list">
                {
                    meetups.filter((item: any) => item.date.includes(inputValue)).map((item: any) => 
                            <li>
                                 <article key={item.id}> 
                                    <MeetupItem key={item.id} id={item.id} name={item.name} date={item.date} description={item.description} comments={item.comments} addComment={(id, comment) => addComment(id, comment)} /> 
                                </article>
                            </li>
                        )
                }
                </ol>

            </div>
        </div>
        </>
    )
}

export default MeetupsView