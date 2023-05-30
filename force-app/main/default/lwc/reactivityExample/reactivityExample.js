import { LightningElement } from 'lwc';

export default class ReactivityExample extends LightningElement {
  bool = true;
  number = 42;
  obj = { name: 'John' };

  checkMutation() {
    this.bool = false;   // Mutation detected
    
    this.number = 42; // No mutation detected: previous value is equal to the newly assigned value
    this.number = 43; // Mutation detected
    
    this.obj.name = 'Bob'; // No mutation detect: `obj` field value is not reassigned
    this.obj = { name: 'John' }; // Mutation detected - redefining the object with the same value creates a new object
    this.obj = { ...this.obj, title: 'CEO' } // Mutation detected
  }  
}