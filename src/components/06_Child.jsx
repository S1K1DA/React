import PropTypes from 'prop-types';
import BackButton from './common/BackButton';

function checkKarina(name) {
    if(name === "카리나") {
        return <p>이분은 카리나님 입니다.</p>
    } else {
        return <p>카리나님이 아닙니다.</p>
    }
}

export default function Child({ size, dog, name, count }) {
    const numbers = [1, 2, 3, 4, 5];

    // 기존 numbers 배열에서 2를 곱한 배열을 생성
    const doubledNumbers = numbers.map((number) => {
        return number * 2;
    });

    // 배열을 순회하여 새로운 배열을 반환하기 위한 함수
    // * 새로운 배열을 반환하기 떄문에 기존 배열의 데이터는 유지됨

    // 기존 데이터 : numbers = [1, 2, 3, 4, 5];
    // 1. numbers 배열의 첫번째 값(index:0)을 꺼냄
    //    --> number : 1
    // 2. return number * 2에 의해서 숫자 2가 반환
    // 3. doubledNumbers가 반환을 받아서 배열 [2]
    //    --> doubledNumbers = [2]
    // 4. numbers 배열의 두번째 값(index:1)을 꺼냄
    //    --> number : 2
    // 5. return number * 2에 의해서 숫자 4가 반환
    // 6. doubledNumbers가 반환을 받아서 배열에 추가 [2, 4]
    //    --> doubledNumbers = [2, 4]

    // filter() 함수
    // 배열을 순회를 하는데, 특정 조건에 따라 요소를 필터링, 새로운 배열 생성 후 반환
    const isNumberThree = numbers.filter((number) => {
        return number === 3;
    });

    console.log(isNumberThree);

    console.log(doubledNumbers);
    console.log(numbers);
    // 조건문 렌더링(if문)
    // JSP의 if, choose
    if(name === "카리나") {
        return (
            <>
            {checkKarina(name)}
            {count === 0  && <p>카리나님은 한분이십니다.</p>}
            {/* <p>이분의 존함은 카리나 입니다.</p> */}
            <img src={dog.imageURL} 
            alt={dog.name} 
            width={size}
            height={size}
            ></img>

            <hr/>
            <h1>map() 함수</h1>
            <ul>
                {
                // doubledNumbers 배열에 있는 값들을 li태그 붙여서 렌더링
                // doubledNumbers = [2, 4, 6, 8, 10]
            }
                {/* 중괄호 사용 시 자바스크립트 코드 작성 가능 */}
                {doubledNumbers.map((number, index) => {
                 const test = 1;
                 return <li key={index}>{number}</li>   
                })}
                {doubledNumbers.map((number, index) => (
                // const test = 1;
                    <li key={index}>{number}</li>
                ))}
            </ul>
            <br/>
            <BackButton />
            </>
            );
    }
}

Child.propTypes = {
    // size를 numㅠer 타입, 필수로 입력받겠다
    size : PropTypes.number.isRequired,

    // shape : 자바스크립트 객체 타입 검사 할 때
    dog : PropTypes.shape({
        // imageURL은 string 타입, 필수로 입력 받겠다.
        imageURL : PropTypes.string.isRequired,
        // name은 string 타입, 필수로 입력 받겠다.
        name: PropTypes.string.isRequired,
    }),

    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
};
