
import { observer } from 'mobx-react';
import React from 'react';
import { CategoryDatas } from '../../../Item/Category/CategoryData';
import { ItemDatas } from '../../../Item/Item/ItemData';



class CategoryRightbar extends React.Component{

  state = {}
  constructor (props) {
    super(props)
  }

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
                    <div>
                      <h1>Category List is empty</h1>
                    </div>
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
                        <button className=" 2xl:h-28 xl:h-24 lg:h-20 md:h-16 sm:h-14 bg-secondary rounded-md text-middleButtonFontColor uppercase sm:font-light md:font-medium lg:font-medium xl:font-medium sm:text-smallFont md:text-smallFont lg:text-tiny xl:text-base sm:leading-tight md:leading-4 lg:leading-5 xl:leading-6 flex justify-center items-center px-1 hover:text-white hover:bg-primary hover:shadow-2xl">
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
      </div>
    )
  }
}

export default  observer(CategoryRightbar);