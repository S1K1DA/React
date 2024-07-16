import { useState } from "react";

export default function StateQuiz3() {
    const [inputName, setInputName] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [message, setMessage] = useState("");
    const [fontCollor , setFont] = useState("");

    function handleClick() {
        const ageNumber = parseInt(inputAge);

        if (isNaN(ageNumber)) {
            setMessage("나이를 유효한 숫자로 입력하세요.");
            setFont("red");
            return;
        }

        if (ageNumber >= 18) {
            setMessage(inputName + "님, 안녕하세요! 성인 분이시군요.");
        } else if( 0 < ageNumber < 18){
            setMessage(inputName + "님, 안녕하세요! 미성년자 분이시군요.");
        }
    }

    return (
        <>
            이름: <input type="text" onChange={(e) => setInputName(e.target.value)} />
            <br />
            나이: <input type="text" onChange={(e) => setInputAge(e.target.value)} />
            <button onClick={handleClick}>확인</button>
            <div style={{color:fontCollor}}>{message}</div>
        </>
    );
}
