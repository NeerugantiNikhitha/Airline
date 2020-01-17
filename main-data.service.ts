import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainDataService {
counter:number = 0;
basePrice:number = 1234;
limit: number = 3;
Source: string[] = ['','Mumbai', 'Bangalore', 'Delhi','Hyderabad'];
Destination: string[] = ['','Mumbai', 'Bangalore', 'Delhi','Hyderabad'];
  constructor() { }
}
