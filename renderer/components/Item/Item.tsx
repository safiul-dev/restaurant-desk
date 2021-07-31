import { observer } from 'mobx-react';
import {useState} from 'react';
import { ItemDatas } from '../../pages/Item/ItemData';
export interface ItemProps {
    items:Object
}
 
const Item = observer((props) => {

    const [itemId, setItemId] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [active, setAcive] = useState('1')
    const [isModal, setIsModal] = useState(ItemDatas.modal)
    function Modal() {
        if(!isModal){
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
                                        <input type="text" value={title}onChange={(e) => setTitle(e.target.value)} name="title" className="h-8 px-2 w-full rounded-md border border-gray outline-none" />
                                    </div>                              

                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Description:</label>
                                        <textarea onChange={(e) => setDescription(e.target.value)} defaultValue={description} name="description" className="h-16 px-2 w-full rounded-md border border-gray outline-none" ></textarea>
                                    </div>

                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Price:</label>
                                        <input type="text" value={price}onChange={(e) => setPrice(e.target.value)} name="price" className="h-8 px-2 w-full rounded-md border border-gray outline-none" />
                                    </div>

                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Status:</label>
                                        <select className="h-8 px-2 w-full rounded-md border border-gray outline-none" name="status" value={active} onChange={(e) => setAcive(e.target.value)} >
                                            <option value="1">Active</option>
                                            <option value="0">UnActive</option>
                                        </select>
                                    </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    
                        <button onClick={() => updateModal(itemId)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium bg-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Update
                        </button> 
                        <button onClick={() => cancelModal()} className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                    </div>
                </div>
        </div>
        )
    }

    async function updateModal (id) {
        await ItemDatas.updateItem(title,description,price,active,id)
        await ItemDatas.getItems()
        setIsModal(false)
    }
    
    function cancelModal() {
        setIsModal(false)
    }
    
    function editItems (id) {
       ItemDatas.data.find((item) => {if(item.id === id) {
           setItemId(item.id);
           setTitle(item.title);
           setDescription(item.description);
           setPrice(item.price);
           setAcive(item.active? "1":"0");
           setIsModal(true);
       }})
    }

    async function deleteItem (id, item) {
            await ItemDatas.delete(id)
        const index = ItemDatas.data.indexOf(item)
        ItemDatas.data.splice(index,1)
    }
    return (
        <div>

        {ItemDatas.data.length != 0?
        
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

                    <tbody>
                        
                            { ItemDatas.data.map( (list) => 
                            <tr className="border-white border" key={list.id}>
                                <td className="border-white border text-center">{list.title}</td>
                                <td className="border-white border text-center">{list.description}</td>
                                <td className="border-white border text-center">{list.price}</td>
                                <td className="border-white border text-center ">{list.active? <span className=" px-1 bg-primary rounded-full text-white">Active</span> : <span className=" px-1 bg-yollow rounded-full text-white">UnActive</span>}</td>
                                <td className="border-white border flex items-center justify-center">
                                    <button onClick={() =>editItems(list.id)} className="text-primary hover:text-blue">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                    </button>
                                    <button onClick={() => deleteItem(list.id, list)} className="text-red hover:text-red-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    </button>
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
                    </table>
                    <div className="flex justify-center items-center">
                     <h1 className="text-center text-secondary font-extrabold text-xl">Data Not Found</h1>
                    </div>
                    
                </div>
        
        }
        
        { isModal? Modal() : null}
        </div>
     );
})
 
export default Item;