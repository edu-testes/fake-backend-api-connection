import {useState, ChangeEvent, FormEvent} from "react";
import Button from "../Button/Button.tsx";
import "./UserForm.css";
import { RegData } from "../../types/registration/RegData.ts";

type UserFormProps = {
  reqType: string,
  sendData: (registrationData:RegData) => void,
}

export default function UserForm(props: UserFormProps) {
  const [formDataObject, setFormDataObject] = useState({
    email: "",
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

  function clearForm() {
    setFormDataObject({
      email: "",
      password: "",
      "remember-me": false
    });
  }

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    props.sendData(formDataObject);
    clearForm();
  }

  return (
    <form action="#" className="login-form" onSubmit={handleFormSubmit}>
      <div className="login-form--container">
        <div className="login-form__input">
          <label htmlFor="login">
            <span>*</span>Username:
          </label>
          <input type="text" name="email" id="email" value={formDataObject.email} onChange={handleChange}/>
        </div>
        <div className="login-form__input">
          <label htmlFor="password">
            <span>*</span>Password:
          </label>
          <input type="text" name="password" id="password" value={formDataObject.password} onChange={handleChange}/>
        </div>
        <div className="login-form__checkbox">
          <input type="checkbox" id="rememberme" name="remember-me" checked={formDataObject["remember-me"]} onChange={handleChange}/>
          <span className="checkbox-span">Remember me</span>
        </div>
        <div>
          <Button typeButton="submit"/>
        </div>
      </div>
    </form>
  );
}
