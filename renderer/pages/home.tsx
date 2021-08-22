import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { loadDataFromStorage, saveDataInStorage } from '../renderer';
import {ipcRenderer} from 'electron'


function Home(props) {
  
  const [value, setValue] = useState('');
  const [itemToTrack, setItem] = useState([]);

  useEffect(() => {
    loadDataFromStorage()
  }, [])

  useEffect(() => {
    ipcRenderer.on("Hendle_fatch_data", HendleRecievedData);
    return () => {
      ipcRenderer.removeListener("Hendle_fatch_data", HendleRecievedData)
    }
  })

  function HendleRecievedData (event, data) {
    console.log("recievedData From")
    // setItem([...data.message])
  }

  // save item 
  const addItem = (item) => {
    console.log("Next Trigered for add new item")
    saveDataInStorage(item)
    setValue(item)
  }

  useEffect(() => {
    ipcRenderer.on("Handle_Save_Data", HandleNewData)
    return () => {
      ipcRenderer.on("Handle_Save_Data", HandleNewData)
    }
  })

  const HandleNewData = (even, data) => {
    console.log("Renderer Resieved new Items")
      setItem([...itemToTrack, data.message])
  }

  const HandleChange = (e) => {
    setValue(e.target.value)
  }

  const HandleSubmit = (e) => {
    e.preventDefault()
    addItem(value)
  }
  return (
    <React.Fragment>
    <div className="bg-white w-full flex h-middleHeight">

            <div className="w-6/12 mx-auto mt-10">
                    <button className="my-4 mx-4 bg-primary text-white rounded"><Link href="/Deshboard/Index"><a>Deshboard</a></Link></button>
                    <button className="my-4 mx-4 bg-primary text-white rounded"><Link href="/Order/Index"><a>Order</a></Link></button>
                    {/* <button type="button" >Show Model</button> */}
                   
            </div>

            <div>
              <form action="" onSubmit={HandleSubmit} >
              <label htmlFor="">Enter a Value: </label>
              <input type="text" onChange={HandleChange} name="value" placeholder="enter a value"/>

              <button type="submit">Save Data</button>
              </form>

              <div>
                <table>
                  <thead>
                    <tr>
                      <th>numer</th>
                      <th>Data</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                    
                       { itemToTrack.length? itemToTrack.map((item, index) =>  <td key={index}> {item} </td>) : null }
               
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
           
  </div>

  

  </React.Fragment>
  );
}



export default Home;
