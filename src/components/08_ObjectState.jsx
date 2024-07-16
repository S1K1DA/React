import { useState } from "react";

export default function ObjectState() {
    // 객체 초기값 설정
    const [user, setUser] = useState({name:"John", age:60});

    // 객체 상태 업데이트
    function updateName() {
        setUser(user => ({ ...user, name: "jane"}));
    }
    
    return (
        <div>
            <p> name : {user.name}</p>
            <p> age : {user.age}</p>
            <button onClick={updateName}>UpdateName</button>
        </div>
    )



}