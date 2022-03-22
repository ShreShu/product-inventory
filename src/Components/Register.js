import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button } from "@mui/material";
import axios from "axios";
import "./Register.css";
const Register = () => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    location: "",
    mobile: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    console.log(prop, event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {};

  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/users", values)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(values);
  };

  return (
    <div className="registration-form">
      <form onSubmit={submitHandler}>
        <InputLabel htmlFor="standard-adornment-weight">Email</InputLabel>
        <Input
          id="email"
          value={values.email}
          onChange={handleChange("email")}
          aria-describedby="standard-weight-helper-text"
        />

        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
        <Input
          id="password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <InputLabel htmlFor="standard-adornment-weight">First Name</InputLabel>
        <Input
          id="first_name"
          value={values.first_name}
          onChange={handleChange("first_name")}
          aria-describedby="standard-weight-helper-text"
        />

        <InputLabel htmlFor="standard-adornment-weight">Last name</InputLabel>
        <Input
          id="last_name"
          value={values.last_name}
          onChange={handleChange("last_name")}
          aria-describedby="standard-weight-helper-text"
        />

        <InputLabel htmlFor="standard-adornment-weight">Location</InputLabel>
        <Input
          id="location"
          value={values.location}
          onChange={handleChange("location")}
          aria-describedby="standard-weight-helper-text"
        />
        <InputLabel htmlFor="standard-adornment-weight">
          Mobile number
        </InputLabel>
        <Input
          id="mobile"
          value={values.mobile}
          onChange={handleChange("mobile")}
          aria-describedby="standard-weight-helper-text"
        />
        <br />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Register;
