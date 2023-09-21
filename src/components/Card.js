import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
const Card =(props)=>{
        let course=props.course;
        let likedcourses=props.likedcourses;
        let setLikedcourses=props.setlikedcourses;
    function clickHandler(){
// logic 
       // phelse se liked hoga 
       if(likedcourses.includes(course.id)){
        // isko unlike karna hai
        setLikedcourses((prev)=>prev.filter((cid)=>cid!==course.id));
        toast.warning("Like removed ");
       }
    //    phele se like nhi hai 
    else{
        // yah to likedcourses ki list empty hogi
        if(likedcourses.length===0){
            setLikedcourses([course.id]);
        }
        else{
            // liked courses me kuch present hai 
            setLikedcourses((prev)=>[...prev,course.id]);
        }
        toast.success("Liked Successfully");
    }
    }
    return(
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
            <div  className='relative '>
                <img src={course.image.url} alt=""></img>
                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            !likedcourses.includes(course.id) ?<FcLikePlaceholder fontSize="1.75rem"/> :<FcLike fontSize="1.75rem"/> 
                        }
                        
                        
                    </button>
                </div>
            </div>
        <div className='p-4'>
            <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                {
                    course.description.length>100? (course.description.substr(0,100))+"...":(course.description)
                }
                </p>
        </div>

        </div>
    )
}
export default Card;