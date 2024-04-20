import {useState, ChangeEvent, FormEvent} from "react";
import Button from "../Button/Button.tsx";
import "./UserForm.css";

type UserFormProps = {
  reqType: string,
}

export default function UserForm(props: UserFormProps) {
  const [formDataObject, setFormDataObject] = useState({
    login: "",
    password: "",
    "remember-me": false
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === 'checkbox' ? checked : value;
    setFormDataObject({
      ...formDataObject,
      [name]: updatedValue,
    });
  };

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(formDataObject);
  }

  return (
    <form action="#" className="login-form" onSubmit={handleFormSubmit}>
      <div className="login-form--container">
        <div className="login-form__input">
          <label htmlFor="">
            <span>*</span>Username:
          </label>
          <input type="text" name="login" id="" onChange={handleChange}/>
        </div>
        <div className="login-form__input">
          <label htmlFor="">
            <span>*</span>Password:
          </label>
          <input type="text" name="password" id=""  onChange={handleChange}/>
        </div>
        <div className="login-form__checkbox">
          <input type="checkbox" id="" name="remember-me" value="" onChange={handleChange}/>
          <span className="checkbox-span">Remember me</span>
        </div>
        <div>
          <Button typeButton="submit"/>
        </div>
      </div>
    </form>
  );
}
