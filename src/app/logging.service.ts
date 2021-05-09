//no decorator required (@injectable not required)
export class LoggingService {

logStatusChange(status: string){
    console.log("A server status changed, new status: " + status);
}


}