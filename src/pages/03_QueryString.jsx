// 현재 URL 정보를 가져오는 router hook
import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function QueryString() {
    // 자바스크립트 코드
    const query = useQuery();
    const getAge = query.get("age");

    return (
        // HTML 코드 작성
        <div>
            <p>쿼리스트링의 값 : {getAge} </p>
        </div>
    );
}

export default QueryString;