import { Component,  Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import {LoggingService} from "../Logging.service";


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
 


  constructor(private loggingService: LoggingService, private accountsService: AccountsService ){

  }

  onSetTo(status: string) {
    this.accountsService.statusUpdated.emit(status);
 this.accountsService.updateStatus(this.id, status);
this.accountsService.statusUpdated.emit(status);
    //this.loggingService.logStatusChange("a status change occured");
  }
}
