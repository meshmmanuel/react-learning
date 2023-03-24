// React Component

function Button(props) {
    return (
      <div>
        <button style={{ 
            padding : "10px",
            backgroundColor: props.niyi,
            color: props.textColor,
            border:"none",
            borderRadius:"2px"
         }}>{props.name ?? 'Button'}</button>
      </div>
    );
  }
  
  export default Button;
  