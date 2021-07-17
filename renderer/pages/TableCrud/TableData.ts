import { makeAutoObservable } from 'mobx';


interface TableProps {
    id: string;
    title: string;
    capacity: string;
    status: boolean;
}
class TableData { 

    state: TableProps[] = [];


    constructor() {
        makeAutoObservable(this)
    }

    addData() {
        
        const data = {
            id: "dkjfdksfjs",
            title: "this is title",
            capacity: "capacity",
            status: true,
        }
        
        this.state.push(data);
    }

    getData() {
        
    }
}

export const TableDatas = new TableData();

export async function getStaticProps(context) {
    const res = await fetch()
    const data = await res.json()
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, 
    }
  }