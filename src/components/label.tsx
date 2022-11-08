import {useState} from 'react';
import './label.css';

interface LabelProps {
  label: string;
  /**
   * Etiqueta o nombre que se visualizara
   */
}

/**
 * Primary UI component for user interaction
 */
export const Label = ({
  label,
  ...props
}: LabelProps) => {

    const [count,setCount]=useState(0);
  
  return (
    <label
      {...props}
    >
      {label} - {count}
      <button onClick={()=>setCount(count+1)}>Incrementar</button>
    </label>
  );
};