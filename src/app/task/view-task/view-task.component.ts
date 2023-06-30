import { Component } from '@angular/core';
import { Firestore, collection, deleteDoc, doc, getDocs } from '@angular/fire/firestore';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent {


  constructor( public firestore: Firestore){
  }
  public data: any = [];
  taskProperty: string[] = [
    'id',
     'taskName', 
     'status', 
     'difficulty',
     'level',
      'startDate',
      'dueDate'
  ]

  displayTask: string[] = ['id', 'taskName', 'status', 'difficulty','level', 'startDate','dueDate'];

  gettData(id: string){
    const addData = collection(this.firestore, 'ITask', id);
    getDocs(addData)
    .then((respond) => {
      alert('Data Gotten')
      this.data = [...respond.docs.map((item) =>{
        return{ ...item.data(), id: item.id}})]        
    })
  }
  getData(){
    const addData = collection(this.firestore, 'ITask');
    getDocs(addData)
    .then((respond) => {
      // alert('Data Gotten')
      this.data = [...respond.docs.map((item) =>{
        return{ ...item.data(), id: item.id}})]
    })
    console.log(this.data);
  }
  deleteTask(id: string){
    const dataDelete = doc(this.firestore, 'ITask', id);
    deleteDoc(dataDelete) 
     .then(()=>{
  // window.location.reload()
      alert('Task Deleted')
      this.getData
     })
     .catch((err)=>{
       alert(err)
     })
  }
}
