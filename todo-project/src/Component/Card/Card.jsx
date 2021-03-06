import React from 'react';
import './Card.scss';
import {BsCardChecklist} from 'react-icons/bs';
import {ImCancelCircle} from 'react-icons/im';

const Card = ({cardInfo, userInfo, setIsModal, setDeleteCardId}) => {
    const handleClickCardDelBtn = () => {
        setIsModal(true);
        setDeleteCardId(cardInfo.id);
    }

    return (
        <div className="card-section">
            <div className="card-wrapper">
                <div className="card-header-wrapper">
                    <div className="header-left-wrapper">
                        <div className="icon"><BsCardChecklist/></div>
                        <span className="card-title">{cardInfo.title}</span>
                    </div>
                    <div className="btn card-del-btn" onClick={handleClickCardDelBtn}><ImCancelCircle/></div>
                </div>
                <p className="contents-wrapper">{cardInfo.contents}</p>
                <span className="writer-wrapper">Added by <span>{cardInfo.user_id}</span>
                                        <img src={userInfo.profile_image_url} alt="image"/></span>
            </div>
        </div>
    )
}

export default Card;