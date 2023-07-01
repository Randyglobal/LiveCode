import { Injectable } from '@angular/core';
import { ITask } from 'src/app/interface/task.interface';
import { LocalUserService } from '../local/local-user.service';
import { Firestore, collection, deleteDoc, doc, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StoreUerService {

  constructor(private store: LocalUserService, private firestore: Firestore) { }

  public data: any = [];


  addTask(task: ITask){

    const getTask = this.store.get("Task")
    
    let StoreToLocal: Object[] = [];
    if (getTask.status == true) {
      StoreToLocal = getTask.data
    }
    StoreToLocal.push(task)
    this.store.set("Task", StoreToLocal)
  }

  // gettData(id: string){
  //   const addData = collection(this.firestore, 'ITask', id);
  //   getDocs(addData)
  //   .then((respond) => {
  //     alert('Data Gotten')
  //     this.data = [...respond.docs.map((item) =>{
  //       return{ ...item.data(), id: item.id}})]
  //   })
  //   console.log('This is data', this.data);
  // }
  getData(){
    const addData = collection(this.firestore, 'ITask');
    getDocs(addData)
    .then((respond) => {
      // alert('Data Gotten')
      this.data = [...respond.docs.map((item) =>{
        return{ ...item.data(), id: item.id}})]
    })    
    console.log('This is data', this.data);
  }
  deleteTask(id: string){
    const dataDelete = doc(this.firestore, 'ITask', id);
    deleteDoc(dataDelete) 
     .then(()=>{
  window.location.reload()
      alert('Task Deleted')
      this.getData
     })
     .catch((err)=>{
       alert(err)
     })
  }
}
