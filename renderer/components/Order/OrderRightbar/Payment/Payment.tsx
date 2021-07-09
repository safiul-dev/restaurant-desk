
import SubCategory from '../Category/SubCategory/SubCategory';
import RightButton from '../../Buttons/RightButton';
import { Component } from 'react';
import console from 'console';

interface PaymentProps { 
   
}



export default class CategoryRightbar2 extends Component <PaymentProps> {

   state = {
            
         totalAmount: '0',
         serviceCharge: '0',
         discount: '0',
         paidAmount: '0',
         changes: '0',
         eventInputField: ''
   }
   constructor (props) {
      super(props);
      
      this.state = {
         
            totalAmount: '0',
            serviceCharge: '0',
            discount: '0',
            paidAmount: '0',
            changes: '0',
            
            eventInputField: ''
      }
      this.changeHandler = this.changeHandler.bind(this);
      this.eventOnClick = this.eventOnClick.bind(this);
   }

   // getting value from input fields
    changeHandler(e) {
      this.setState({[e.target.name]: e.target.value});

   }

   // selecting which field are uisng
   eventOnClick (e) {
      this.setState({eventInputField: e.target.name})
      
   }

   // add data from calculator to input field
   buttonHandler(tk) {   
      if(tk === .5) {
         this.setState({[this.state.eventInputField] : (parseFloat(this.state[this.state.eventInputField])/2).toString()});
       }else if(tk === .3){
         this.setState({[this.state.eventInputField] : (parseFloat(this.state[this.state.eventInputField])/3).toString()});
        }else{
          this.setState({[this.state.eventInputField] : this.sum(this.state[this.state.eventInputField], tk)});
         }       
      
      
   }
// Summation input field here
   sum(a, b){
      if(b === ',' || b === 0 && a != 0) return a + b;
      if(a){
      const result = parseFloat(a.replace(/,/g, '')) + parseFloat(b);
      return result.toString() ;
      }else{
         return b.toString();
      }
      
   }

   // C for input field data deleting here
   inputFieldDeleting () {
      let inputFields = this.state.eventInputField
      this.setState({[inputFields]: this.state[inputFields].substr(0, this.state[inputFields].length - 1)});
      
   }
    render() {
       return (
         <div className=" w-full h-full flex">
         <div className="w-width80% h-height96% mt-2 mr-1">
            <div className="w-full h-4/5">
               <div className="w-full h-height35% bg-secondary mb-2 rounded-md flex justify-center items-center">
                   <div className="w-full  overflow-y-auto flex 2xl:px-4 2xl:py-4 xl:px-4 xl:py-4 lg:px-3 lg:py-3 md:px-2 md:my-2 sm:px-1 sm:py-1">
                      <div className="w-width50% h-full text-right mr-2">
                         <h1 className="text-white uppercase rounded bg-TheadColor mb-1 pr-2 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-base lg:text-tiny md:text-smallFont sm:text-smallFont">Total:</h1>
                         <h1 className="text-white uppercase rounded bg-TheadColor mb-1 pr-2 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-base lg:text-tiny md:text-smallFont sm:text-smallFont">Service Charge:</h1>
                         <h1 className="text-white uppercase rounded bg-TheadColor mb-1 pr-2 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-base lg:text-tiny md:text-smallFont sm:text-smallFont">Discount:</h1>
                         <h1 className="text-white uppercase rounded bg-TheadColor mb-1 pr-2 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-base lg:text-tiny md:text-smallFont sm:text-smallFont">Paid Amount:</h1>
                         <h1 className="text-white uppercase rounded bg-TheadColor mb-1 pr-2 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-base lg:text-tiny md:text-smallFont sm:text-smallFont">Changes:</h1>
                      </div>
                      <div className="w-width50% h-full">
                         <input type="text" onClick={this.eventOnClick} name="totalAmount" value={this.state.totalAmount} onChange={this.changeHandler} className="w-full rounded text-black text-center mb-1 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-smallFont sm:text-smallFont" />
                         <input type="text" onClick={this.eventOnClick} name="serviceCharge" value={this.state.serviceCharge} onChange={this.changeHandler} className="w-full rounded text-black text-center mb-1 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-smallFont sm:text-smallFont" />
                         <input type="text" onClick={this.eventOnClick} name="discount" value={this.state.discount} onChange={this.changeHandler} className="w-full rounded text-black text-center mb-1 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-smallFont sm:text-smallFont" />
                         <input type="text" onClick={this.eventOnClick} name="paidAmount" value={this.state.paidAmount} onChange={this.changeHandler} className="w-full rounded text-black text-center mb-1 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-smallFont sm:text-smallFont" />
                         <input type="text" onClick={this.eventOnClick} name="changes" value={this.state.changes} onChange={this.changeHandler} className="w-full rounded text-black text-center mb-1 2xl:font-bold xl:font-semibold lg:font-medium md:font-normal sm:font-light 2xl:text-lg xl:text-lg lg:text-base md:text-smallFont sm:text-smallFont" />
                      </div>
                   </div>
               </div>
               <div className="w-full h-height64% bg-secondary rounded-md ">
                   <div className="w-full h-full 2xl:px-4 2xl:py-4 xl:px-4 xl:py-4 lg:px-3 lg:py-3 md:px-2 md:my-2 sm:px-1 sm:py-1">
                      <div className="bg-white w-full h-height75% flex rounded-t-md">
                         <div className="w-width20% h-full ">
                                  <button onClick={() => this.buttonHandler(10)} className="bg-blue h-1/5 w-full rounded-tl-md border border-black text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-medium sm:font-normal 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny">
                                     10
                                  </button>
                                  <button onClick={() => this.buttonHandler(20)} className="bg-blue h-1/5 w-full border border-black text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-medium sm:font-normal 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny">
                                     20
                                  </button>
                                  <button onClick={() => this.buttonHandler(50)} className="bg-blue h-1/5 w-full border border-black text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-medium sm:font-normal 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny">
                                     50
                                  </button>
                                  <button onClick={() => this.buttonHandler(100)} className="bg-blue h-1/5 w-full border border-black text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-medium sm:font-normal 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny">
                                     100
                                  </button>
                                  <button onClick={() => this.buttonHandler(1000)} className="bg-blue h-1/5 w-full border border-black text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-medium sm:font-normal 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny">
                                     1000
                                  </button>
                         </div>
                         <div className="w-width60% h-height96%">
                            <div className="flex h-height25% mx-0.5 mb-0.5">
                               <button onClick={() => this.buttonHandler(7)} className="bg-white mr-0.5 w-full border border-black text-black 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-2xl lg:text-lg md:text-base sm:text-tiny ">7</button>
                               <button onClick={() => this.buttonHandler(8)} className="bg-white mr-0.5 w-full border border-black text-black 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-2xl lg:text-lg md:text-base sm:text-tiny ">8</button>
                               <button onClick={() => this.buttonHandler(9)} className="bg-white w-full border border-black text-black 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-2xl lg:text-lg md:text-base sm:text-tiny ">9</button>
                            </div>
                            <div className="flex h-height25% mx-0.5 mb-0.5">
                               <button onClick={() => this.buttonHandler(4)} className="bg-white mr-0.5 w-full border border-black text-black 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-2xl lg:text-lg md:text-base sm:text-tiny ">4</button>
                               <button onClick={() => this.buttonHandler(5)} className="bg-white mr-0.5 w-full border border-black text-black 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-2xl lg:text-lg md:text-base sm:text-tiny ">5</button>
                               <button onClick={() => this.buttonHandler(6)} className="bg-white w-full border border-black text-black 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-2xl lg:text-lg md:text-base sm:text-tiny ">6</button>
                            </div>
                            <div className="flex h-height25% mx-0.5 mb-0.5">
                               <button onClick={() => this.buttonHandler(1)} className="bg-white mr-0.5 w-full border border-black text-black 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-2xl lg:text-lg md:text-base sm:text-tiny ">1</button>
                               <button onClick={() => this.buttonHandler(2)} className="bg-white mr-0.5 w-full border border-black text-black 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-2xl lg:text-lg md:text-base sm:text-tiny ">2</button>
                               <button onClick={() => this.buttonHandler(3)} className="bg-white w-full border border-black text-black 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-2xl lg:text-lg md:text-base sm:text-tiny ">3</button>
                            </div>
                            <div className="flex h-height25% mx-0.5 mb-0.5">
                               <button onClick={() => this.buttonHandler(',')} className="bg-white mr-0.5 w-full border border-black text-black 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-2xl lg:text-lg md:text-base sm:text-tiny ">,</button>
                               <button onClick={() => this.buttonHandler(0)} className="bg-white mr-0.5 w-full border border-black text-black 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-2xl lg:text-lg md:text-base sm:text-tiny ">0</button>
                               <button onClick={() => this.inputFieldDeleting()} className="bg-black w-full border border-white text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium 2xl:text-4xl xl:text-2xl lg:text-lg md:text-base sm:text-tiny  ">C</button>
                            </div>
                            
                         </div>
                         <div className="w-width20% h-full">
                                  <button className="bg-TheadColor rounded-tr-md h-1/5 w-full border border-black text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-medium sm:font-normal 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny ">
                                     All
                                  </button> 
                                  <button onClick={() => this.buttonHandler(.5)} className="bg-blue h-1/5 w-full border border-black text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-medium sm:font-normal 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny ">
                                     1/2
                                  </button>
                                  <button onClick={() => this.buttonHandler(.3)} className="bg-blue h-1/5 w-full border border-black text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-medium sm:font-normal 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny ">
                                     1/3
                                  </button>
                                  <button onClick={() => this.buttonHandler('n')} className="bg-blue h-1/5 w-full border border-black text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-medium sm:font-normal 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny ">
                                     1/N
                                  </button>
                                  <button className=" bg-TheadColor uppercase h-1/5 w-full border border-black text-white 2xl:font-black xl:font-extrabold lg:font-bold md:font-medium sm:font-normal 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-tiny ">
                                     ticket
                                  </button>
                         </div>
                      </div>
                      <div className=" w-full h-height25% flex">
                                  <button className=" bg-blue rounded-bl-md text-center w-width20% h-full border border-black text-white outline-none">
                                     <h1 className="transform -rotate-45 2xl:font-normal xl:font-normal lg:font-tiny md:font-normal sm:font-normal 2xl:text-tiny xl:text-smallFont lg:text-extraSmall2 md:text-extraSmall2 sm:text-extraSmall2 uppercase">Discount<div>%</div> </h1>
                                  </button>
                                  <button className=" bg-blue w-width20% text-center h-full border border-black text-white outline-none">
                                     <h1 className="w-full h-full transform -rotate-45 2xl:font-normal xl:font-normal lg:font-tiny md:font-normal sm:font-normal 2xl:text-tiny xl:text-smallFont lg:text-extraSmall2 md:text-extraSmall2 sm:text-extraSmall2 uppercase outline-none">sp<div>Discount</div> </h1>
                                  </button>
                                  <button className=" bg-blue w-width20% h-full border border-black text-white outline-none">
                                     <h1 className="transform -rotate-45 2xl:font-normal xl:font-normal lg:font-tiny md:font-normal sm:font-normal 2xl:text-tiny xl:text-smallFont lg:text-extraSmall2 md:text-extraSmall2 sm:text-extraSmall2 uppercase outline-none">item<div>Discount</div> </h1>
                                  </button>
                                  <button className=" bg-blue w-width20% h-full border border-black text-white outline-none">
                                     <h1 className="transform -rotate-45 2xl:font-normal xl:font-normal lg:font-tiny md:font-normal sm:font-normal 2xl:text-tiny xl:text-smallFont lg:text-extraSmall2 md:text-extraSmall2 sm:text-extraSmall2 uppercase outline-none">print<div>bill</div> </h1>
                                  </button>
                                  <button className=" bg-blue rounded-br-md w-width20% h-full border border-black text-white outline-none">
                                     <h1 className="transform -rotate-45 2xl:font-normal xl:font-normal lg:font-tiny md:font-normal sm:font-normal 2xl:text-tiny xl:text-smallFont lg:text-extraSmall2 md:text-extraSmall2 sm:text-extraSmall2 uppercase outline-none">split<div>bill</div> </h1>
                                  </button>
                             
                                   
                      </div>
                   </div>
               </div>
            </div>
 
            <div className="w-full h-1/5 flex justify-center items-center">
                <div className=" text-center 2xl:font-black xl:font-extrabold lg:font-bold md:font-semibold sm:font-medium uppercase 2xl:text-xl xl:text-lg lg:text-base md:text-tiny sm:text-smallFont">
                   <h1>Curren Payment Method</h1>
                   <h1 className="text-red">Master Card</h1>
                </div>
            </div>
         </div>
 
         <div className="w-width20% overflow-y-auto h-full bg-black px-0.5">
            <RightButton name="Cash"/>
            <RightButton name="Customer Account"/>
            <RightButton name="Visa Card"/>
            <RightButton name="Master Card"/>
            <RightButton name="Amex Card"/>
            <RightButton name="Bkash"/>
            <RightButton name="Food Panda"/>
            <RightButton name="Uber Eats"/>
            <RightButton name="Pathao Food"/>
            <RightButton name="Evely EFood"/>
         </div>
       </div>
     )
       
    }
        
}