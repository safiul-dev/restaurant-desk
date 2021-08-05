import { makeAutoObservable } from "mobx";

interface CustomerProps {
    uniq: string;
    userId: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    active: boolean;
}
class CustomerData { 

    data: CustomerProps[] = [];
    singleData: CustomerProps;

    constructor() {
    
        makeAutoObservable(this)
        
    }

    async getCustomsers() {
        try {
          const res = await fetch("http://localhost:3000/api/customers")
        this.data = await res.json()
        } catch (error) {
          console.log(error)
        }
      }

    async getOne(id) {
      try {
        const res = await fetch("http://localhost:3000/api/customers/"+id)
        this.singleData = await res.json()
      } catch (error) {
        
      }
    }
  
      async addCustomer(uniq,userId, name, email, phone, address,active) {
        
        try {
          const res = fetch("http://localhost:3000/api/customers",
            {
              body: JSON.stringify({
                  uniq: uniq,
                  userId: userId,
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

            if(res) {
              this.data.push({
                uniq: uniq,
                userId: userId,
                name: name,
                phone: phone,
                email: email,
                address: address,
                active: active === "1"? true : false
              })
            }
            
        } catch (error) {
          console.log(error)
        }
      }
      async updateCustomer(name, phone, email, address,active, uniq) {
        try {
          const res = fetch("http://localhost:3000/api/customers/"+uniq,
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

            if(res) {
              this.data.find( customer => {
                if(customer.uniq === uniq) {
                  customer.name = name;
                  customer.phone = phone;
                  customer.email = email;
                  customer.address = address;
                  customer.active = active === "1"? true : false;
                }
              })
            }
            
        } catch (error) {
          console.log(error)
        }
      }
      async delete(id) {
        try {
          const res = fetch("http://localhost:3000/api/customers/"+id,
            {
              method: 'DELETE'
            })
            
        } catch (error) {
          console.log(error)
        }
      }
}
export const CustomerDatas = new CustomerData();