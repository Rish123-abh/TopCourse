import React from "react";
import Card from './Card';
import { useState } from "react";
const  Cards=(props)=>{
    let courses=props.courses;
    let category=props.category;
    let allCourse=[];
const[likedcourses,setLikedcourses]=useState([]);
    const getCourses= ()=>{

        // Har data ko ek array ke andar daal rhe h 
        if(category==="All"){
            Object.values(courses).forEach((coursecategory)=> {
                coursecategory.forEach((course)=>{
                    allCourse.push(course);
                })
            });
            return allCourse;
        }
        else{
            // specific category ka data pass karn ahai 
            return courses[category];
        }
        
    }
    return (
        
        <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map((course)=>{
              return  <Card  key={course.id} course={course} likedcourses={likedcourses} setlikedcourses={setLikedcourses}/>;
            })
        }
        </div>
    )
}
export default Cards;