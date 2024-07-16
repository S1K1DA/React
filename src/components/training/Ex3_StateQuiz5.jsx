import { useState } from "react";

export default function StateQuiz5() {
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");

    function handleClick() {
        const inputNumber = parseInt(number);

        if (isNaN(inputNumber)) {
            setMessage("유효한 숫자를 입력하세요.");
            return;
        }

        if (inputNumber === 0 || inputNumber >= 12) {
            setMessage("값이 너무 크거나 작습니다.");
        } else {
            setMessage("");
        }
    }

    return (
        <>
            <input 
                type="text" onChange={(e) => setNumber(e.target.value)} placeholder="숫자 입력" />
            <button onClick={handleClick}>확인</button>
            <div>{message}</div>
        </>
    );
}
