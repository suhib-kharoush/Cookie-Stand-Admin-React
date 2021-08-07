import Head1 from "./Head";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import { useState } from 'react'
import { useEffect } from 'react';
import axios from "axios";


const baseUrl = 'https://cookie-stand-api.herokuapp.com';
const dataUrl = baseUrl + '/api/v1/cookie-stands/';
export default function CookieStandAdmin(props){
    const [numberoflocaton,senumberoflocaton] = useState(0)
    const [dataAPI, setdataAPI] = useState([]);
    const [totaloftotal, settotaloftotal] = useState(0);
    const [totalperhour, setTotalperhour] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

    function cal_total_per_day(arr){
      let total = 0
      arr.forEach(item => {
          total += item
      })
      return total
  }

    
    useEffect( () => {
      if (props.token){
        getDataliesFromAPI();
      }
    }, [props.token]);

    async function getDataliesFromAPI(){

      const config = {headers: {'Authorization': 'Bearer ' + props.token}};
      const data = await axios.get(dataUrl, config);
      
      const mappedData = data.data.map((item) => {
        const storeData = {
        id:item.id,
        location: item.location,
        hourly_sales:item.hourly_sales,
        totalperday:cal_total_per_day(item.hourly_sales),
        }
        
        return storeData
    });
   
      let a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      let total=0
      mappedData.forEach((item)=>{

        item.hourly_sales.forEach((d, i) => {
          a[i] = d + a[i]
          total+=d
        })
    
        
        
      })

      
      settotaloftotal(total)
      setTotalperhour(a)
    
      
      setdataAPI(mappedData);
      
    }
     
    return(
        <div className="bg-green-50">
      <Head1/>

      <Header/>

      <Main senumberoflocaton={senumberoflocaton} numberoflocaton={numberoflocaton} dataAPI={dataAPI} totalperhour={totalperhour} totaloftotal={totaloftotal}/>

      
      <Footer numberoflocaton={numberoflocaton}/>
    </div>
    );
  }