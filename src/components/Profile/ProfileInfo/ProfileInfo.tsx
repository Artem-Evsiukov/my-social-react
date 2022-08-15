import React from 'react';
import s from "./ProfileInfo.module.css";


function ProfileInfo() {
    return (
        <div>
            <div className={s.profileImg}>
                <img src="https://img.fonwall.ru/o/2p/canada-moraine-lake-ozero-gory.jpg?route=mid&amp;h=750"
                     alt=""/>
            </div>
            <div className={s.wrap}>
                <div className={s.profileAva}>
                    <img src="https://picfiles.alphacoders.com/290/290520.jpg" alt=""/>
                </div>
                <div className={s.profileInfo}>
                    <span className={s.contentName}>Artem</span>
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo