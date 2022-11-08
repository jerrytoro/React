import { ImageNotSupported } from "@mui/icons-material";
import React, { useState } from "react";
import image from '../public/imagen.jpg';

const Modal = ({ open, onClose }) => {

    if (!open) return null

    return (
        <div onClick={onClose} className="overlay">
            <div onClick={(e) => { e.stopPropagation() }}
                className="modalContainer">
                
                <div className="modalContainerRight">
                    <button className="close" onClick={onClose}>X</button>
                    <div className="content">
                        <h1>Registrar Usuario</h1>
                        <input placeholder="User" type="text" />
                        <input placeholder="Password" type="password" />
                        <input placeholder="Email" type="email" />
                    </div>
                    <div className="buttonContainer">
                        <button onClick={onClose} className="btnPrimary">
                            <span className="bold">Close</span>
                        </button>
                        <button onClick={onClose} className="btnOutLine">
                            <span className="bold">Accept</span>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal