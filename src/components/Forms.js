import React, {useState} from 'react';
import '../assets/form.css';


export default function Car(){

    const [component, setComponent]= useState("")
    const [model, setModel]= useState("")
    const [proYear, setProYear]= useState(null)
    const [mileage, setMileage]= useState(null)
    const [condition, setCondition]= useState({first: "excellent", second: "good", third:"fair", fourth: "poor"})
    const [features, setFeatures]= useState([])
    const [transmision, setTransision]= useState({first:"automatic", second: "manual"})
    const [priceRange, setPriceRange]= useState("")


    // Component handler
    const componentHandler= (event)=>{
        setComponent(event.target.value)
    }

    // Model Handler

    const modelHandler = (event)=>{
        setModel(event.target.value)
    }

    const proYearHandler = (event)=>{
        setProYear(event.target.value)
    }

    // Price Handler

    const priceHandler= (event)=>{
        setPriceRange(event.target.value)
    }

    // Mileage Handler

    const mileageHandler= (event)=>{
        setMileage(event.target.value)
    }

    // Condition Handler


    const conditionHandler = (event)=>{
        setCondition(event.target.value)
    }

  

    // Feature Handler
    const featureHandler = (event) => {
        const { value, checked } = event.target;
      
        if (checked) {
          setFeatures((prevValues) => [...prevValues, value]);
        } else {
          setFeatures((prevValues) =>
            prevValues.filter((val) => val !== value)
          );
        }
      };
      

    // Submit Handler 
    const handleSubmit= (event)=>{
        event.preventDefault()
        console.log(component, proYear, "price is:"+priceRange, mileage, condition, features)
    }
    




    return (
        <form onSubmit={handleSubmit}>
            <div className='car-input'>
            <label>Car Component</label>
            <input type="text" placeholder="Enter Car Component" value={component} onChange={componentHandler}/>
            </div>

             <div className='car-input'>
            <label>Car Model</label>
            <input type="text" placeholder="Enter Car Model" value={model} onChange={modelHandler}/>
            </div>

             <div className='car-input'>
            <label>Year Of Production</label>
            <input type="date" placeholder="Enter Year of Production" value={proYear} onChange={proYearHandler}/>
            </div>

             <div className='car-input'>
            <label>Mileage</label>
            <input type="text" placeholder="Enter Car mileage" value={mileage} onChange={mileageHandler}/>
            </div>

             <div className='car-input'>
            <label>Car condition</label>
            <label><input type="radio" name="condition" onChange={conditionHandler} value={condition.first}/>Excellent</label>
            <label><input type="radio" name="condition" onChange={conditionHandler} value={condition.second}/>Good</label>
            <label><input type="radio" name="condition" onChange={conditionHandler} value={condition.third}/>Fair</label>
            <label><input type="radio" name="condition" onChange={conditionHandler} value={condition.fourth}/>Poor</label>
            </div>

             <div className='car-input'>
            <label>Car Features</label>
            <label><input type="checkbox" onChange={featureHandler} value={features[1]} name="features" checked={features.includes("Air conditioning")}/>Air conditioning</label>
            <label><input type="checkbox" onChange={featureHandler} value={features[2]} name="features" checked={features.includes("Power Steering")}/>Power Steering</label>
            <label><input type="checkbox" onChange={featureHandler} value={features[3]} name="features" checked={features.includes("ABS")}/>ABS</label>
            <label><input type="checkbox" onChange={featureHandler} value={features[4]} name="features" checked={features.includes("Navigation System")}/>Navigation System</label>
            </div>
            
             <div className='car-input'>
            <label>Car transmission</label>
                <select id='transmition'>
                    <option value="none">Select car transmision</option>
                    <option value="automatic">Automatic</option>
                    <option value="manual">Manual</option>
                </select>
            </div>

            <div className='car-input'>
            <label>Price range</label>
               <input type="range" min="0" max="100" step="10" value={priceRange} id="price-range" onChange={priceHandler}/>
               <p>Price range: <span id="price-value">${priceRange*1000}</span></p>
            </div>

            <div className='car-input'>
            <label>Contact for Purchase</label>
               <input type="tel" placeholder="Enter the contact"/>
            </div>



        <button type='submit'>Submit</button>
    </form>
    )
}