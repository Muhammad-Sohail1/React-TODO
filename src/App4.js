import React from "react";

// First Example

function One(){
    return 9 + 9;
}

// Second Example 

    const Obj = {
        Name : "This is First Object Example"
    }

    class Stu{
        show(){
            return "This is Class Example El";
        }

    } const k = new Stu()

const El = () => {
    return <h1>{k.show()}</h1>
}

export default El;








