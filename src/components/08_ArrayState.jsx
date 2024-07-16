import { useState } from "react";

export default function ArrayState() {
    // 상태 초기 값 설정
    const [items, setItems] = useState(["item-1", "item-2", "item-3"]);

    // 상태 업데이트 ( 아이템 추가 )
    function addItem() {
        setItems(items => [...items, "new-item"]);
    }

    // 상태 업데이트 ( 아이템 삭제 )
    function deleteItem(index) {
        setItems(items => items.filter((_, i) => i !== index));
    }

    function updateItem(index, newItem) {
        setItems((item) => items.map((item, i) => (i === index ? newItem : item)));
        
    }

    return (
        <>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        {/* 화살표 함수를 사용하면 즉시 실행을 방지함 */}
                        <button onClick={() => updateItem(index, "변경됨")}>변경</button>
                        <button onClick={() => deleteItem(index)}>삭제</button>
                        </li>
                ))}
            </ul>
            <button onClick={addItem}>Add Item</button>
        </>
    );
}