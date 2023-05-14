import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  // private shoppingData : {[id: string] : Object} = {
  //   'a1':{id: 'a1', name: 'Item 1', category: 'Category 1', price: 10, quantityAvailable: 5 },
  //   'b1':{id: 'b1', name: 'Item 2', category: 'Category 2', price: 10, quantityAvailable: 5 },
  //   'c1':{id: 'c1', name: 'Item 3', category: 'Category 3', price: 10, quantityAvailable: 5 },
  //   'd1':{id: 'd1', name: 'Item 4', category: 'Category 4', price: 10, quantityAvailable: 5 },
  //   'e1':{id: 'e1', name: 'Item 5', category: 'Category 5', price: 10, quantityAvailable: 5 },
  // }
  public rawData: {[id: string] : Object} = {
    'a1':{id: 'a1', name: 'Item 1', category: 'Category 1', price: 10, quantityAvailable: 5 },
    'b1':{id: 'b1', name: 'Item 2', category: 'Category 2', price: 10, quantityAvailable: 5 },
    'c1':{id: 'c1', name: 'Item 3', category: 'Category 3', price: 10, quantityAvailable: 5 },
    'd1':{id: 'd1', name: 'Item 4', category: 'Category 4', price: 10, quantityAvailable: 5 },
    'e1':{id: 'e1', name: 'Item 5', category: 'Category 5', price: 10, quantityAvailable: 5 },
  };
  shoppingData = new BehaviorSubject<{[id: string] : Object}>(this.rawData);

  trial = new BehaviorSubject<string>('abc');
  currentMessage1 = this.trial.asObservable();


  constructor() {}

  setData(id: string, data: Object){
    // this.rawData = this.shoppingData.value;
    this.shoppingData.value[id] = data;
    this.shoppingData.next(this.shoppingData.value);
    
    let newVal = this.trial.value+id;
    this.trial.next(newVal+id);
  }

  getData(){
    return this.trial.value;
  }


  private profileObs$: BehaviorSubject<any> = new BehaviorSubject(null);

  getProfileObs(): Observable<any> {
      return this.profileObs$.asObservable();
  }

  setProfileObs(profile: any) {
      this.profileObs$.next(profile);
  }
}
