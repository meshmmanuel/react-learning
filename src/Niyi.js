import Button from "./component/Button";
import EmailInput from "./component/EmailInput";

// React Component
function Niyi() {
  return (
    <div>
      <h1>Niyi</h1>
      <EmailInput />
      <Button textColor="red" niyi="blue"/>
      <Button textColor="white" niyi="green"/>
      <Button textColor="pink" niyi="darkblue"/>
    </div>
  );
}

export default Niyi;
