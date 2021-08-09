import React from "react";
import { TableDatas } from '../../../../pages/TableCrud/TableData';
import { WaiterDatas } from "../../../../pages/Waiter/WaitersData";
import { CustomerDatas } from '../../../../pages/Customer/CustomerData';
import Select from 'react-select';
import console from "console";

export default class LeftbarButtons extends React.Component{

    state = {
        currentComponent: null,
        showModal: false,
        table: '',
        waiter: '',
        customer: '',
        ticketNote: '',
        guests: '',
        
        data : [
        {
            name:'change table',
            component:'changeTable'
        },
        {
            name:'select waiter',
            component:'selectWeiter'
        },
        {
            name:'select customer',
            component:'selectCustomer'
        },
        {
            name:'ticket note',
            component:'ticketNote'
        },
        {
            name:'cancel all',
            component:'cancelAll'
        },
        {
            name:'number of guest',
            component:'numberOfGuest'
        },
        {
            name:'print',
            component:'print'
        },
        {
            name:'split bill',
            component:'splitBill'
        },
        {
            name:'add ticket',
            component:'addTicket'
        },
    ]}
    constructor(props){
        super(props);
       
    }


    

    Modal() {
        if(this.state.showModal === false){
            return null;
        }
        
        return (
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="false">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            {
                               this.currentBodyInModal()
                            }


                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button onClick={() => this.saveModal()} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium bg-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Save
                        </button>
                        <button onClick={() => this.cancelModal()} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                    </div>
                </div>
        </div>
        )
    }

    currentBodyInModal() {
        
            if(this.state.currentComponent === 'changeTable') {
                return   <div className="w-full">
                            <div className="text-center font-bold text-primary text-xl uppercase">Select Table</div>
                                
                            <select className="h-10 outline-none rounded border border-primary w-full text-grayNormal" defaultValue={this.state.table} onChange={(e) => this.setState({table: e.target.value}) } name="" id="">
                            <option defaultValue="0">Select A Table</option>
                                {TableDatas.data.map((table, index) => table.available_status? 
                                    <option className="block w-full" key={index} defaultValue={table.uniq}>{table.title}</option> : null
                                )}
                                
                            </select>
                        </div>
            }else if (this.state.currentComponent === 'selectWeiter') {
                return <div className="w-full">
                            <div className="text-center font-bold text-primary text-xl uppercase">Select Waiter</div>
                                
                            <select className="h-10 outline-none rounded border border-primary w-full text-grayNormal" defaultValue={this.state.waiter} onChange={(e) => this.setState({waiter: e.target.value}) } name="" id="">
                            <option defaultValue="0">Select A Waiter</option>
                                {WaiterDatas.data.map((waiter, index) => waiter.active? 
                                    <option className="block w-full" key={index} defaultValue={waiter.uniq}>{waiter.name}</option> : null
                                )}
                                
                            </select>
                        </div>
            }else if (this.state.currentComponent === 'selectCustomer') {
                const val = CustomerDatas.data.map((opt, index) => ({ value: opt.uniq, label: opt.name }))

                return <div className="w-full">
                            <div className="text-center font-bold text-primary text-xl uppercase">Select Customer</div>

                        <Select
                                className="border border-primary rounded text-gray"
                                onChange={(e) => this.setState({customer: e.value})}
                                options={val}
                            />
                        </div>
            }else if(this.state.currentComponent === 'ticketNote') {
                return<div className="w-full">
                            <div className="text-center font-bold text-primary text-xl">Write Down Some Note for this Order</div>
                                
                            <textarea name=""  onChange={(e) => this.setState({ ticketNote: e.target.value})} id="" className="w-full h-20 outline-none rounded border border-primary px-2 text-grayNormal" defaultValue={this.state.customer}/>
                        </div> 
            }else if (this.state.currentComponent === 'cancelAll') {
               return <div className="w-full flex justify-evenly">
                           <div onClick={this.clearAllOrderPage} className="text-center font-bold text-white text-xl uppercase bg-red h-16 w-24 rounded-md pointer shadow-md hover:bg-tomato ">
                               Clear All
                           </div>
                           <div>
                               Clear All
                           </div>
                       </div> 
            }else if (this.state.currentComponent === 'numberOfGuest') {
                return   <div className="w-full">
                            <div className="text-center font-bold text-primary text-xl uppercase">how many guest have?</div>
                                
                            <input onChange={(e) => this.setState({ guests: e.target.value})} value={this.state.guests} type="number" min="0" max="100" className="w-full rounded h-10 px-2 text-grayNormal outline-none border border-primary" placeholder="Enter guest..." />
                        </div>
            }
        
    }

    clearAllOrderPage () {
        console.log("hello")
    }

    saveModal() {
        if (this.state.currentComponent === 'changeTable') {

        }else if (this.state.currentComponent === 'selectWeiter') {
            
        }else if (this.state.currentComponent === 'selectCustomer') {
            
        }else if (this.state.currentComponent === 'ticketNote') {
            
        }else if (this.state.currentComponent === 'numberOfGuest') {
            
        }
    }

    cancelModal() {
        this.setState({ 
            showModal: false
        })
    }


    changeComponent(component) {
        this.setState({
            currentComponent: component,
            showModal:true
        })
        
    }
    
    render(){ return(
        <div className="mx-1 mt-1 overflow-x-auto h-full">

                {
                this.state.data.map((obj, index) =><button key={index} onClick={() => this.changeComponent(obj.component)} className="w-full bg-primary rounded h-height10% flex justify-center items-center mt-1">
                    <h1  className="text-white uppercase not-italic sm:font-light md:font-light lg:font-semibold xl:font-bold tracking-wide font-sans sm:text-smallFont md:text-tiny lg:text-lg xl:text-xl 2xl:text-2xl sm:leading-3 md:leading-4 lg:leading-5 xl:leading-6 text-center">
                        {obj.name}
                    </h1>
                    </button>)
                }

                { this.state.showModal == true ? this.Modal() : null }

        </div>
    
    )}
}