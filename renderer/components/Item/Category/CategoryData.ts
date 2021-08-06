import { makeAutoObservable } from "mobx";

interface CategroyProps {
    uniq: string;
    userId: string,
    parent: string,
    title: string,
    active: boolean,
    
}
class CategoryData { 

    data: CategroyProps[] = [];
    singleData: CategroyProps;
    activeData: CategroyProps[] = [];
    modal: boolean;
    constructor() {
    
        makeAutoObservable(this)
        
    }

    async getCategroy() {
        try {
          const res = await fetch("http://localhost:3000/api/categorys")
        this.data = await res.json()
        } catch (error) {
          console.log(error)
        }
      }

    async getOne(id) {
      try {
        const res = await fetch("http://localhost:3000/api/categorys/"+id)
        this.singleData = await res.json()
      } catch (error) {
        
      }
    }

    async getActiveCategory () {
      try {
        const res = await fetch("http://localhost:3000/api/categorys/active")
        this.activeData = await res.json()
      } catch (error) {
        
      }
    }
  
      async addCategory(uniq, userId, parent, title, active) {

        try {
          const res = await fetch("http://localhost:3000/api/categorys",
            {
              body: JSON.stringify({
                  uniq: uniq,
                  userId: userId,
                  parent: parent,
                  title: title,
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
                parent: parent,
                title: title,
                active: active 
              })

              if(active === '1') {
                this.activeData.push({
                  uniq: uniq,
                  userId: userId,
                  parent: parent,
                  title: title,
                  active: active
                })
              }
            }
            
        } catch (error) {
          console.log(error)
        }
      }
      async updateCategory(title, active, uniq) {
        try {
          const res = await fetch("http://localhost:3000/api/categorys/"+uniq,
            {
              body: JSON.stringify({
                title: title,
                active: active === "1"? true : false
              }),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'PUT'
            })
            
            if(res) {
             
              this.data.find((cat) => {if( cat.uniq === uniq){
                cat.title = title;
                cat.active = active === "1"? true : false;
              }})
              if(active === "1"){
                this.activeData.find((cat) => {if( cat.uniq === uniq){
                  cat.title = title;
                }else{
                  this.data.find((cat) => {if( cat.uniq === uniq){
                    
                    this.activeData.push(cat)
                       }
                    })
                  }
                })
              }

            }
            
        } catch (error) {
          console.log(error)
        }
      }
      async delete(uniq) {
        try {
          const res = fetch("http://localhost:3000/api/categorys/"+uniq,
            {
              method: 'DELETE'
            })
            
        } catch (error) {
          console.log(error)
        }
      }
}
export const CategoryDatas = new CategoryData();