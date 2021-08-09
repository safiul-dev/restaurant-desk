import AppLayout from '../../AppLayout/AppLayout';
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { CustomerDatas } from './CustomerData';
import { GetStaticProps, GetStaticPropsContext } from 'next';
import DataNotFound from '../../components/Customer/DataNotFound';
class Index extends React.Component{

    state = {
        uniq: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        active: '1',
        modal: false,
        isMounted: false
    }
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        this.setState({isMounted: true})
        CustomerDatas.getCustomsers()
    }
    componentWillUnmount () {
        this.setState({isMounted: false})
    }

    
     modal() {
        return(
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="false">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                

                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="w-full ">

                                

                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Name:</label>
                                        <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} name="name" className="h-8 px-2 w-full rounded-md border border-gray outline-none" />
                                    </div>

                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Email:</label>
                                        <input type="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} name="email" className="h-8 px-2 w-full rounded-md border border-gray outline-none" />
                                    </div>
                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Phone:</label>
                                        <input type="text" value={this.state.phone} onChange={(e) => this.setState({phone: e.target.value})} name="phone" className="h-8 px-2 w-full rounded-md border border-gray outline-none" />
                                    </div>
                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Address:</label>
                                        <input type="text" value={this.state.address} onChange={(e) => this.setState({address: e.target.value})} name="address" className="h-8 px-2 w-full rounded-md border border-gray outline-none" />
                                    </div>
                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Status:</label>
                                        <select className="h-8 px-2 w-full rounded-md border border-gray outline-none" name="status" value={this.state.active} onChange={(e) => this.setState({active: e.target.value})} >
                                            <option value="1">Active</option>
                                            <option value="0">UnActive</option>
                                        </select>
                                    </div>

                        

                                


                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        {this.state.uniq != ''?
                            <button onClick={() => this.updateModal(this.state.uniq)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium bg-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
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
    async saveModal() {
       
       const uniq = Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);
       console.log(uniq, this.state.name, this.state.email, this.state.phone, this.state.address, this.state.active)
       await CustomerDatas.addCustomer(uniq, "user1", this.state.name, this.state.email, this.state.phone, this.state.address, this.state.active)
        this.resetForm()
        this.setState({modal: false})
    }

    async updateModal (uniq) {
        await CustomerDatas.updateCustomer(
            this.state.name, 
            this.state.email, 
            this.state.phone, 
            this.state.address, 
            this.state.active, uniq)
            this.setState({modal: false})
            
    }

     cancelModal() {
        this.setState({modal: false})
        this.resetForm()
    }

    async editCustomer (uniq) {
        CustomerDatas.data.find((customer, index) =>{if(customer.uniq === uniq){
            this.setState({
                uniq: uniq,
                name: customer.name,
                email: customer.email,
                phone: customer.phone,
                address: customer.address,
                active: customer.active? "1" : "0",
                modal:true,
            })
        }})
       
    }

    async deleteCustomer (uniq, customer) {
        await CustomerDatas.delete(uniq)
        const index = CustomerDatas.data.indexOf(customer)
        CustomerDatas.data.splice(index, 1)
        await CustomerDatas.getCustomsers()
        
    }
    
    resetForm() {
        this.setState({
            uniq: '',
            name: '',
            email: '',
            phone: '',
            address: '',
            active: "1",
            customeruniq: null
        })
     }
    render() {
    return (
        <React.Fragment>
        <AppLayout>
            <div className="w-full h-middleHeight flex">
                <div className="w-width3% bg-black h-full"></div>
                <div className="w-width94% bg-white h-full">
                    <div className="w-width70% h-full mx-auto 2xl:mt-6 xl:mt-5 lg:mt-4 md:mt-3 sm:mt-2">
                        <div className="h-height9% w-full flex justify-center items-center 2xl:mb-6 xl:mb-5 lg:mb-4 md:mb-3 sm:mb-2">
                            <svg className="h-full" viewBox="0 0 45 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M45 0L45 80L3.17786e-07 80L19.3835 39.8988L3.8147e-06 -1.96701e-06L45 0Z" fill="#519E8A"/>
                            </svg>
                            <div className="bg-primary h-full text-center flex items-center justify-center">
                            <h1 className=" text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-xl lg:text-lg md:text-base sm:text-tiny uppercase">Customers</h1>
                            </div>
                            <svg className="h-full" viewBox="0 0 45 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M0 80L2.79753e-06 0L45 2.45877e-06L25.6165 40.1012L45 80L0 80Z" fill="#519E8A"/>
                            </svg>

                        </div>

                        <div className="h-height70% w-full bg-primary rounded-md">
                                <div className="float-right pr-2 my-1 text-center">
                                   <button onClick={() => this.setState({modal: true})} className=" bg-gray text-white rounded-full px-2 font-bold tracking-widest uppercase hover:text-primary hover:bg-white">Add Customer</button>
                                </div>
                                {CustomerDatas.data.length?
                                
                                <table className="bg-secondary w-width99% mx-auto my-1 overflow-y-auto">
                                   <thead className="bg-gray text-white uppercase">
                                        <tr className="border-white border">
                                           <th className="border-white border w-width15% text-center">Name</th>
                                           <th className="border-white border w-width20% text-center">Email</th>
                                            <th className="border-white border w-width15% text-center">Phone</th>
                                            <th className="border-white border w-width30% text-center">Address</th>
                                            <th className="border-white border w-width10% text-center">Status</th>
                                            <th className="border-white border w-width10% text-center">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        
                                            {CustomerDatas.data.map( (list) => 
                                            <tr className="border-white border" key={list.uniq}>
                                            <td className="border-white border text-center">{list.name}</td>
                                            <td className="border-white border text-center">{list.email}</td>
                                            <td className="border-white border text-center">{list.phone}</td>
                                            <td className="border-white border text-center">{list.address}</td>
                                            <td className="border-white border text-center ">{list.active? <span className=" px-1 bg-primary rounded-full text-white">Active</span> : <span className=" px-1 bg-yollow rounded-full text-white">UnActive</span>}</td>
                                            <td className="border-white border flex items-center justify-center">
                                                <button onClick={() =>this.editCustomer(list.uniq)} className="text-primary hover:text-blue">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                    </svg>
                                                </button>
                                                <button onClick={() => this.deleteCustomer(list.uniq, list)} className="text-red hover:text-red-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                                </button>
                                            </td>
                                        </tr>)}
                                    
                                    </tbody>
                                </table>
                                :
                                   <DataNotFound Name="Name" Email="Email" Phone="Phone" Address="Address" Status="Status" Action="Action" />
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
            { this.state.modal? this.modal() : null }
        </AppLayout>
    </React.Fragment>
    )
}
}

export async function getStaticProps(){
    const res = await fetch(`http://localhost:3000/api/customers`)
    const customers = await res.json()
  
    if (!customers) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { customers }, 
    }
  }

export default observer(Index);