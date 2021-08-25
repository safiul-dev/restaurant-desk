import { makeAutoObservable } from "mobx";

interface OrderItemProps {
  subPricingUniq: string;
  itemTitle: string;
  itemUniq: string;
  itemQt: number;
  itemPrice: string;
}

class OrderData { 

    data: OrderItemProps[] = [];
    singleData: OrderItemProps;
    tableUniq: string;
    waiterUniq: string;
    customerUniq: string;
    guests: number;
    orderNote: string;
    TotalBill: string;
    TotalAmount: string;
    numberOrderedItems: number;
    VAT: string;

    constructor() {
    
        makeAutoObservable(this)        
    }

    // adding item with price and quantity
    addData(title, itemUniq, subUniq, price, qt) {
        const existData = this.data.filter((item) => item.itemUniq === itemUniq &&item.subPricingUniq === subUniq )
        if (existData.length > 0) {

          this.data = this.data.map((item) => {
            if (existData[0] && existData[0].itemUniq === item.itemUniq && existData[0].subPricingUniq === item.subPricingUniq) {
              item.itemQt++
              return item
            }else{
              return item
            }
          })
        }else{
          this.data.push({
            itemTitle: title,
            itemUniq: itemUniq,
            subPricingUniq: subUniq,
            itemPrice: price,
            itemQt: qt,    
          })
        }
     
    }

    // calculating the item price 
    get total () {
      if( this.data.length > 0) {
        var sum = 0
        this.TotalAmount = "0"
        this.TotalBill = "0"
           this.data.map( (item) => {
             if(item.itemQt>1){
              sum += parseFloat(item.itemPrice) * item.itemQt
             }else{
              sum += parseFloat(item.itemPrice)
             }
           } )
           let VatWithPrice = sum + parseFloat(this.VAT? this.VAT : "0")
           this.TotalAmount = sum.toString();
           this.TotalBill = VatWithPrice.toString()
       return sum
      }else {
        return 
      }
      
    }

}
export const OrderDatas = new OrderData();