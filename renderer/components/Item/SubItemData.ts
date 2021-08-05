import { makeAutoObservable } from "mobx";

interface SubItemProps {
    uniq: string;
    title: string,
    description: string,
    price: string,
    ratio: string,
    itemUniq: string,
    
}
class SubItemData { 

    data: SubItemProps[] = [];
    itemIdByAllData: SubItemProps[] = [];
    // itemIdByAllData2: SubItemProps[] = [];
    singleData: SubItemProps;

    constructor() {
    
        makeAutoObservable(this)
        
    }

    async getAllSubItems() {
      try {
        const res = await fetch("http://localhost:3000/api/items/sub")
      this.data = await res.json()
      } catch (error) {
        console.log(error)
      }
    }

    async getSubItems(ItemId: string) {
        try {
          const res = await fetch("http://localhost:3000/api/items/sub/itemUniq",
          {
            body: JSON.stringify({
                id: ItemId
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'POST'
          }
          )
        this.itemIdByAllData = await res.json()
       

        } catch (error) {
          console.log(error)
        }
      }

    // async getOne(id) {
    //   try {
    //     const res = await fetch("http://localhost:3000/api/items/"+id)
    //     this.singleData = await res.json()
    //   } catch (error) {
        
    //   }
    // }
  
      async addSubItem(uniq,title, description, price,ratio, itemUniq) {
        
        try {
          const res = fetch("http://localhost:3000/api/items/sub",
            {
              body: JSON.stringify({
                  uniq: uniq,
                  title: title,
                  price: price,
                  description: description,
                  ratio: ratio,
                  itemUniq: itemUniq,
              }),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            })

            if(res) {
              this.data.push({
                uniq: uniq,
                title: title,
                description: description,
                price: price,
                ratio: ratio,
                itemUniq: itemUniq,
              })
            }

            if(res) {
              this.itemIdByAllData.push({
                uniq: uniq,
                title: title,
                description: description,
                price: price,
                ratio: ratio,
                itemUniq: itemUniq,
              })
            }
            
        } catch (error) {
          console.log(error)
        }
      }
      async updateSubItem(title: string, description: string, price: string, ratio: string, uniq: string) {
        
        try {
          const res = fetch("http://localhost:3000/api/items/sub/"+uniq,
            {
              body: JSON.stringify({
                
                title: title,
                description: description,
                price: price,
                ratio: ratio,
              }),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'PUT'
            })

            if(res) {
              this.data.find( item => {
                if( item.uniq === uniq ) {
                  item.title = title;
                  item.description = description;
                  item.price = price;
                  item.ratio = ratio;
                }
              })

              this.itemIdByAllData.find( item => {
                if( item.uniq === uniq ) {
                  item.title = title;
                  item.description = description;
                  item.price = price;
                  item.ratio = ratio;
                }
              })
            }

        } catch (error) {
          console.log(error)
        }
      }
      async delete(id) {
        try {
          const res = fetch("http://localhost:3000/api/items/sub/"+id,
            {
              method: 'DELETE'
            })
            
        } catch (error) {
          console.log(error)
        }
      }




}
export const SubItemDatas = new SubItemData();