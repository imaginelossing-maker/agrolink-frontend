import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Loader from "../components/loader";
import { register, login } from "../utills/fn";
import { TokenDispatchContext } from "../context/TokenContext";
export default function Login() {

const tokenDispatch = useContext(TokenDispatchContext);
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState("buyer");
  const [authMode, setAuthMode] = useState("login");

  const [registerData, setRegisterData] = useState({
    fullname: "",
    password: "",
    email: "",
  });
  const [isloading, setIsloading] = useState(false);
 async function handleSubmit(e) {
    e.preventDefault();

    try {
        setIsloading(true);

        let res;

        if (authMode === "signup") {

            res = await register({
                ...registerData,
                role: selectedRole
            });

            if (res) {
                alert("Account created successfully. Please login");

                // switch back to login
                setAuthMode("login");

                // clear fields
                setRegisterData({
                    fullname: "",
                    email: "",
                    password: "",
                });

                return;
            }

        } else {

            res = await login(registerData);

            if (res?.token) {

                tokenDispatch({
                    type: "loggedIn",
                    payload: res.token
                });

                // Navigate by selected role
                if (selectedRole === "buyer") {
                    navigate("/buyer-dashboard");
                } else {
                    navigate("/seller-dashboard");
                }
            }
        }

    } catch (error) {
        console.error(error);
        alert(error.message || "Something went wrong");

    } finally {
        setIsloading(false);
    }
  }
}