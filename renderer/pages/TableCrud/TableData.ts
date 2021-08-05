import { makeAutoObservable } from 'mobx';


interface TableProps {
  uniq: string;  
  userId: string;
  storeId: string;
  title: string;
  capacity: string;
  available_status: boolean;
}
class TableData{ 

  
      data: TableProps[] = [];
    
      singleData: TableProps;


    constructor() {
        makeAutoObservable(this)
    }

   async getTables() {
      try {
        const res = await fetch("http://localhost:3000/api/tables")
      this.data = await res.json()
      } catch (error) {
        console.log(error)
      }
    }

    async getOne(id) {
      try {
        const res = await fetch("http://localhost:3000/api/tables/"+id)
        this.singleData = await res.json()
      } catch (error) {
        
      }
    }

    async addTable(uniq, userId, storeId,title, capacity, status) {

      try {
        const res = fetch("http://localhost:3000/api/tables",
          {
            body: JSON.stringify({
                uniq: uniq,
                userId: userId,
                storeId: storeId,
                title: title,
                capacity: Number(capacity),
                available_status: status
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
              storeId: storeId,
              title: title,
              capacity: capacity,
              available_status: status
            })
          }
          
      } catch (error) {
        console.log(error)
      }
    }

    async updateTable(title, capacity, status, uniq) {
      try {
        const res = await fetch("http://localhost:3000/api/tables/"+uniq,
          {
            body: JSON.stringify({
                title: title,
                capacity: capacity,
                available_status: status
            }),
            headers: {
              'Content-Type': 'application/json'
            },
            method: 'PUT'
          })

          if(res) {
            this.data.find((table) =>{
              if(table.uniq === uniq) {
                table.title = title;
                table.capacity = capacity;
                table.available_status = status;
              }
            })
          }
          
      } catch (error) {
        console.log(error)
      }
    }
}

export const TableDatas = new TableData();
