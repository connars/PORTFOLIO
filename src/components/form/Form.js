import "./form.scss";
// import { motion } from "framer-motion"
// import { useInView } from 'react-intersection-observer';

function Form() {

    function toggleFormBox() {
        const formBox = document.querySelector('.form__box');
      
        if (formBox) {
          formBox.classList.toggle('active');
        }
      }
  
    return (
        <div className="form__box">
            <div onClick={toggleFormBox} className="close">
                <span></span>
                <span></span>
            </div>
            <div onClick={toggleFormBox} className="form">
            
            </div>
        </div>
    );
}

export default Form;
