import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import { apiUrl,filterData } from './data.js';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { toast } from "react-toastify";
import {FaBeer} from 'react-icons/fa' 
import { icons } from 'react-icons';
import Spinner1 from './components/Spinner';
// import { useEffect } from 'react';
// import { useState } from 'react';
// Toast ->Side se kuch pop-up ho rha hai usko toast kehte hai.
// Steps to add toastify in react
//Step-1->  npm i react-toastify run karke install hoga
// Step-2 -> app me or index me use karenge to avh pe import karna hoga 
// import { ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css"; 
function App1() {
    // ek baar api call karni padegi 
    const [courses,setcourses]=useState([]);
    const [loading,setloading]=useState(true);
    // by ddefault category ki value all hai usko access karne ka tarika filterData[0].title
    const [category,setcategory]=useState(filterData[0].title);    

    const fetchData=async() =>{
            // Jab tak data fetch nhi hota 
            setloading(true);
            try {
                const res=await fetch(apiUrl);
                const output=await res.json();
                // save data into a variable
                // data key ke andar sab value dali hai
                setcourses(output.data);
            } 
            catch (error) {
                toast.error("Something went wrong ");
            }
            setloading(false);
        }
        useEffect(()=>{
        fetchData();
    },[]);
    return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
        <div>
        <Navbar/>
        </div>
        <div>
        <Filter filterData={filterData} 
        category={category}
        setcategory={setcategory}
        />
        </div>
        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {
            loading ? (<Spinner1/>):(<Cards courses={courses} category={category}/>)

        }
        </div>
        
    </div>
  );
}

export default App1;
