// components/Content.js

import React, { useState,useEffect } from 'react';
import axios from 'axios';

const Content = ({item }) => {
    const [notes, setNotes] = useState([]);

    function formatDateToAMPM(timestamp) {
      const date = new Date(timestamp);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12; // Convert midnight (0) to 12
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      const formattedTime = formattedHours + ':' + formattedMinutes + ' ' + ampm;
      return formattedTime;
    }

    function formatDate(timestamp) {
      const date = new Date(timestamp);
      const options = { day: 'numeric', month: 'short', year: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }
    
    const handleFetchNotes = async () => {
        try {
          // Make a POST request to fetch notes for the specified group ID
          const response = await axios.post('http://localhost:3000/api/getNotes', {
            groupId: item._id
          });
    
          // Update the state with the fetched notes
          setNotes(response.data);
          console.log(response.data);
          console.log('hello');
        } catch (error) {
          // Handle errors
          console.error('Error fetching notes:', error);
        }
      };

      useEffect(() => {
        // Call handleFetchNotes when the component mounts
        handleFetchNotes();
      }, [item]); // Empty dependency 

  return (
    <div className="content">
      {/* Add your content here */}
      <ul>
        {notes.map((note, index) => (
          <div key={index} className="note-item">
            <div className='note-content'>{note.content}</div>
            <br></br>
            <br></br>
            <div className='note-date'>{formatDate(note.createdAt)}</div>
            <div className='note-time'> {formatDateToAMPM(note.createdAt)}</div>
          </div>
            ))}
      </ul>
    </div>
  );
}

export default Content;
