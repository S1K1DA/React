import Header from "../../common/Header";
import Nav from "../../common/Nav";
import { useEffect, useState } from "react";
import { fetchFreeList } from "../../../redux/modules/board/free/FreeListSlice";
import { useDispatch } from "react-redux";
import {  useLocation } from "react-router-dom";

import Pagination from "../common/Pagination";
import PostList from "../common/PostList";
import SearchBar from "../common/SearchBar";


export default function FreeList() {
  // 처음 DOM이 렌더링 될 때 딱 1번만 실행할 수 있도록 도와주는 리액트 훅
  // useEffect(() => {
  //   const fetchList = () => {
  //     try {
  //       const getList = getFreeList();
  //       console.log(getList);
  //     } catch (err) {
  //       console.log("Axios Failed : " + err);
  //     }
  //   };

  //   fetchList();
  // });

  // 상태를 변경하기 위한 함수 = 리듀서
  const dispatch = useDispatch();


  const [ selectCategory, setSelectCategory] = useState("fb_title");
  const [ searchText, setSearchText] = useState("");

  // 쿼리스트링을 포함한 URL 정보 불러오는 함수
  const location = useLocation();

  // DOM 렌더링될 때 최초 한번 실행할 리액트 훅
  useEffect(() => {
    // URLSearchParams : URL에 관련된 정보를 좀 더 편하게 사용할 수 있도록 도와주는 함수
    const params = new URLSearchParams(location.search);

    // 쿼리스트링에 cpage가 없으면 1
    const cpage = params.get("cpage") || 1;
    const category = params.get("category") || "fb_title";
    const searchTextParam = params.get("searchText") || "";

    setSelectCategory(category);
    setSearchText(searchTextParam);


    dispatch(
      fetchFreeList({
        cpage: parseInt(cpage),
        category: selectCategory,
        searchText: searchText,
      })
    );
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(
      fetchFreeList({
        cpage: 1,
        category: selectCategory,
        searchText: searchText,
      })
    );
  };

  const handlePageButton = (cpage) => {
    dispatch(
      fetchFreeList({
        cpage: cpage,
        category: selectCategory,
        searchText: searchText,
      })
    );
  };

    return (

<>
<Header />
<Nav />
  <section style={{ height: "70vh" }}>
    <h1>자유 게시판</h1>
    <hr />
    <SearchBar 
    selectCategory={setSelectCategory}
    setSelectCategory={setSelectCategory}
    setSearchText={setSearchText}
    handleSearch={handleSearch} />
    <PostList />
    <Pagination handlePageButton={handlePageButton} />
  </section>
</>


    )
}