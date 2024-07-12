import Child from "../components/06_Child";

export default function PropsPage() {
    return (
    <Child 
        size={300}
        dog={{ name: "강아지", imageURL: "/src/assets/카리나.jsp"}} 
    />
    );
}