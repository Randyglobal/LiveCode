import { Component } from '@angular/core';
import { Firestore, collection, getDocs } from '@angular/fire/firestore';

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
     'Name', 
     'Status', 
     'Difficulty',
     'Level',
      'StartDate',
      'DueDate'
  ]

  displayTask: string[] = ['id', 'Name', 'Status', 'Difficulty','Level', 'StartDate','DueDate'];

  gettData(id: string){
    const addData = collection(this.firestore, 'ITask', id);
    getDocs(addData)
    .then((respond) => {
      alert('Data Gotten')
      this.data = [...respond.docs.map((item) =>{
        return{ ...item.data(), id: item.id}})]
    })
  }
}
