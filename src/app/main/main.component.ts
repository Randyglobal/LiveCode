import { Component } from '@angular/core';
import { StoreUerService } from '../service/store/store-uer.service';
import { ITask } from '../interface/task.interface';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  addPop = false
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
      'paused'
  
    ];
    difficulty: string[] = [
      'very hard',
      'medium',
      'easy'
  
    ];
    level: string[] = [
      'completed',
      'not completed',
      'in progress'
  
    ]

  // addTask(){
  //   this.store.addTask(this.tasks)
  // }
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
   alert("ID"+ this.taskId)
    
   }
}
