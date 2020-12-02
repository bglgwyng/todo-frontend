// 액션 타입
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수
export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});

// 초기 상태값
const initialState = 0;

// 리듀서
const counter = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
};

export default counter;