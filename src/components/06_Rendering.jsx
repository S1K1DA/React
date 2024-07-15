
export default function Rendering({ animals }) {
    // 1. map() 사용해서 animals에 있는 요소들을 li태그로 렌더링
    // const animal = animals.map((animal, index) => {
    //     return <li key={index}>{animal}</li>;
    // });
    
    // 2. filter() 사용해서 animals에 있는 요소들을 li태그로 렌더링
    //    조건 : 나이가 홀수인 동물만 조회
    //    출력값
    // <li>
    //     <p>
    //         이름:  나이:
    //     </p>
    // </li>
    const animalsFilter = animals.filter (animal => animal.age%2 === 1);
    const animalsList = animalsFilter.map((animal, index) =>
    <li key = {index}>
        <p>이름 : {animal.name}, 나이 : {animal.age}</p>
    </li>)
    // <li>
    //     <p>
    //         이름 : {animalsFilter.name}   나이 : {animalsFilter.age}
    //     </p>
    // </li>


    return (
        <>
            <ul>
                {animalsList}
            </ul>
        </>
    );
}
