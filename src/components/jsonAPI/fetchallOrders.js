import axios from 'axios';
import React from 'react';
import  OrderCart from '../jsonAPI/OrderCart.json'



export default async function fetchJobs() {
    const options = {
        method: 'POST',
        url: 'https://409q6jw99h.execute-api.ap-south-1.amazonaws.com/fetch_all_orders',
        headers: {'Content-Type': 'application/json'},
        data: {organization: 1}
      };
      
          try {
            const response = await axios(options);
            return response.data.orders ;

  
          } catch (error) {
           return console.error(error);
          }
  
      
  }