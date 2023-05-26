import { LightningElement, api, wire } from "lwc";
import getContactsList from "@salesforce/apex/ContactsService.getContacts";

export default class ApiDecoratorSampleChildComponent extends LightningElement {
  /*
  1. @api
    To expose a public property or a public method, decorate with @api. Public properties are reactive, 
    also known as public reactive properties since if a value of property changes then component is re-rendered

    Public properties define API of a component whereas public methods are part of a component’s API
    A Component is re-rendered when the value of a referenced public property is modified or changed
    To pass data from parent component to child component, @api decorator in the child component exposes a property by making it public so that parent component can update it
    @api properties can be exposed in an App builder 
    */
  @api message;

  /*
  2. @track
    To expose a private property or a private method, declare with @track. Also known as Private reactive properties

    To track a private property and to re-render component when that property changes, use @track decorator (Available only for the component where it is declared)
    Fields which are using @track decorator that contains an object or an array, tells the framework to observe changes to the properties of an object or elements of an array
    After Salesforce Spring ’20, all the fields in a Lightning Web Component are reactive. If a field is used in a template & value changes, the component re-renders and displays a new value by default 
 */
  //@track greetingMessage = 'World';//Before Spring ’20 to need to import track decorator & use it to make a field reactive
  greetingMessage = "World";

  changeHandler(event) {
    this.greetingMessage = event.target.value;
  }

  /*
 3. @wire
    Reactive wire service is utilized in Lightning Web Components to read the Salesforce data from apex class into Lightning web components
    Component is re-rendered when wire service provisions the data from apex class. The output from apex method is set to a property
    Syntax:

    import <methodName> from ‘@salesforce/apex/<Namespace.ApexClassName.apexMethod>’;

    @wire(methodName, {methodParams})
    propertyOrFunction;
    methodName: A variable that identifies the Apex method. 
    apexMethod: The name of the Apex method to import. 
    ApexClassName: The name of the Apex class. 
    Namespace: Defines the namespace of the Salesforce organization. Only specify a namespace when the organization doesn’t use the default namespace (c)*/

  //Wiring the Output of Apex method to a property
  @wire(getContactsList)
  contacts;
}
