const Block = ({ style = {}, className = '', children }) => {
  return (
    <div className={`rounded-xl ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Block;
