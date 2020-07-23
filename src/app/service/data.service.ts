import { LogService } from "./log.service";
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class DataService {
  private data: string[] = [];
  pushedData = new EventEmitter<string>();

  constructor(private logService: LogService) {}
  addData(data: string) {
    this.data.push(data);
    this.logService.log("Eintrag hinzugefügt");
  }

  getData() {
    return this.data;
  }

  pushData(value: string) {
    this.pushedData.emit(value);
  }
}
