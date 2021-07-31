import { makeAutoObservable } from "mobx";

interface CategroyProps {
    id: string;
    uniq: string;
    userId: string,
    parent: string,
    title: string,
    active: string,
    
}
class CategoryData { 

    data: CategroyProps[] = [];
    singleData: CategroyProps;
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
  
      async addCategory(title, active) {
        try {
          const res = fetch("http://localhost:3000/api/categorys",
            {
              body: JSON.stringify({
                  uniq: "dsfsdfsdf4544",
                  userId: "dffjdkfsd254",
                  parent: "this_Parent_Id",
                  title: title,
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
      async updateCategory(title, active, id) {
        try {
          const res = fetch("http://localhost:3000/api/categorys/"+id,
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
            
        } catch (error) {
          console.log(error)
        }
      }
      async delete(id) {
        try {
          const res = fetch("http://localhost:3000/api/categorys/"+id,
            {
              method: 'DELETE'
            })
            
        } catch (error) {
          console.log(error)
        }
      }
}
export const CategoryDatas = new CategoryData();