import { makeAutoObservable } from 'mobx';


interface TableProps {
  id: string;
  uniq: string;  
  userId: string;
  storeId: string;
  title: string;
  capacity: string;
  available_status: boolean;
}
class TableData{ 

  
      data: TableProps[] = [];
    



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

    addTable() {
        try {
          const res = fetch("http://localhost:3000/api/tables",{
            method: "POST",
            // contentType: "application/json"
          })
        } catch (error) {
          
        }
    }
}

export const TableDatas = new TableData();
