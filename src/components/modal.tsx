import React, { useEffect, useState } from 'react';

import './modal.css';
import Modal from "../Modal";

interface ModalProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  /**
   * Etiqueta o nombre que se visualizara
   */
}

/**
 * Primary UI component for user interaction
 */
export const Modals = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ModalProps) => {
  const mode = primary ? 'btnPrimary1' : 'btnOutLine1';
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <button className={[`btnPrimary--${size}`, mode].join(' ')} onClick={() => setOpenModal(true)}>{label}</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};