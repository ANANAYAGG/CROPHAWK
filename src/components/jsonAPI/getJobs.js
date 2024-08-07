import axios from 'axios';
import React from 'react';


export async function fetchJobs() {
    const options = {
        method: 'POST',
        url: 'https://409q6jw99h.execute-api.ap-south-1.amazonaws.com/fetch_all_jobs',
        headers: {'Content-Type': 'application/json'},
        data: {organization: 1}
      };
      
          try {
            const response = await axios(options);
            return console.log(response.data);

          } catch (error) {
           return console.error(error);
          }
  
      
}