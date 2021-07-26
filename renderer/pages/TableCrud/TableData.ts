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

    async addTable(title, capacity) {
      try {
        const res = fetch("http://localhost:3000/api/tables",
          {
            body: JSON.stringify({
                uniq: "dsfsdfsdf4544",
                userId: "dffjdkfsd254",
                storeId: "dsfsdfsdf4545",
                title: title,
                capacity: Number(capacity),
                available_status: true
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

export const TableDatas = new TableData();
