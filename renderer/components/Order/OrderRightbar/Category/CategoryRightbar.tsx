import { observer } from 'mobx-react';
import React from 'react';
import { OrderDatas } from '../../../../pages/Order/OrdarData';
import { CategoryDatas } from '../../../Item/Category/CategoryData';
import { ItemDatas } from '../../../Item/Item/ItemData';
import { SubItemDatas } from '../../../Item/SubItemData';



class CategoryRightbar extends React.Component{

  state = {
    showModal: false
  }
  clickCount = 0
  singleClickTimer = null 
  constructor (props) {
    super(props)
    this.clickCount = 0
    this.singleClickTimer = null 
  }
  // geting item data and showing with filtered categoryUniq
  getItemData (categoryUniqId) {
    if(ItemDatas.itemDataForCategory.length != 0) {
      const indexHas = []
         
      ItemDatas.itemDataForCategory.map((item, index) =>  indexHas.push(index))
      for (let i=0; i<indexHas.length; i++) {
          ItemDatas.itemDataForCategory.pop()
      }
    }

    ItemDatas.data.map((item, index) => {
      if(item.categoryUniq === categoryUniqId) {
        ItemDatas.itemDataForCategory.push(item);
      }
    })
  }
  // add sub Item Data 
  subItemAdd (subUniq) {
    SubItemDatas.data.find((item, index) => {
      if(item.uniq === subUniq) {
        
        OrderDatas.addData(item.title, item.itemUniq,item.uniq, item.price, 1)
      }
    })
  }

  // adding item to card directly if nothing have any sub pricing item else showing modal with SubPricing items 
  addItemToCard(itemUniq){
  
    var isData = 0
    
    SubItemDatas.data.find(item => {
      if( item.itemUniq === itemUniq) {

         isData = SubItemDatas.itemIdByAllData.push(item)
      }
    })
    
      if(isData > 0) {
        this.setState({showModal: true}) 
      }else{

        ItemDatas.data.find((item, index) => {
          if(item.uniq === itemUniq) {
            
            OrderDatas.addData(item.title, item.uniq,null, item.price, 1)
          }
        })
      } 
  }

  // modal component here
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
                        <div className="w-full ">
                          <div className="text-center text-primary py-2 uppercase text-xl font-bold">
                            Select SubPrice And Ratio
                          </div>
                         <table className="w-full  bg-primary rounded">
                           <tbody className="text-white">
                             {SubItemDatas.itemIdByAllData.map((item)=> 
                                <tr className="py-1 text-center  w-full">
                                  <td className="">{item.title}</td>
                                  <td>{item.ratio}</td>
                                  <td>{item.price}</td>
                                  <td className="text-center">
                                      <svg onClick={() => this.subItemAdd(item.uniq)} className="w-6 h-6 hover:text-gray pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                  </td>
                                </tr>
                             )}
                             
                           </tbody>
                         </table>
                              
                        </div>
                       
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button onClick={() => this.cancelModal()} className="mt-3 w-full inline-flex justify-center rounded-md border border-primary outline-none hover:bg-primary hover:text-white shadow-sm px-4 py-2 bg-white text-base font-medium focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Close
                    </button>
                </div>
                </div>
            </div>
    </div>
    )
}

cancelModal() {
  if(SubItemDatas.itemIdByAllData.length != 0) {
    const indexHas = []
       
    SubItemDatas.itemIdByAllData.map((item, index) =>  indexHas.push(index))
    for (let i=0; i<indexHas.length; i++) {
        SubItemDatas.itemIdByAllData.pop()
    }
  }
  this.setState({showModal: false})
}

  render() {
    return(
        <div className=" w-full h-full flex">
        <div className="w-width40% h-height96% mt-2 mr-1">
        <div className="w-full h-full rounded-md border border-black ">
          <div className="mx-0.5 my-0.5 overflow-y-scroll scrollbar-hide h-full">
              <div className="grid grid-flow-row-dense grid-cols-2 gap-2 ">
                {
                  !!CategoryDatas.data.length ? 
                    CategoryDatas.data.map( (category, index) => category.active?
                    <button key={index} onClick={() => this.getItemData(category.uniq)} className=" outline-none cursor-pointer 2xl:h-36 xl:h-32 lg:h-28 md:h-24 sm:h-16 bg-secondary rounded-md text-middleButtonFontColor uppercase sm:font-light md:font-medium lg:font-semibold xl:font-bold sm:text-extraSmall md:text-tiny lg:text-lg xl:text-xl sm:leading-3 md:leading-4 lg:leading-5 xl:leading-6 text-center hover:text-white hover:bg-primary hover:shadow-2xl">
                    {category.title}
                    </button>:null)
                    :
                   null
                }
                  
                </div>

              </div>
                

            </div>
        </div>
        <div className="w-width55% h-height96% mt-2 ml-1 mr-1">
        <div className="w-full h-full rounded-md border border-black">
                <div className="mx-0.5 my-0.5 overflow-y-auto h-full">
                  <div className="grid grid-flow-row-dense grid-cols-3 gap-2">

                      {
                        !!ItemDatas.itemDataForCategory.length?
                        ItemDatas.itemDataForCategory.map((item, index) => 
                        <button key={index} onClick={() =>this.addItemToCard(item.uniq)} className=" 2xl:h-28 xl:h-24 lg:h-20 md:h-16 sm:h-14 bg-secondary rounded-md text-middleButtonFontColor uppercase sm:font-light md:font-medium lg:font-medium xl:font-medium sm:text-smallFont md:text-smallFont lg:text-tiny xl:text-base sm:leading-tight md:leading-4 lg:leading-5 xl:leading-6 flex justify-center items-center px-1 hover:text-white hover:bg-primary hover:shadow-2xl">
                          {item.title}
                        </button>
                        )
                        :
                        null
                      }

                  </div>
                </div>
                
              </div>
        </div>
        <div className="w-width5% h-full bg-black">
        </div>
        {this.state.showModal ? this.Modal() : null}
      </div>
    )
  }
}

export default  observer(CategoryRightbar);