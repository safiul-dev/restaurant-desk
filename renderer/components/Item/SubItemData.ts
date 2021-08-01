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
    singleData: SubItemProps;

    constructor() {
    
        makeAutoObservable(this)
        
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
            method: 'GET'
          }
          )
        this.data = await res.json()
       

        } catch (error) {
          console.log(error)
        }
      }

    async getOne(id) {
      try {
        const res = await fetch("http://localhost:3000/api/items/"+id)
        this.singleData = await res.json()
      } catch (error) {
        
      }
    }
  
      async addItem(title, description, categoryUniq, price,active) {
        const uniq = Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);
        try {
          const res = fetch("http://localhost:3000/api/items",
            {
              body: JSON.stringify({
                  uniq: uniq,
                  userId: "user1",
                  title: title,
                  price: price,
                  description: description,
                  categoryUniq: categoryUniq,
                  active: active === "1"? true : false
              }),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            })
            
        } catch (error) {
          console.log(error)
        }
      }
      async updateItem(title: string, description: string, categoryUniq: string, price: string, active: string, id: string) {
        try {
          const res = fetch("http://localhost:3000/api/items/"+id,
            {
              body: JSON.stringify({
                
                title: title,
                price: price,
                description: description,
                categoryUniq: categoryUniq,
                active: active === "1"? true : false
              }),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'PUT'
            })
            
        } catch (error) {
          console.log(error)
        }
      }
      async delete(id) {
        try {
          const res = fetch("http://localhost:3000/api/items/"+id,
            {
              method: 'DELETE'
            })
            
        } catch (error) {
          console.log(error)
        }
      }




}
export const SubItemDatas = new SubItemData();