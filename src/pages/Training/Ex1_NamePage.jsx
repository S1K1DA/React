// URL : /Training/NamePage
// <p> 입력한 이름: [경로파라미터로 가져온 이름] <p/>
// 뒤로가기 버튼 o

import { useParams } from "react-router-dom";
import BackButton from "../../components/common/BackButton";

function NamePage() {
    const { value } = useParams();

    return (
        <div>
            <p>입력한 이름: { value }</p>
            <BackButton />
        </div>
    );
}

export default NamePage;