import { Injectable } from '@angular/core';
import { ITask } from 'src/app/interface/task.interface';
import { LocalUserService } from '../local/local-user.service';

@Injectable({
  providedIn: 'root'
})
export class StoreUerService {

  constructor(private store: LocalUserService) { }
  addTask(task: ITask){

    const getTask = this.store.get("Task")
    
    let StoreToLocal: Object[] = [];
    if (getTask.status == true) {
      StoreToLocal = getTask.data
    }
    StoreToLocal.push(task)
    this.store.set("Task", StoreToLocal)
  }
  // addTasks(task: ITask){
  //   const store = this.store.get('Task')
  //   let storeLocal: Object[] = [];
  //   if (store.status == true) {
  //    storeLocal = store.data;
  //   }
  //   storeLocal.push(task);
  //   this.store.set('Task', storeLocal)
  //  //  alert('Task Added')
  //  }
}
