import Button from "../../components/Button/Button.tsx";
import "./AuthPage.css";

export default function AuthPage() {
  return (
    <form action="#" className="login-form">
      <div className="login-form__input">
        <label htmlFor="">
          <span>*</span>Username:
        </label>
        <input type="text" name="" id="" />
      </div>
      <div className="login-form__input">
        <label htmlFor="">
          <span>*</span>Password:
        </label>
        <input type="text" name="" id="" />
      </div>
      <div className="login-form__checkbox">
        <input type="checkbox" id="" value="" />
        <span className="checkbox-span">Remember me</span>
      </div>
      <div>
        <Button />
      </div>
    </form>
  );
}
