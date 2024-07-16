import StateQuiz2 from "../../components/training/Ex3_StateQuiz2";
import StateQuiz3 from "../../components/training/Ex3_StateQuiz3";
import StateQuiz4 from "../../components/training/Ex3_StateQuiz4";
import StateQuiz5 from "../../components/training/Ex3_StateQuiz5";
import StateQuiz6 from "../../components/training/Ex3_StateQuiz6";
import StateQuiz1 from "../../components/training/Ex3_StateQuiz1";

export default function StateQuizPage() {
    return (
        <>
            <h3>Q1. 사용자의 이름을 입력받고, 확인 버튼을 누르면 "OOO님 환영합니다"를 alert으로 출력하세요.</h3>
            <StateQuiz1 />

            <hr />
            <h3>Q2. 몇단을 출력할지 입력받고, 확인 버튼을 누르면 innerHTML을 활용해 구구단의 합계를 div 태그에 출력하세요.</h3>
            <StateQuiz2 />

            <hr />
            <h3>Q3. 사용자의 이름과 나이를 출력입력 받고, 확인 버튼을 누르면
        innerHTML을 활용해 div 태그에 환영 메시지를 출력하세요.</h3>
            <StateQuiz3 />

            <hr />
            <h3>Q4. 사용자로부터 숫자를 하나 입력받아 확인 버튼을 누르면
        홀수인지 짝수인지 판별하고, inerrHTML을 활용해 div 태그에 출력하세요.</h3>
            <StateQuiz4 />

            <hr />
            <h3>Q5. 입력 받은 값이 0 또는 12 이상일 경우, 
            “값이 너무 크거나 작습니다.”를 출력 하시오.</h3>
            <StateQuiz5 />

            <hr />
            <h3>Q6. 입력 받은 월에 따라 계절을 출력 하시오.</h3>
            <StateQuiz6 />
        </> 
    );
}