
export default function Child({ size, dog }) {
    return (

        <img src={dog.imageURL} 
        alt={dog.name} 
        width={size}
        height={size}
        ></img>
        );
}

Child.PropTypes = {
    // size를 numㅠer 타입, 필수로 입력받겠다
    size : PropTypes.number.isRequired,

    // shape : 자바스크립트 객체 타입 검사 할 때
    dog : PropTypes.shape({
        // imageURL은 string 타입, 필수로 입력 받겠다.
        imageURL : PropTypes.string.isRequired,
        // name은 string 타입, 필수로 입력 받겠다.
        name: PropTypes.string.isRequired,
    }),
};
