import React from "react";
import s from './welcome.module.scss'
import {logo} from "../assets/index.js";

export const Welcome = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.wrapper_welcome}>
                <img src={logo}/>
                <div className={s.wrapper_name}>
                <p><span className="text-[#915eff]">U</span>nfolding the &nbsp;<span className="text-[#915eff]">U</span>niverse</p>
                <p className={s.wrapper_name__subtitle}><span>T</span>echnological &nbsp;<span>T</span>ranscendence</p>
                </div>
            </div>
        </div>
    )
}