import { Injectable, EventEmitter } from "@angular/core";

import { LoggingService } from "./Logging.service";


//if we inject a service, the receiving service has to have @Injectable
@Injectable()
export class AccountsService {

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();

//important to add the service to the constructor
      constructor(private loggingService: LoggingService){

      }
    

      addAccount(name:string,status: string ){

        this.accounts.push({name:name, status:status});
        this.loggingService.logStatusChange(status);

      }

      updateStatus(id:number, status:string){
this.accounts[id].status = status;
this.loggingService.logStatusChange(status);

      }
}