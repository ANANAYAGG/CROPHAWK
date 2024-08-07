import axios from 'axios';
import React from 'react';
import orderDetails from '../jsonAPI/OrderDetail.json'

export async function postJobs1() {
    try {
      const response = await fetch('https://409q6jw99h.execute-api.ap-south-1.amazonaws.com/create_order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  
  
  