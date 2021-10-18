const Number = ({ text, actionOnClick }) => {
  return (
    <div className="number" onClick={actionOnClick}>
      {text}
    </div>
  );
};

export default Number;
