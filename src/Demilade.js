
import Button from "./component/Button";
import EmailInput from "./component/EmailInput";

// React Component
function Demilade() {
    let name = 'Demilade'
  return (
    <div>
      <h1>Demilade</h1>
      <EmailInput/>
      <Button name={name} />
    </div>
  );
}

export default Demilade;
