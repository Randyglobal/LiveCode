import { Component } from '@angular/core';
import { StoreUerService } from '../service/store/store-uer.service';
import { ITask } from '../interface/task.interface';
import { Firestore, addDoc, collection, deleteDoc, doc, getDocs } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  addPop = false
  Popup = false

taskForm: FormGroup

  taskId = new Date().getTime().toString()
  constructor(private store: StoreUerService, public firestore: Firestore, private formGroup: FormBuilder){

  this.taskForm = this.formGroup.group(
    {
      taskName: '',
      status: '',
      level: '',
      difficulty: '',
      startDate: '',
      dueDate: '',
      id: this.taskId,
    })
  }


    status: string[] = [
      'pending',
      'success',
      'paused',
      'not started'
  
    ];
    difficulty: string[] = [
      'very hard',
      'medium',
      'easy',
      'not determined'
  
    ];
    level: string[] = [
      'completed',
      'not completed',
      'in progress'
  
    ]
    // For the View
    public data: any = [];
    
  addData(value: any) {
    // this.storage.addTask(this.task);
    const addTasks = collection(this.firestore, 'ITask');
    addDoc(addTasks, value)
    .then((respond)=> {
     alert('Added Task Successfully')
     window.location.reload()
    })
    .catch((error) => {
     alert('Opps an error occured => ' + error)
    })
   }

   popUp(){
    this.addPop = !this.addPop
  //  alert("ID"+ this.taskId)
    
   }
   pop(){
    this.Popup = !this.Popup
  //  alert("ID"+ this.taskId)
    
   }

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
       console.log(this.data);

    })    
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
//   editData(id: string){
//     const addData = collection(this.firestore, 'ITask', id);
//     getDocs(addData)
//     .then((respond) => {
//       alert('Data Gotten')
//       this.data = [...respond.docs.map((item) =>{
//         return{ ...item.data(), id: item.id}})]
//     })
//   }
}
