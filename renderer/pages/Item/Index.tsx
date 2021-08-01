import { table } from "console";
import { observer } from "mobx-react";
import react, { Component } from "react";
import AppLayout from '../../AppLayout/AppLayout';
import Category from "../../components/Item/Category";
import { ItemDatas } from "./ItemData";
import { CategoryDatas } from './CategoryData';
import Item from "../../components/Item/Item";

type P = {
    
};

type IndexState = {
    modal: boolean,
    table: boolean,
    title: string,
    description: string,
    price: string,
    active: string,
    categoryUniq: string,
    moduleName: string,
};

class Index extends Component<P, IndexState> {
    state = {
        modal: false, 
        table: true,
        title: '',
        description: '',
        price: '',
        categoryUniq: '',
        active: "1",

        moduleName: "Add Item",
        
    }
     constructor (props) {
         super(props);
         
     }
    componentDidMount() {
        ItemDatas.getItems()
        CategoryDatas.getCategroy()
        CategoryDatas.getActiveCategory()
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

                                {
                                    this.state.table?
                                <div className="w-full ">
                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Title:</label>
                                        <input type="text" value={this.state.title}onChange={(e) => this.setState({title: e.target.value})} name="title" className="h-8 px-2 w-full rounded-md border border-gray outline-none" />
                                    </div>                              

                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Description:</label>
                                        <textarea value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} name="capacity" className="h-8 px-2 w-full rounded-md border border-gray outline-none" />
                                    </div>

                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Price:</label>
                                        <input type="text" value={this.state.price}onChange={(e) => this.setState({price: e.target.value})} name="title" className="h-8 px-2 w-full rounded-md border border-gray outline-none" />
                                    </div>

                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Categorys:</label>
                                        <select className="h-8 px-2 w-full rounded-md border border-gray outline-none" name="status" onChange={(e) => this.setState({categoryUniq: e.target.value})} >
                                            {CategoryDatas.activeData.map((category) =>
                                               <option key={category.id} value={category.uniq}>{category.title}</option>
                                            )}
                                        </select>
                                    </div>

                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Status:</label>
                                        <select className="h-8 px-2 w-full rounded-md border border-gray outline-none" name="status" value={this.state.active} onChange={(e) => this.setState({active: e.target.value})} >
                                            <option value="1">Active</option>
                                            <option value="0">UnActive</option>
                                        </select>
                                    </div>

                                </div>
                                :
                                <div className="w-full ">
                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Title:</label>
                                        <input type="text" value={this.state.title}onChange={(e) => this.setState({title: e.target.value})} name="title" className="h-8 px-2 w-full rounded-md border border-gray outline-none" />
                                    </div>

                                    <div className="">
                                        <label className="tracking-widest font-semibold mb-2">Status:</label>
                                        <select className="h-8 px-2 w-full rounded-md border border-gray outline-none" name="status" value={this.state.active} onChange={(e) => this.setState({active: e.target.value})} >
                                            <option value="1">Active</option>
                                            <option value="0">UnActive</option>
                                        </select>
                                    </div>
                                </div>


                                }
 
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
    async saveModal () {
        if(this.state.table) {
            
            await ItemDatas.addItem(this.state.title, this.state.description,this.state.categoryUniq, this.state.price, this.state.active)
            await ItemDatas.getItems()
            this.setState({ 
                title: '',
                description: '',
                categoryUniq: '',
                price: '',
                active: '1',
                modal: false
            })
            
        }else{
           await CategoryDatas.addCategory(this.state.title, this.state.active)
           await CategoryDatas.getCategroy()
           this.setState({
               title: '',
               active: '1',
               modal: false
           })
           
        
        }
    }
    cancelModal () {
        this.setState({modal: false})
    }
    render() {
        return (
            <react.Fragment>
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
                                    <h1 className=" text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-xl lg:text-lg md:text-base sm:text-tiny uppercase">Items</h1>
                                    </div>
                                    <svg className="h-full" viewBox="0 0 45 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 80L2.79753e-06 0L45 2.45877e-06L25.6165 40.1012L45 80L0 80Z" fill="#519E8A"/>
                                    </svg>

                                </div>

                                <div className="h-height70% w-full bg-primary rounded-md">
                                <div className="flex justify-between py-1 px-1">

                            
                                    { 
                                      this.state.table?
                                        <div onClick={() => this.setState({table: false, moduleName: "Add Category"})} className="mr-2 outline-none cursor-pointer">
                                            <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M20.7045 0.375H2.29545C1.16578 0.375 0.25 1.38236 0.25 2.625V4.875C0.25 6.11764 1.16578 7.125 2.29545 7.125H20.7045C21.8342 7.125 22.75 6.11764 22.75 4.875V2.625C22.75 1.38236 21.8342 0.375 20.7045 0.375ZM2.29545 9.375H20.7045C21.8342 9.375 22.75 10.3824 22.75 11.625V13.875C22.75 15.1176 21.8342 16.125 20.7045 16.125H2.29545C1.16578 16.125 0.25 15.1176 0.25 13.875V11.625C0.25 10.3824 1.16578 9.375 2.29545 9.375ZM2.5 11.625V13.875H20.5V11.625H2.5ZM2.5 2.625V4.875H20.5V2.625H2.5ZM13.75 18.375H0.25V20.625H13.75V18.375Z" fill="white"/>
                                            </svg>
                                        </div>
                                        :
                                        <div onClick={() => this.setState({table: true, moduleName: "Add Item"})} className="outline-none cursor-pointer">
                                            <div className="">
                                            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                 <path fillRule="evenodd" clipRule="evenodd" d="M8.7793 0.90466H23.5938C23.8164 0.90466 24 1.08953 24 1.31372V5.28833C24 5.51253 23.8164 5.69739 23.5938 5.69739H8.7793C8.55664 5.69739 8.37305 5.51449 8.37305 5.28833V1.31372C8.37305 1.08953 8.55664 0.90466 8.7793 0.90466ZM3.22852 16.4982C4.11914 16.4982 4.92773 16.8621 5.51172 17.4501C6.0957 18.0381 6.45703 18.8504 6.45703 19.7491C6.45703 20.6459 6.0957 21.4601 5.51172 22.0481C4.92773 22.6362 4.12109 23 3.22852 23C2.33594 23 1.5293 22.6362 0.945312 22.0481C0.361328 21.4601 0 20.6459 0 19.7491C0 18.8523 0.361328 18.0381 0.945312 17.4501C1.5293 16.8621 2.33594 16.4982 3.22852 16.4982ZM4.58398 18.3823C4.23633 18.0322 3.75781 17.8159 3.22852 17.8159C2.69922 17.8159 2.21875 18.0322 1.87305 18.3823C1.52539 18.7324 1.31055 19.2142 1.31055 19.7472C1.31055 20.2801 1.52539 20.7639 1.87305 21.114C2.2207 21.464 2.69922 21.6804 3.23047 21.6804C3.76172 21.6804 4.24023 21.464 4.58594 21.114C4.93359 20.7639 5.14844 20.2821 5.14844 19.7472C5.14648 19.2162 4.93164 18.7324 4.58398 18.3823ZM8.7793 17.4029H23.5938C23.8164 17.4029 24 17.5858 24 17.812V21.7866C24 22.0108 23.8164 22.1956 23.5938 22.1956H8.7793C8.55664 22.1956 8.37305 22.0127 8.37305 21.7866V17.812C8.37305 17.5878 8.55664 17.4029 8.7793 17.4029ZM3.22852 8.25011C4.11914 8.25011 4.92773 8.61394 5.51172 9.20197C6.0957 9.79 6.45703 10.6022 6.45703 11.501C6.45703 12.3978 6.0957 13.212 5.51172 13.8C4.92578 14.3861 4.11914 14.7499 3.22852 14.7499C2.33789 14.7499 1.5293 14.3861 0.945312 13.798C0.361328 13.21 0 12.3978 0 11.499C0 10.6022 0.361328 9.78803 0.945312 9.2C1.5293 8.61394 2.33594 8.25011 3.22852 8.25011ZM4.58398 10.1342C4.23633 9.7841 3.75781 9.56776 3.22852 9.56776C2.69922 9.56776 2.21875 9.7841 1.87305 10.1342C1.52539 10.4842 1.31055 10.9661 1.31055 11.499C1.31055 12.032 1.52539 12.5158 1.87305 12.8658C2.2207 13.2159 2.69922 13.4322 3.22852 13.4322C3.75781 13.4322 4.23828 13.2159 4.58398 12.8658C4.93164 12.5158 5.14648 12.0339 5.14648 11.499C5.14648 10.9661 4.93164 10.4842 4.58398 10.1342ZM8.7793 9.15477H23.5938C23.8164 9.15477 24 9.33963 24 9.56383V13.5384C24 13.7626 23.8164 13.9475 23.5938 13.9475H8.7793C8.55664 13.9475 8.37305 13.7646 8.37305 13.5384V9.56186C8.37305 9.33767 8.55664 9.15477 8.7793 9.15477ZM3.22852 2.42882C3.67969 2.42882 4.04492 2.79658 4.04492 3.25088C4.04492 3.70517 3.67969 4.07294 3.22852 4.07294C2.77734 4.07294 2.41211 3.70517 2.41211 3.25088C2.41211 2.79658 2.77734 2.42882 3.22852 2.42882ZM3.22852 0C4.11914 0 4.92773 0.363831 5.51172 0.95186C6.0957 1.53989 6.45703 2.35212 6.45703 3.25088C6.45703 4.14964 6.0957 4.96186 5.51172 5.54989C4.92773 6.13792 4.12109 6.50175 3.22852 6.50175C2.33594 6.50175 1.5293 6.13792 0.945312 5.54989C0.361328 4.9599 0 4.14767 0 3.25088C0 2.35408 0.361328 1.53989 0.945312 0.95186C1.5293 0.363831 2.33594 0 3.22852 0ZM4.58398 1.88405C4.23633 1.53399 3.75781 1.31766 3.22852 1.31766C2.69922 1.31766 2.21875 1.53399 1.87305 1.88405C1.52539 2.23412 1.31055 2.71595 1.31055 3.24891C1.31055 3.78187 1.52539 4.26567 1.87305 4.61377C2.2207 4.96383 2.69922 5.18016 3.23047 5.18016C3.76172 5.18016 4.24023 4.96383 4.58594 4.61377C4.93359 4.2637 5.14844 3.78187 5.14844 3.24891C5.14844 2.71595 4.93164 2.23412 4.58398 1.88405Z" fill="white"/>
                                                </svg>
                                            </div>
                                        </div>
                                     }
                                        <div>
                                        <button onClick={() => this.state.table? this.setState({modal:true}): this.setState({modal:true})} className=" bg-gray text-white rounded-full px-2 uppercase hover:text-primary hover:bg-white">{this.state.moduleName}</button>
                                        </div>
                                    </div>  

                                        {this.state.table? <Item /> : <Category />}
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
            { this.state.modal? this.Modal() : null }
                </AppLayout>
            </react.Fragment>
        );
    }
}

export default observer(Index);