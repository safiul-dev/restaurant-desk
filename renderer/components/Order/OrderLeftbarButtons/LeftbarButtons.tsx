import React from "react";


export default class LeftbarButtons extends React.Component{

    state = {
        currentComponent: null,
        showModal: false,
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
               

                            <h1>hello</h1>


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

    saveModal() {

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
                this.state.data.map((obj, index) =><button onClick={() => this.changeComponent(obj.component)} className="w-full bg-primary rounded h-height10% flex justify-center items-center mt-1">
                    <h1 className="text-white uppercase not-italic sm:font-light md:font-light lg:font-semibold xl:font-bold tracking-wide font-sans sm:text-smallFont md:text-tiny lg:text-lg xl:text-xl 2xl:text-2xl sm:leading-3 md:leading-4 lg:leading-5 xl:leading-6 text-center">
                        {obj.name}
                    </h1>
                    </button>)
                }

                { this.state.showModal == true ? this.Modal() : null }

        </div>
    
    )}
}