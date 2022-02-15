import { Button } from './Btn.styled';

const Btn = ({ text, onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};

export default Btn;
