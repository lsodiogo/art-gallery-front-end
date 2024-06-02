import { useState, useRef } from "react";

import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";


function HomePage() {

   const [text, setText] = useState("");
   const toastRef = useRef();

   function onButtonClick() {
      if (text) {
         toastRef.current.show({
            severity: "info",
            summary: "Success",
            detail: text
         });
      } else {
         toastRef.current.show({
            severity: "error",
            summary: "Error",
            detail: "Field required!"
         });
      }
   }

   function InputTextHandleChange(event) {
      setText(event.target.value);
   };

   return (
      <>
         <div>
            <Toast
               ref={toastRef}
            >

            </Toast>
            <div>HOME PAGE</div>

            <span className="p-float-label">
               <InputText
                  id="input_txt"
                  value={text}
                  onChange={event => InputTextHandleChange(event)}
               />
               <label htmlFor="input_txt" className="p-component">Name</label>
            </div>

            <br/>

            result: {text}

            <br/>

            <Button
               type="button"
               label="Submit"
               icon="pi pi-check"
               onClick={onButtonClick}
            >

            </Button>
         </div>
      </>
   );
};


export default HomePage;