import { useState } from "react";

export default function StateQuiz4() {
    const [number, setNumber] = useState("");
    const [message, setMessage] = useState("");
    const [fontCollor, setFontCollor] = useState("blue");

    function handleClick() {
        const num = parseInt(number);

        if (isNaN(num)) {
            setMessage("숫자를 유효하게 입력하세요.");
            setFontCollor("red");
            return;
        }

        if (num % 2 === 0) {
            setMessage("입력한 숫자는 짝수입니다.");
            setFontCollor("blue");
        } else {
            setMessage("입력한 숫자는 홀수입니다.");
            setFontCollor("red");
        }
    }

    return (
        <>
            <input type="text" onChange={(e) => setNumber(e.target.value)} placeholder="숫자 입력"/>
            <button onClick={handleClick}>확인</button>
            <div style={{ color: fontCollor }}>{message}</div>
        </>
    );
}
