
import './App.css'



import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [principle, setPrinciple] =useState(0)
  const [rate,setRate] =useState(0)
  const [year,setYear]=useState(0)
  const [interest, setInterest]=useState(0)

  //conditional rendering

  const[isprinciple ,setIsPrinciple] = useState(true)
  const[israte ,setIsRate] = useState(true)
  const[isyear ,setIsYear] = useState(true)


  const validate = (e)=>{
    const { name,value} = e.target 
    console.log(name);
    console.log(value);

    //regular expression
    // console.log(!!value.match(/^[0-9]*$/));
    if(!!value.match(/^[0-9]*$/)){
      if(name=='principle'){
        setPrinciple(value)
        setIsPrinciple(true)
        
      }
      else if(name=='rate'){
        setRate(value)
        setIsRate(true)

      }
      else{
        setYear(value)
        setIsYear(true)
      }

    }
    else{
      if(name=='principle'){
        setPrinciple(value)
        setIsPrinciple (false)
      }
      else if(name='rate'){
        setRate(value)
        setIsRate(false)
      }
      else{
        setYear(value)
        setIsYear(false)
      }

    }
  }
  //function to reset
  const handleReset=()=>{
   setPrinciple(0)
   setRate(0)
   setYear(0)
   setIsPrinciple(true)
   setIsRate(true)
   setIsYear(true)
   setInterest(0)

  }
  //function to calculate
  const handleCalculate=()=>{
    setInterest((principle*rate*year)/100)

  }



  return (
    <>
      <div className='main'>
        <div className='sub p-5'>
          <h1>Simple interest App</h1>
          <p>Calculate your simple interest Easily</p>
          <div className='w-100 d-flex justify-content-center align-items-center  result rounded shadow mt-5 flex-column '>
            <h1> ₹ {interest}</h1>
            <p>Total simple interst</p>

          </div>
          <form action='' className='mt-5'>
            <TextField id="outlined-basic" name="principle" value={principle || ""} label="Principle amount" variant="outlined" className='w-100'onChange={(e)=>validate(e)} />
           { !isprinciple && <p className='text-danger'>Invalid Input</p>}
            <TextField id="filled-basic" name="rate"  value={rate || ""} label="Rate of the interest(p.a)%" variant="outlined" className='w-100 mt-3' onChange={(e)=>validate(e)}/>
           { !israte && <p className='text-danger'>Invalid Input</p>}
            <TextField id="standard-basic" name="year" value={year || ""} label="Year" variant="outlined" className='w-100 mt-3' onChange={(e)=>validate(e)}/>
            { !isyear && <p className='text-danger'>Invalid Input</p>}

            <div className='d-flex mt-4' >

              <Button onClick={handleCalculate} className='w-50 me-3 p-3' variant="contained" color='success' disabled={isprinciple && israte && isyear ? false:true}>Calculate</Button>
              <Button onClick={handleReset} className='w-50 p-3' variant="outlined" color='primary'>Reset</Button>
            </div>
          </form>


        </div>

      </div>
    </>
  )
}

export default App


