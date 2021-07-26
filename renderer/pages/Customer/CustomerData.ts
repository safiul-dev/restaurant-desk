import { makeAutoObservable } from "mobx";

interface CustomerProps {
    id: string;
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

    constructor() {
        makeAutoObservable(this)
    }

    async getCustomers() {
        try {
          const res = await fetch("http://localhost:3000/api/customer")
        this.data = await res.json()
        } catch (error) {
          console.log(error)
        }
      }
  
      async addCustomer(name, phone, email, address, active) {
        try {
          const res = fetch("http://localhost:3000/api/customer",
            {
              body: JSON.stringify({
                  uniq: "dsfsdfsdf4544",
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
}
export const CustomerDatas = new CustomerData();