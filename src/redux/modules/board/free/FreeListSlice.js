import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFreeList } from "../../../../api/board/free/FreeListApi";

// createAsyncThunk : 비동기 처리를 도와주는 함수
// params : action 호출 시 전단되는 파라미터
// rejectWithValue : 오류 발생 시 사용자가 정의한 오류값을 반환
export const fetchFreeList = createAsyncThunk(
    "getFreeList",
    async (params, { rejectWithValue }) => {
        try {
            const response = await getFreeList(params);
            return response;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

const initialState = {
    // Server에서 사용할 상태(변수) 정의하는 공간
    list: [],
    row: 0,
    pi: {},
    loading: false,
    error: null
}

const freeListSlice = createSlice({
    name: "freeList",
    initialState,
    reducers: {},  
    // 비동기 작업의 상태에 따라서 추가적인 동작을 수행할 리듀서를 사용 가능 
    extraReducers: (builder) => {
        builder
            // pending : 작업이 완료되지 않은 상태
            .addCase(fetchFreeList.pending, (state) => { 
                state.loading = true;
                state.error = null;
            })
            // fulfilled : 작업이 성공한 상태
            .addCase(fetchFreeList.fulfilled, (state, action) => {
                state.list = action.payload.list;
                state.row = action.payload.row;
                state.pi = action.payload.pi;
                state.loading = false;
            })
            .addCase(fetchFreeList.rejected, (state, action) => {
                state.loading = true;
                state.error = action.payload;
            })
    },
});

export default freeListSlice.reducer;