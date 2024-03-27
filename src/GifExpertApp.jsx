import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => { 

    const [categories,setCategories] = useState (['Berserk']);

    const onAddCategory = (newCategory ) => {
        
        if (categories.includes(newCategory)) return;
        
        //console.log=(newCategory);
        setCategories ([ newCategory , ...categories ])
        
    
    }





    return ( 
    <>  
        <h1>Gifts Bubba App</h1>

{/* input */}
<AddCategory 
        
        onNewCategory={value => onAddCategory(value)}

></AddCategory>
        
        {
            categories.map( (category) => (
            <GifGrid 
                key={ category }
                category={ category }/>
            ) )
        }
        


    </>

    )
}