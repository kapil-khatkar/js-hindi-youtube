//DE - STRUCTURE & JSON API Intro

//________________De-Structure
const course ={
    coursename :"js in hindi",
    price :"999",
    courseInstructor:"kapil",
}

// course course.courseInstructor

const {courseInstructor:instructor} = course
console.log(instructor);


// const navbar = ({company}) =>{

// }

// navbar(company ="kapil");//({company})


//__________________API_____________________//
//______________JSON format_________________//
//_______object fomat api_______//
//__data from api is in JSON format
//__earlier times data from api is in XML format

// {
//     "name":"kapil",
//     "coursename":"js in hindi",
//     "price":"free",
// }

//_____API______//
//___array format api_____//
[
    {},
    {},
]