import { Injectable } from '@angular/core';
import { ILogger } from '../contracts/logger.interface';

@Injectable({
  providedIn: 'root'
})
export class LoggerImpl implements ILogger {

  constructor() {
  }

  public debug(message: string, obj?: any): void {

    // tslint:disable-next-line: no-console
    console.debug(message, obj);
  }

  public warning(message: string, obj?: any): void {

    // tslint:disable-next-line: no-console
    console.warn(message, obj);
  }

  public error(message: string, obj?: any): void {

    // tslint:disable-next-line: no-console
    console.error(message, obj);
  }
}
