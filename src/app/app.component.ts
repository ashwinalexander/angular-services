import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]

})
export class AppComponent implements OnInit{
 
accounts: {name: string,status: string }[] = [];


constructor(private accountsService: AccountsService) {
  
  
}

//initializations should be done not on constructor but within OnInit
ngOnInit(){
  //reference type
  this.accounts = this.accountsService.accounts;


}


}
