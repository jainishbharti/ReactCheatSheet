

// function Greet(){
//     return <h1>Hello, Vishwas!</h1>
// }

//Destructuring props inside parameter
// export const Greet = ({name, heroName, children}) => {
//     return (
//         <>
//             <h1>Hello {name} aka {heroName}</h1>
//             <div>{children}</div>
//         </>
//     )   
// }

//Destructuring props inside function body
export const Greet = (props) => {
    const {name, heroName, children} = props;
    
    return (
        <>
            <h1>Hello {name} aka {heroName}</h1>
            <div>{children}</div>
        </>
    )
    
}

// export default Greet;