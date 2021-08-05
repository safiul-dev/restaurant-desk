import { makeAutoObservable } from "mobx";

interface ItemProps {
    uniq: string;
    userId: string;
    title: string,
    description: string,
    price: string,
    categoryUniq: string,
    active: boolean,
    
}
class ItemData { 

    data: ItemProps[] = [];
    singleData: ItemProps;
    itemDataForCategory: ItemProps[] = []

    constructor() {
    
        makeAutoObservable(this)
        
    }


    async getItems() {
        try {
          const res = await fetch("http://localhost:3000/api/items")
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
  
      async addItem(uniq, userId, title, description, categoryUniq, price,active) {

        try {
          const res = fetch("http://localhost:3000/api/items",
            {
              body: JSON.stringify({
                  uniq: uniq,
                  userId: userId,
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

            if(res) {
              this.data.push({
                uniq: uniq,
                userId: userId,
                title: title,
                price: price,
                description: description,
                categoryUniq: categoryUniq,
                active: active === "1"? true : false 
              })
            }
            
        } catch (error) {
          console.log(error)
        }
      }
      async updateItem(title: string, description: string, categoryUniq: string, price: string, active: string, uniq: string) {
        try {
          const res = fetch("http://localhost:3000/api/items/"+uniq,
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

            if(res) {
              this.data.find(item => {if(item.uniq === uniq) {
                  
                item.title = title;
                item.price = price;
                item.description = description;
                item.categoryUniq = categoryUniq;
                item.active = active === "1"? true : false
                }
              })
            }
            
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
export const ItemDatas = new ItemData();