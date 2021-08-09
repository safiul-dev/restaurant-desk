
import Link from 'next/link';
import React from 'react'
import AppLayout from '../../AppLayout/AppLayout';
import {observer} from 'mobx-react'
import { TableDatas } from './TableData';


 class Index extends React.Component{

    state = {
        uniqId: '',
        modal: false,
        title: '',
        capacity: '',
        table: false,
        isMounted: false

    }
    constructor (props) {
        super(props);
    }
    componentDidMount(){
        this.setState({isMounted: true});
        TableDatas.getTables()
    }

    componentWillUnmount () {
        this.setState({isMounted: false})
    }
     Modal() {
        if(!this.state.modal){
            return null;
        }
        
        return (
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="false">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="w-full ">

                            

                                <div className="">
                                    <label className="tracking-widest font-semibold mb-2">Title:</label>
                                    <input type="text" value={this.state.title}onChange={(e) => this.setState({title: e.target.value})} name="title" className="h-8 px-2 w-full rounded-md border border-gray outline-none" />
                                </div>

                                <div className="">
                                    <label className="tracking-widest font-semibold mb-2">Capacity:</label>
                                    <input type="number" value={this.state.capacity} onChange={(e) => this.setState({capacity: e.target.value})} name="capacity" className="h-8 px-2 w-full rounded-md border border-gray outline-none" />
                                </div>

                      

                            


                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    {this.state.uniqId != ''?
                            <button onClick={() => this.updateModal(this.state.uniqId)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium bg-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Updaed
                            </button> 
                            : 
                            <button onClick={() => this.saveModal()} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium bg-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                                Save
                            </button>   
                        }
                        <button onClick={() => this.cancelModal()} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                    </div>
                </div>
        </div>
        )
    }

    saveModal() {
        const uniq = Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);
        TableDatas.addTable(uniq, "user1","store1", this.state.title, this.state.capacity, true)
        this.setState({modal: false})
    }

   async updateModal (uniqId) {
        await TableDatas.updateTable(this.state.title, this.state.capacity, true, uniqId)
        this.setState({modal: false})
    }

    cancelModal() {
        this.setState({modal: false})
    }

    resetForm() {
        this.setState({
            uniqId: '',
            title: '',
            capacity: '',  
        })
     }

 showTable () {
     return (
        <table className="bg-secondary w-full mx-auto my-1 overflow-y-auto">
        <thead className="bg-gray text-white uppercase">
             <tr className="border-white border">
                
                <th className="border-white border w-width65% text-center">title</th>
                 <th className="border-white border w-width15% text-center">Capacity</th>
                 <th className="border-white border w-width10% text-center">Status</th>
                 <th className="border-white border w-width10% text-center">Action</th>
             </tr>
         </thead>

         <tbody>
             
                 {TableDatas != undefined ?TableDatas.data.map( (list, index) => 
                 <tr className="border-white border" key={index}>
               
                 <td className="border-white border text-center">{list.title}</td>
                 <td className="border-white border text-center">{list.capacity}</td>
                 <td className="border-white border text-center ">{list.available_status? <span className=" px-1 bg-primary rounded-full text-white">Active</span> : <span className=" px-1 bg-yollow rounded-full text-white">UnActive</span>}</td>
                 <td className="border-white border flex items-center justify-center">
                     <button onClick={() =>this.editTable(list.uniq)} className="text-primary hover:text-blue">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                         </svg>
                     </button>
                     {/* <button onClick={() => this.deleteWaiter(list.id)} className="text-red hover:text-red-300">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                     </svg>
                     </button> */}
                 </td>
             </tr>):""}
         
         </tbody>
     </table>
     )
 }

   async editTable (uniq) {
            
            TableDatas.data.find((table, index) => {if(table.uniq === uniq){
                this.setState({
                    uniqId: table.uniq,
                    title: table.title,
                    capacity: table.capacity,
                    modal: true,
                })
            }})

    }

    render() {
        return (
        <React.Fragment>
            <AppLayout>
            <div className="w-full h-middleHeight flex">
                <div className="w-width3% bg-black h-full"></div>
                <div className="w-width94% bg-white h-full">
                    <div className="w-width80% h-full mx-auto 2xl:mt-4 xl:mt-3 lg:mt-2 md:mt-1 sm:mt-0.5">
                        <div className="h-height9% w-full flex justify-center items-center 2xl:mb-6 xl:mb-5 lg:mb-4 md:mb-3 sm:mb-2">
                            <svg className="h-full" viewBox="0 0 45 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M45 0L45 80L3.17786e-07 80L19.3835 39.8988L3.8147e-06 -1.96701e-06L45 0Z" fill="#519E8A"/>
                            </svg>
                            <div className="bg-primary h-full text-center flex items-center justify-center">
                            
                            <h1 className=" text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-xl lg:text-lg md:text-base sm:text-tiny uppercase">tables</h1>
                            </div>
                            <svg className="h-full" viewBox="0 0 45 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 80L2.79753e-06 0L45 2.45877e-06L25.6165 40.1012L45 80L0 80Z" fill="#519E8A"/>
                            </svg>

                        </div>

                        <div className="h-height70% w-full">
                            <div className="flex justify-between py-1">

                            
                                <div className="flex flex-row">
                                    <div onClick={() => this.setState({table: true})} className="mr-2 outline-none"> <svg  width="25" height="16" viewBox="0 0 25 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M-3.21502e-05 12.5714L-3.24249e-05 15.7143L24.6428 15.7143L24.6428 12.5714L-3.21502e-05 12.5714ZM-3.18754e-05 9.42859L-3.16007e-05 6.28573L24.6428 6.28573L24.6428 9.42859L-3.18754e-05 9.42859ZM-3.13259e-05 3.14285L-3.10511e-05 -6.92272e-06L24.6428 -4.76837e-06L24.6428 3.14285L-3.13259e-05 3.14285Z" fill="#519E8A"/>
                                        </svg>
                                    </div>
                                    <div onClick={() => this.setState({table: false})} className="outline-none">
                                        <div className="">
                                            <div className="flex mb-0.5">
                                                <div className="h-1 w-1 bg-primary mr-1"></div>
                                                <div className="h-1 w-1 bg-primary mr-1"></div>
                                                <div className="h-1 w-1 bg-primary"></div>
                                            </div>
                                            <div className="flex mb-0.5">
                                                <div className="h-1 w-1 bg-primary mr-1"></div>
                                                <div className="h-1 w-1 bg-primary mr-1"></div>
                                                <div className="h-1 w-1 bg-primary"></div>
                                            </div>
                                            <div className="flex">
                                                <div className="h-1 w-1 bg-primary mr-1"></div>
                                                <div className="h-1 w-1 bg-primary mr-1"></div>
                                                <div className="h-1 w-1 bg-primary"></div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div>
                                <button onClick={() => this.setState({modal: true})} className=" bg-gray text-white rounded-full px-2 uppercase hover:text-primary hover:bg-white">Add Table</button>
                                </div>
                            </div>  
                                {
                                    this.state.table? this.showTable()
                                    :

                                    <div className="grid grid-flow-row grid-cols-6 gap-2">
                                {TableDatas != undefined ?TableDatas.data.map( (list, index) => 
                                  (
                                    list.available_status?
                                    <div key={index} className="2xl:h-40 xl:h-32 lg:h-28 md:h-24 sm:h-20 h-16 flex justify-center items-center bg-primary rounded-md hover:shadow-2xl">
                                        <div>
                                            <h1 className="uppercase text-white text-center 2xl:text-xl xl:text-lg lg:text-base md:text-tiny sm:text-tiny 2xl:font-bold xl:font-semibold lg:font-mediam md:font-normal sm:font-normal tracking-wide">{list.title}</h1>
                                            <h1 className="uppercase text-white text-center 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-tiny 2xl:font-medium xl:font-medium lg:font-medium md:font-medium sm:font-normal tracking-wider">Capacity : <span className="uppercase text-white 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny 2xl:font-extrabold xl:font-bold lg:font-semibold md:font-medium sm:font-normal tracking-wide ">{list.capacity}</span> </h1>
                                        </div>
                                        
                                    </div>

                                    :

                                    <div key={index} className="2xl:h-40 xl:h-32 lg:h-28 md:h-24 sm:h-20 h-16 flex justify-center items-center bg-secondary rounded-md hover:shadow-2xl">
                                        <div>
                                            <h1 className="uppercase text-white text-center 2xl:text-xl xl:text-lg lg:text-base md:text-tiny sm:text-tiny 2xl:font-bold xl:font-semibold lg:font-mediam md:font-normal sm:font-normal tracking-wide">{list.title}</h1>
                                            <h1 className="uppercase text-white text-center 2xl:text-base xl:text-base lg:text-base md:text-base sm:text-tiny 2xl:font-medium xl:font-medium lg:font-medium md:font-medium sm:font-normal tracking-wider">Capacity : <span className="uppercase text-white 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny 2xl:font-extrabold xl:font-bold lg:font-semibold md:font-medium sm:font-normal tracking-wide ">{list.capacity}</span> </h1>
                                        </div>
                                        
                                    </div>
                                  )
                                    ):""}
                                </div>
                                }
                          
                                
                                
                            
                        </div>

                        <div className="w-full h-height20% flex justify-center items-center">
                                <div className=" uppercase text-center text-gray 2xl:font-extrabold xl:font-bold lg:font-semibold md:font-medium sm:font-normal 2xl:text-base xl:text-tiny lg:text-tiny md:text-smallFont sm:text-extraSmall2">
                                    <h1>Develop by asoftware</h1>
                                    <h1>all right to resell redistrubute only gose to asoftware</h1>
                                </div>
                        </div>
                    </div>
                  
                </div>
                <div className="w-width3% bg-black h-full"></div>
               
            </div>
            {this.state.modal? this.Modal() : null}
            </AppLayout>
        </React.Fragment>
        )
    }
 }
export default observer(Index);

