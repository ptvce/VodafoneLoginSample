import "../../App.css";
import logo from "../../assets/images/128px-Vodafone_icon.svg.png";
import React, { useState, useEffect } from "react";
import ModalComponent from "../../components/modal-component";
import authService from "../../services/auth-service";
import infoService from "../../services/info-service";
import { LOGIN } from "../../utils/ConstantValues";
import AccordionHelp from "../../screens/login/components/accordion-help";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import PageLoader from "../../components/page-loader";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import MessageBox from "../../components/messageBox-component";

const Login = () => {
  let subtitle;
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [state, setState] = useState({
    data: { mobile: "", password: "" },
    errors: {},
  });
  const [show, setShow] = useState(false);

  useEffect(() => {
    infoService
      .getLoginFormInfo()
      .then((res) => setInfo(res))
      .catch((error) => toast.error(error));
  }, []);

  const afterOpenModal = () => {
    subtitle.style.color = "#808080";
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleOpen = () => {
    setShow(true);
  };
  const handleChange = ({ currentTarget: input }) => {
    const errors = { ...state.errors };
    // const errorMessage = validateProperty(input);
    //if (errorMessage) errors[input.name] = errorMessage;
    //else delete errors[input.name];

    const data = { ...state.data };
    data[input.name] = input.value;

    setState({ data, errors });
  };
  const loginUser = async () => {
    const result = await authService.login(state.data.mobile);
    if (result.data.status) {
      navigate("/home");
      toast.success(<MessageBox title="Hi user" message="" linkText={result.data.message} link="/home" />)
    }
  };

  const goToHome = () => {
    navigate("/home");
  };

  return info.data ? (
    <div>
      <div className="login-container">
        <div className="login-center-box">
          <div className="login-form-container">
            <div className="login-form">
              <div className="login-logo">
                <img src={logo} width="30px" height="30px" alt="logo" />
              </div>
              <p className="login-title">{info.data.title}</p>
              <div className="login-summary">
                <p>{info.data.summary}</p>
              </div>
              <br />
              <div className="login-input-container">
                <input
                  className="login-input"
                  onChange={(event) => handleChange(event)}
                  name="mobile"
                  placeholder={LOGIN.MOBILE}
                />
              </div>
              <div className="login-button-container">
                <button className="login-button" onClick={() => loginUser()}>
                  SMS me link
                </button>
              </div>
              {info.data.helps.map((h, index) => (
                <div id={`help-${index}`} className="login-link-container">
                  <div className="login-link-button" onClick={handleOpen}>
                    {h.title}
                  </div>
                  <ModalComponent
                    show={show}
                    handleClose={handleClose}
                    afterOpenModal={afterOpenModal}
                  >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                      {h.modalInfo.title}
                    </h2>
                    <p style={{ fontSize: "16px" }}>{h.modalInfo.summary}</p>
                    <AccordionHelp />
                  </ModalComponent>
                </div>
              ))}

              <div>
                <span className="line"></span>
              </div>
              <div className="login-button-container">
                <button
                  type="button"
                  className="login-submit-button"
                  onClick={goToHome}
                >
                  Vodafone home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <PageLoader />
  );
};

export default Login;
