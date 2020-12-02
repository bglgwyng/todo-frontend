// 액션 타입
const SETISMODAL = 'deleteCard/SETISMODAL';
const SETISDELETECARD = 'deleteCard/SETISDELETECARD';
const SETDELETECARDID = 'deleteCard/SETDELETECARDID';

// 액션 생성 함수
export const changeIsModal = (payload) => ({type: SETISMODAL, payload: payload});
export const changeIsDeleteCard = (payload) => ({type: SETISDELETECARD, payload: payload});
export const changeDeleteCardId = (id) => ({type: SETDELETECARDID, payload: id});

// 초기 상태값
const initialState = {
    isModal: false,
    isDeleteCard: false,
    deleteCardId : 0
};

// 리듀서
const deleteCard = (state = initialState, action) => {
    switch (action.type) {
        case SETISMODAL:
            return {
                ...state,
                isModal: action.payload
            };
        case SETISDELETECARD:
            return {
                ...state,
                isDeleteCard: action.payload
            };
        case SETDELETECARDID:
            return {
                ...state,
                deleteCardId: action.payload
            };
        default:
            return state;
    }
};

export default deleteCard;