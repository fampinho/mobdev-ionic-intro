import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myVariable: string = "May the Force be with you!!!";
    updateMyValue() {
        if(this.myVariable == "May the Force be with you!!!"){
            this.myVariable = 'Now the force is even stronger!';
        }else{
            this.myVariable = "May the Force be with you!!!";
        }
       
    }
}
