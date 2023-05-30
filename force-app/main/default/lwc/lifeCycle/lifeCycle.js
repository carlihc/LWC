import { LightningElement } from "lwc";
import templateOne from "./templatePrimary.html";
import templateTwo from "./templateSecondary.html";

export default class LifeCycle extends LightningElement {
  showTemplatePrimary = true;
  error;
  stack;
  /*
    Child elements can’t be accessed because they don’t exist yet
    Element properties are assigned to the component after construction,
        so do not access them as they are not yet in existence (public properties decorated with @api)
    It is necessary to invoke super() from the constructor, 
    since the Lightning web component extends LightningElement which has a constructor and is not supposed 
    to bypass the parent class constructor (To assign the correct property (prototype) and set a value 
    to ‘this’ attribute) 
    */
  constructor() {
    super();
    console.log("Constructor call");
  }

  /*
ConnectedCallback() Invoked when the component is inserted into DOM.
Child elements can’t be accessed because they don’t exist yet
This hook flows from parent component to child component
Eventually this method is invoked, all the public properties (decorated with @api) would have
been received from the parent component by which we can call an apex method which requires
these public properties as input parameters.
In order to verify if a component is connected to DOM, the isConnected property can be used
Parent elements can be accessed and modified in this lifecycle hook */

  connectedCallback() {
    let varTemplate = this.template;
    console.log("Connected Callback called => " + varTemplate.isconnected);
  }

  /*
    Render() Invoked after the execution of connectedCallback() method.
    This hook is used to override the standard rendering functionality in Lightning web components & to update the UI.
    Flows from parent component to child component
    Rendering process can be controlled by conditionally rendering the template on the basis of certain conditions or 
    criteria
    This hook is not technically a lifecycle hook. It is protected method on the LightningElement class
   */
  render() {
    console.log("show template primary=> " + this.showTemplatePrimary);
    return this.showTemplatePrimary ? templateOne : templateTwo;
  }

  /*
  RenderedCallback() Invoked when a component is completely rendered on UI.
  Flows from child component to parent component
  This hook should be used cautiously so that an infinite rendering loop is not triggered since this 
  hook is called after the component gets rendered every time
  Make sure to use a private boolean property like isRendered to track whether renderedCallback() has been executed
  Not recommended to use renderedCallback() to change the state of the component instead use getter and setter
  Reactive property in renderedCallback() leads to infinite loop */
  renderedCallback() {
    console.log("child component renderCallback from parent component");
  }

  //DisconnectedCallback() Invoked when a component is removed from DOM. Flows from parent component to child component
  disconnectedCallback() {
    console.log("disconnected call back");
  }

  /*
  ErrorCallback() Invoked when the component throws error in one of the lifecycle hooks
   (instantiating the component, connecting or rendering)
  Similar to JavaScript catch{} block, error and stack are the two arguments.error is javascript 
  native error object whereas stack is a string
  To capture the stack information and render a different template when error is occurred */
  errorCallback(error, stack) {
    this.error = error;
    this.stack = stack;
  }
}
