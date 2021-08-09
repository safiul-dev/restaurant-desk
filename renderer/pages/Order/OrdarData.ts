import { makeAutoObservable } from "mobx";

interface OrderProps {
  uniq: string;
  tableUniq: string;
  waiterUniq: string;
  customerUniq: string;
  guests: number;
  orderNote: string;
  itemTitle: string;
  itemUniq: string;
  itemQt: number;
  itemPrice: string;
}
class OrderData { 

    data: OrderProps[] = [];
    totalAmount:''
    singleData: OrderProps;

    constructor() {
    
        makeAutoObservable(this)        
    }

    addData(uniq:string) {
      if(!!this.data.length){
       
          this.data.push({
            uniq: uniq,
            tableUniq: '',
            waiterUniq: '',
            customerUniq: '',
            orderNote: '',
            guests: 0,
            itemTitle: '',
            itemUniq: '',
            itemPrice: '',
            itemQt: 0,
            
          }) 
      }
    }

    // async getOne(id) {
    //   try {
    //     const res = await fetch("http://localhost:3000/api/customers/"+id)
    //     this.singleData = await res.json()
    //   } catch (error) {
        
    //   }
    // }
  
    //   async addCustomer(name, email, phone, address,active) {
    //     try {
    //       const res = fetch("http://localhost:3000/api/customers",
    //         {
    //           body: JSON.stringify({
    //               uniq: "dsfsdfsdf4544",
    //               userId: "dffjdkfsd254",
    //               name: name,
    //               phone: phone,
    //               email: email,
    //               address: address,
    //               active: active === "1"? true : false
    //           }),
    //           headers: {
    //             'Content-Type': 'application/json'
    //           },
    //           method: 'POST'
    //         })
            
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    //   async updateCustomer(name, phone, email, address,active, id) {
    //     try {
    //       const res = fetch("http://localhost:3000/api/customers/"+id,
    //         {
    //           body: JSON.stringify({
    //               name: name,
    //               phone: phone,
    //               email: email,
    //               address: address,
    //               active: active === "1"? true : false
    //           }),
    //           headers: {
    //             'Content-Type': 'application/json'
    //           },
    //           method: 'PUT'
    //         })
            
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    //   async delete(id) {
    //     try {
    //       const res = fetch("http://localhost:3000/api/customers/"+id,
    //         {
    //           method: 'DELETE'
    //         })
            
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
}
export const OrderDatas = new OrderData();