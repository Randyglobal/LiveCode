import { Component } from '@angular/core';
import { ITask } from 'src/app/interface/task.interface';
import { StoreUerService } from 'src/app/service/store/store-uer.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent {

  taskId = new Date().getDate()
  constructor(private store: StoreUerService){
  }

  task: ITask[] = [
    {
      taskName: '',
      status: '',
      level: '',
      difficulty: '',
      startDate: '',
      dueDate: '',
      id: this.taskId,
    }
  ]

}
