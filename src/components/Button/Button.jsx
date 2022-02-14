import { Btn } from './Button.styled';

const Button = ({ text, onClick, disabled }) => {
  return (
    <Btn onClick={onClick} disabled={disabled}>
      {text}
    </Btn>
  );
};

export default Button;
