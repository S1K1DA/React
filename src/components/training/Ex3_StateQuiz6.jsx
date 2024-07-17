import { useState } from "react";


export default function StateQuiz6() {
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

    function handleClick() {
        const intputNumber = parseInt(number);
        
        if (isNaN(intputNumber)) {
            setMessage("숫자를 유효하게 입력하세요.");
            return;
        }

        if([3, 4, 5].includes(intputNumber)) {
            setMessage("계절은 봄 입니다.");
        } else if(intputNumber === 6 || intputNumber === 7 || intputNumber ===8) {
            setMessage("계절은 여름 입니다.");
        } else if(intputNumber === 9 || intputNumber === 10 || intputNumber ===11) {
            setMessage("계절은 가을 입니다.");
        } else if(intputNumber === 12 || intputNumber === 1 || intputNumber ===2) {
            setMessage("계절은 겨울 입니다.");
        } else {
            setMessage("해당하는 계절은 없습니다.");
        }
    }


    return (
        <>
            <input type="text" onChange={(e) => setNumber(e.target.value)} placeholder="숫자 입력"/>
            <button onClick={handleClick}>확인</button>
            <div>{message}</div>
        </>
    )
}