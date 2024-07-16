import { useState } from "react";

export default function StateQuiz2() {
    const [dan, setDan] = useState("");
    const [result, setResult] = useState("");

    function handleClick() {
        const danNumber = parseInt(dan);

        if (isNaN(danNumber)) {
            return;
        }

        let sum = 0;
        for (let i = 1; i <= 9; i++) {
            sum += danNumber * i;
        }
        setResult(danNumber+ "단의 합계는" + sum + "입니다.");
    }

    return (
        <>
            <input type="text" onChange={(e) => setDan(e.target.value)} />
            <button onClick={handleClick}>확인</button>
            <div>{result}</div>
        </>
    );
}
