
export default function Rendering({ animals }) {
    // map() 사용해서 animals에 있는 요소들을 li태그로 렌더링
    const animal = animals.map((animal, index) => {
        return <li key={index}>{animal}</li>;
    });
    
    return (
        <>
            <ul>
                {animal}
            </ul>
        </>
    );
}
