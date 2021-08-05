// import { Result } from "postcss";
import { useState } from "react"
import { hours } from "../data"


export default function Main(props){

    const [location, setLocation] = useState("");
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [avg,setAvg] = useState("");
    const [report,setReport] = useState("");
    const [sum,setSum] = useState("");


    function locationHandler(event){
        setLocation(event.target.value);
    }

    function minHandler(event){
        setMin(event.target.value);
    }

    function maxHandler(event){
        setMax(event.target.value);
    }

    function avgHandler(event){
        setAvg(event.target.value);
    }

    function onCreate(event){
        event.preventDefault();
        const res = []
        const data = {
            id: report.length+1,
            location: location,
            cookies: []
        }


        for(let i=0; i<14; i++){
            let sum = Math.floor(Math.random()*((parseInt(max) - parseInt(min)+1))+parseInt(min))
            
            data.cookies.push(sum)

            for (let j=0; j<report.length+1; j++){
                sum+= report[j] ? report[j].cookies[i]:0
            }

            res.push(sum)
        }

        setReport(
            [...report, data]
        )
        setSum(res)
        props.setBranches(
            report.length+1
        )
    }



return (
    <main className='grid w-full p-10 px-0 text-center bg-green-200 justify-items-stretch'>
    <h1 className = "p-5 text-2xl">Create Cookie Stand</h1>
  
  
  <form className="px-10 py-5 mx-12 bg-green-300 rounded w-4/5justify-self-center" onSubmit = {onCreate}>

    <label for='location' className = "inline-block m-3" >Location</label>
    <input name="location" type='text' onChange = {locationHandler}></input>

    <label className = "inline-block m-3" for='loc'>Minimum Customers Per Hour</label>
    <input name="min" type='number' onChange = {minHandler}></input>

    <label for='loc' className = "inline-block m-3">Maximum Customers Per Hour</label>
    <input name="max" type='number' onChange = {maxHandler}></input>

    <label for='loc' className = "inline-block m-3">Average Cookies per Sale</label>
    <input name="avg" type='number' onChange = {avgHandler}></input>

    <button className = "p-8 py-5 m-3 bg-green-500" type = "submit">Create</button>

    {/* <p className='m-5 text-gray-800'>Report Table coming soon .....</p>
    <p className="m-3">{JSON.stringify(store)}</p> */}

    
  </form>

  <div className = 'flex flex-col ... text-center ... mb-8 ... container mx-auto w-4/5'>
      {
          (report.length==0)?
          <h2>No Cookie Stands Available</h2> :

          <table className = 'border border-collapse border-gray-900 rounded-lg'>
              <thead className = 'bg-green-500'>
                  <tr key = '0'>
                      <th>Location</th>
                      {hours.map(hour=>(<th>{hour}</th>))}
                      <th>Totals</th>
                  </tr>
              </thead>

              <tbody className = 'border border-collapse border-gray-900'>
                  {report.map(data=>(
                      <tr className = 'border-collapse border-gray-900' key={data.id}>
                          <td className = 'border border-collapse border-gray-900'>{data.location}</td>
                          {data.cookies.map(cookie => (<td className="border border-collapse border-gray-900">{cookie}</td>))}
                          <td className="border border-collapse border-gray-900">{data.cookies.reduce((acc, curr) => {acc = acc+curr; return acc},0)}</td>
                      </tr>
                  ))}
              </tbody>

              <tfoot className = 'bg-green-500 border border-collapse border-gray-900'>
                  <tr className = 'border border-collapse border-gray-900' key={report.length+1}>
                    <th className="border border-collapse border-gray-900">Totals</th>
                    {sum.map(sum => (<th className="border border-collapse border-gray-900">{sum}</th>))}
                    <th className="border border-collapse border-gray-900">{sum.reduce((acc, curr) => {acc = acc+curr; return acc},0)}</th>
                  </tr>
              </tfoot>
          </table>
      }

  </div>
  </main>
)  }