import { makeAutoObservable } from "mobx";

interface SubItemProps {
    id: string;
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
    itemIdByAllData2: SubItemProps[] = [];
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
        this.itemIdByAllData2 = await res.json()
       

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
  
      async addSubItem(title, description, price,ratio, itemUniq) {
        const uniq = Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);
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

            }
            
        } catch (error) {
          console.log(error)
        }
      }
      async updateSubItem(title: string, description: string, price: string, ratio: string, id: string, uniq: string, itemUniq: string) {
        
        try {
          const res = fetch("http://localhost:3000/api/items/sub/"+id,
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
              this.data.push({
                id: id,
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