import { makeAutoObservable } from "mobx";

interface WaiterProps {
    id: string;
    uniq: string;
    userId: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    active: boolean;
}
class WaiterData { 

    data: WaiterProps[] = [];
    singleData: WaiterProps;

    constructor() {
    
        makeAutoObservable(this)
        
    }

    async getWaiters() {
        try {
          const res = await fetch("http://localhost:3000/api/waiter")
        this.data = await res.json()
        } catch (error) {
          console.log(error)
        }
      }

    async getOne(id) {
      try {
        const res = await fetch("http://localhost:3000/api/waiter/"+id)
        this.singleData = await res.json()
      } catch (error) {
        
      }
    }
  
      async addWaiter(name, email, phone, address,active) {
        const uniq = Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);
        try {
          const res = fetch("http://localhost:3000/api/waiter",
            {
              body: JSON.stringify({
                  uniq: uniq,
                  userId: "dffjdkfsd254",
                  name: name,
                  phone: phone,
                  email: email,
                  address: address,
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
      async updateWaiter(name, phone, email, address,active, id) {
        try {
          const res = fetch("http://localhost:3000/api/waiter/"+id,
            {
              body: JSON.stringify({
                  name: name,
                  phone: phone,
                  email: email,
                  address: address,
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
          const res = fetch("http://localhost:3000/api/waiter/"+id,
            {
              method: 'DELETE'
            })
            
        } catch (error) {
          console.log(error)
        }
      }
}
export const WaiterDatas = new WaiterData();

