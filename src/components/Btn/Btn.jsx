import { Button } from './Btn.styled';

const Btn = ({ text, onClick, disabled, type }) => {
  return (
    <Button type={type} onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};

export default Btn;
