import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NgxCommunicateService {
  private _map: Map<string, Array<(data: any) => void>> = new Map<string, Array<(data: any) => void>>();

  constructor() { }

  /**
   * @method send
   * @property data
   * @returns void
   */
  broadcast(event: string, data: any): void {
    const subscribers = this._map.get(event) || [];
    subscribers.forEach(subscriber => subscriber(data));
  }

  /**
   * @method on
   * @description Subscribes to an event
   * @var event Event Name
   * @var callback the function that will return the data of that event
   */
  on(event: string, callback: (data: any) => void) {
    let subscribers = this._map.get(event);

    if (subscribers == undefined)
      subscribers = new Array();


    subscribers.push(callback);
    this._map.set(event, subscribers);
  }
}
