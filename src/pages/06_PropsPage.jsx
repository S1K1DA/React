import Child from "../components/06_Child";

export default function PropsPage() {
const numbers = Array.from({ length: 1000000 }, (_,i) => i);

// console.time("A : ");
// const A = numbers.map(number => number*2);
// console.timeEnd("A : ");

// console.time("B : ");
// const B = numbers.map(number => number % 2 === 0);
// console.timeEnd("B : ");
    return (
    <Child 
        size={500}
        dog={{ name: "카리나", imageURL: "/src/assets/카리나.jpg"}} 
        name="카리나"
        count={0}
    />
    );
}