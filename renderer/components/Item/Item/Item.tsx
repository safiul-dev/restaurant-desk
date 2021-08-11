import { observer } from 'mobx-react';
import {useState} from 'react';
import { ItemDatas } from './ItemData';
import { CategoryDatas } from '../Category/CategoryData';
import React from 'react';
import { SubItemDatas } from '../SubItemData';
 
class Item extends React.Component{

    state = {
        itemUniqId: '',
        title: '',
        description: '',
        price: '',
        categoryUniq: '',
        active: '1',
        ratio: '1:1',
        modal: false,
        // subItem section here below
        isSubItemEditOption: false,
        ItemUniq: '',
        subUniq: '',
        subItemModal: false,
        edit: true,
        editId: '',
        tr: null,
        thisKey: this
    }

    // Modal showing for Sub Item Adding and editing and deleting using Item Uniq 
    async subItemShow (itemUniq, id) {
        ItemDatas.data.find(item => {
            if(item.uniq === id){
                this.setState({
                    isSubItemEditOption: true,
                    itemUniqId: id,
                    ItemUniq: itemUniq,
                    title: item.title,
                    description: item.description,
                    price: item.price,
                    
                });
            }
        })
        
        if(!!SubItemDatas.data.length) {
            SubItemDatas.data.find( (subItem) => {
                if(subItem.itemUniq === itemUniq) {
                    SubItemDatas.itemIdByAllData.push(subItem)
                   
                } 
               
            } );
        }

        this.setState({
            subItemModal: true,
            modal: true
        })

    }


    // editing SubItem By Id  
    editSubItem (id) {
        
        SubItemDatas.itemIdByAllData.find(item => {if(item.uniq === id) {
            this.setState({
                title: item.title,
                description: item.description,
                ratio: item.ratio,
                price: item.price,
                subUniq: item.uniq,
            })
        }})
        
        this.setState({edit: false, editId: id});
    }


    async saveSubItem (uniqId) {
        await SubItemDatas.updateSubItem(this.state.title, this.state.description, this.state.price, this.state.ratio, uniqId)
        this.setState({edit: true,  editId: ''});
    }

    async addNewSubItem (subItemUniq,itemUniq) {
        
        // console.log(subItemUniq, this.state.title, this.state.description, this.state.price, this.state.ratio, itemUniq)
        await SubItemDatas.addSubItem(subItemUniq, this.state.title, this.state.description, this.state.price, this.state.ratio, itemUniq)
        
        this.setState({tr: null,edit: true, editId: ''});
    }

    async deleteSubItem (id, list) {
        if(id === null && list === null) {
            this.setState({tr:null})
        }else{
            await SubItemDatas.delete(id)
            await SubItemDatas.getAllSubItems()
            const index = SubItemDatas.itemIdByAllData.indexOf(list)
            SubItemDatas.itemIdByAllData.splice(index, 1)
        }
    }

    addNewTr (self) {
        const uniq = Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);
        self.setState({
            subUniq: uniq,
            edit: false, 
            
            tr: 
            <tr className="border-white border overflow-x-visible" >
                <td className="border-white border text-center"  ><input type="text" defaultValue={this.state.title} onChange={(e) => this.setState({title: e.target.value})} className="outline-none" /> </td>
                <td className="border-white border text-center" ><input type="text" defaultValue={this.state.description} onChange={(e) => this.setState({description: e.target.value})} className="outline-none" /> </td>
                <td className="border-white border text-center" ><input type="text" defaultValue={this.state.price} onChange={(e) => this.setState({price: e.target.value})} className="outline-none" /> </td>
                <td className="border-white border text-center "> <input type="text" defaultValue={this.state.ratio} onChange={(e) => this.setState({ratio: e.target.value})} className="outline-none" /> </td>
                <td className="border-white border text-center">
                    <div className="flex flex-row justify-center items-center">

                    <button onClick={() => this.addNewSubItem(uniq, this.state.ItemUniq)} className="text-primary hover:text-blue">
                        Save
                    </button>
                    <button onClick={() => this.deleteSubItem(null, null)} className="text-red hover:text-red-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                    </div>
                </td>
            </tr>
        
        })
        
    }
    
     Modal() {
        if(!this.state.modal){
            return null;
        }
        
        return (
            <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="false">
                <div className="flex items-end justify-center min-h-screen w-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            

                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        {this.state.subItemModal?
                        <div className="w-full h-full">
                            <div className="flex flex-row justify-between">
                                <h1 className="text-primary font-bold">Sub Item</h1>
                                <button className="bg-primary hover:bg-blue text-white rounded-full outline-none px-1" onClick={() => this.addNewTr(this)}>Add New</button>
                            </div>
                            
                                    {!!SubItemDatas.itemIdByAllData.length?
                                    <div className="overflow-x-auto overflow-y-auto">

                                   
                                    <table className="bg-secondary w-width99% my-1 overflow-y-auto ">
                                        <thead className="bg-gray text-white uppercase">
                                                <tr className="border-white border">
                                                <th className="border-white border w-width20% text-center">Title</th>
                                                <th className="border-white border w-width35% text-center">Description</th>
                                                    <th className="border-white border w-width20% text-center">Price</th>
                                                    <th className="border-white border w-width10% text-center">Ratio</th>
                                                    <th className="border-white border w-width15% text-center">Action</th>
                                                </tr>
                                            </thead>

                                    <tbody>
                    
                                        { SubItemDatas.itemIdByAllData.map( (list, index) => 
                                        <tr className="border-white border overflow-x-visible" key={index}>
                                            <td className="border-white border text-center"  >{this.state.editId === list.uniq?<input type="text" className="" onChange={(e) => this.setState({title: e.target.value})} defaultValue={this.state.title}/> : list.title}</td>
                                            <td className="border-white border text-center" >{this.state.editId === list.uniq?<input type="text" className="" onChange={(e) => this.setState({description: e.target.value})} defaultValue={this.state.description}/> : list.description}</td>
                                            <td className="border-white border text-center" >{this.state.editId === list.uniq?<input type="text" className="" onChange={(e) => this.setState({price: e.target.value})} defaultValue={this.state.price}/> : list.price}</td>
                                            <td className="border-white border text-center "> {this.state.editId === list.uniq?<input type="text" className="" onChange={(e) => this.setState({ratio: e.target.value})} defaultValue={this.state.ratio}/> : list.ratio}

                                            </td>
                                            
                                            <td className="border-white border text-center">
                                                <div className="flex flex-row justify-center items-center">
                                                <button onClick={() => {this.state.edit?this.editSubItem(list.uniq) : this.saveSubItem(list.uniq)}} className="text-primary hover:text-blue">
                                                    {this.state.editId === list.uniq? "Update" : "Edit" }
                                                </button>
                                                <button onClick={() => this.deleteSubItem(list.uniq, list)} className="text-red hover:text-red-300">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                                </div>
                                            </td>
                                        </tr>) 

                                        }
                                        {this.state.tr}
                                </tbody>
                            
                             </table>
                             </div>
                        
                            : 
                                                
                        <div className="w-full overflow-x-auto overflow-y-auto h-full">
                            <table className="bg-secondary w-width99% mx-auto my-1 overflow-y-auto">
                                <thead className="bg-gray text-white uppercase">
                                    <tr className="border-white border">
                                    <th className="border-white border w-width15% text-center">Title</th>
                                    <th className="border-white border w-width45% text-center">Description</th>
                                        <th className="border-white border w-width20% text-center">Price</th>
                                        <th className="border-white border w-width10% text-center">Ratio</th>
                                        <th className="border-white border w-width10% text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.tr}
                                </tbody>
                            </table>
                                
                                
                        </div>
                    
                        }
                        </div>
                          :
                            <div className="w-full ">
                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Title:</label>
                                        <input type="text" value={this.state.title}onChange={(e) => this.setState({title: e.target.value})} name="title" className="h-8 px-2 w-full rounded-md border border-gray outline-none" />
                                    </div>                              

                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Description:</label>
                                        <textarea onChange={(e) => this.setState({description: e.target.value})} defaultValue={this.state.description} name="description" className="h-16 px-2 w-full rounded-md border border-gray outline-none" ></textarea>
                                    </div>

                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Price:</label>
                                        <input type="text" value={this.state.price}onChange={(e) => this.setState({price: e.target.value})} name="price" className="h-8 px-2 w-full rounded-md border border-gray outline-none" />
                                    </div>

                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Categorys:</label>
                                        <select className="h-8 px-2 w-full rounded-md border border-gray outline-none" name="status" defaultValue={this.state.categoryUniq} onChange={(e) => this.setState({categoryUniq: e.target.value})} >
                                            {
                                            CategoryDatas.data.map((category, index) =>
                                                    category.active?
                                               <option key={index} value={category.uniq}>{category.title}</option>
                                               : 
                                               null
                                            )}
                                        </select>
                                    </div>
                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Status:</label>
                                        <select className="h-8 px-2 w-full rounded-md border border-gray outline-none" name="status" defaultValue={this.state.active} onChange={(e) => this.setState({active: e.target.value})} >
                                            <option value="1">Active</option>
                                            <option value="0">UnActive</option>
                                        </select>
                                    </div>
                        </div>
                    
                        }
                     </div>   
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        {this.state.isSubItemEditOption? null :
                        <button onClick={() => this.updateModal(this.state.itemUniqId)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium bg-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Update
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

    async  updateModal (id) {

        const categoryId = this.state.categoryUniq === '' ? CategoryDatas.activeData[0].uniq : this.state.categoryUniq
        await ItemDatas.updateItem(this.state.title, this.state.description,categoryId,this.state.price,this.state.active,id)

        this.setState({modal: false})
        const indexHas = []
        CategoryDatas.activeData.map((item, index) =>  indexHas.push(index))
        for (let i=0; i<indexHas.length; i++) {
            CategoryDatas.activeData.pop()
        }
    }
    
     cancelModal() {
         const indexHas = []
         
        SubItemDatas.itemIdByAllData.map((item, index) =>  indexHas.push(index))
        for (let i=0; i<indexHas.length; i++) {
            SubItemDatas.itemIdByAllData.pop()
        }
        const categoryIndex = []
        CategoryDatas.activeData.map((item, index) =>  categoryIndex.push(index))
        for (let i=0; i<categoryIndex.length; i++) {
            CategoryDatas.activeData.pop()
        }
        this.setState({

            itemUniqId: '',
            ItemUniq: '',
            title: '',
            description: '',
            price: '',
            ratio: '1:1',
            subUniq: '',
            tr: null,
            editId: '',
            isSubItemEditOption: false,
            subItemModal:false,
            modal: false})
    }

    
     editItems (uniq) {
       CategoryDatas.data.find((item, index) => item.active? CategoryDatas.activeData.push(item) : null)
       ItemDatas.data.find((item) => {if(item.uniq === uniq) {
           this.setState({
            itemUniqId: item.uniq,
            title: item.title,
            description: item.description,
            price: item.price,
            categoryUniq: item.categoryUniq,
            active: item.active? "1" : "0",   
            modal: true,})
       }})

     
    }

    async deleteItem (id, item) {
            await ItemDatas.delete(id)
            const index = ItemDatas.data.indexOf(item)
            ItemDatas.data.splice(index,1)
    }


     

  render () {
    return (
        <div>

        {ItemDatas.data.length?
        
            <table className="bg-secondary w-width99% mx-auto my-1 overflow-y-auto">
                <thead className="bg-gray text-white uppercase">
                        <tr className="border-white border">
                        <th className="border-white border w-width20% text-center">Title</th>
                        <th className="border-white border w-width35% text-center">Description</th>
                            <th className="border-white border w-width10% text-center">Price</th>
                            <th className="border-white border w-width10% text-center">Category</th>
                            <th className="border-white border w-width10% text-center">Status</th>
                            <th className="border-white border w-width15% text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        
                            { ItemDatas.data.map( (list, index) => 
                            <tr className="border-white border" key={index}>
                                <td className="border-white border text-center">{list.title}</td>
                                <td className="border-white border text-center">{list.description}</td>
                                <td className="border-white border text-center">{list.price}</td>
                                <td className="border-white border text-center">{CategoryDatas.data.map((category) => category.uniq === list.categoryUniq? category.title: "")}</td>
                                <td className="border-white border text-center ">{list.active? <span className=" px-1 bg-primary rounded-full text-white">Active</span> : <span className=" px-1 bg-yollow rounded-full text-white">UnActive</span>}</td>
                                <td className="border-white border text-center">
                                    <div className="flex flex-row justify-center items-center">

                                    
                                    <button onClick={() => this.subItemShow(list.uniq, list.uniq)} className="outline-none h-6 w-6 mx-2 text-primary font-bold hover:text-blue">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                    </button>
                                    <button onClick={() => this.editItems(list.uniq)} className="text-primary hover:text-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button onClick={() => this.deleteItem(list.uniq, list)} className="text-red hover:text-red-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </button>
                                    </div>
                                </td>
                            </tr>) 

                            }
                    
                    </tbody>
                
            </table>

                : 
                                    
                <div className="w-full h-full">
                <table className="bg-secondary w-width99% mx-auto my-1 overflow-y-auto">
                    <thead className="bg-gray text-white uppercase">
                        <tr className="border-white border">
                        <th className="border-white border w-width15% text-center">Title</th>
                        <th className="border-white border w-width45% text-center">Description</th>
                            <th className="border-white border w-width20% text-center">Price</th>
                            <th className="border-white border w-width10% text-center">Status</th>
                            <th className="border-white border w-width10% text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                    </table>
                    <div className="flex justify-center items-center">
                     <h1 className="text-center text-secondary font-extrabold text-xl">Data Not Found</h1>
                    </div>
                    
                </div>
        
        }
        
        { this.state.modal? this.Modal() : null}
        </div>
     );
  }
}
export default observer(Item);