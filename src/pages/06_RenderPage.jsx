
import Rendering from "../components/06_Rendering";

export default function RenderPage() {
    // const animals = ["dog", "cat", "pig"];
    const animals = [
        {name: "dog", age:"3"},
        {name: "cat", age:"5"},
        {name: "pig", age:"4"},
    ];

    return <Rendering animals={animals}></Rendering>;
}