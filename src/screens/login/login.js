import "../../App.css";
import React, { useState, useEffect } from "react";
import ModalComponent from "../../components/modal-component";
import authService from "../../services/auth-service";
import infoService from "../../services/info-service";
import { LOGIN } from "../../utils/ConstantValues";
import AccordionComponent from "../../components/Accordion-component";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import PageLoader from "../../components/page-loader";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import MessageBox from "../../components/messageBox-component";
import { australianPhonenumberRegex } from "../../utils/ConstantValues";

const Login = () => {
  let subtitle;
  const navigate = useNavigate();
  const [info, setInfo] = useState({});
  const [state, setState] = useState({
    data: { mobile: "" },
    errors: {},
  });
  const [show, setShow] = useState(false);
  const ausPhoneValidation = (value) => {
    const regex = new RegExp(australianPhonenumberRegex);
    return regex.test(value);
  };
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
    const errorMessage = ausPhoneValidation(input.value);
    if (!errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...state.data };
    data[input.name] = input.value;

    setState({ data, errors });
  };
  const loginUser = async () => {
     const result = await authService.login(state.data.mobile);
    if (result.data.validation) {
      if (result.data.isExist) {
        navigate("/home");
        toast.success(
          <MessageBox
            title="Hi user"
            message=""
            linkText={result.data.message}
            link="/home"
          />
        );
      } else {
        toast.error(LOGIN.MOBILE_NOT_EXIST);
      }
    } else {
      toast.error(LOGIN.MOBILE_FORMAT_NOT_VALID);
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
                <img src={info.data.image} width="40px" height="40px" alt="logo" />
              </div>
              <p className="login-title">{info.data.title}</p>
              <div className="login-summary">
                <p>{info.data.summary}</p>
              </div>
              <br />
              {info.data.fields.map((f, index) => (
                <div id={`field-${index}`} className="login-input-container">
                  <input
                    className="login-input"
                    onChange={(event) => handleChange(event)}
                    name={f.fieldName}
                    placeholder={f.placeHolder}
                  />
                   {f.isRequired && !state.data.mobile && (
                    <div style={{ color: "red" }}>Phone number is required</div>
                  )}
                  {state.errors && JSON.stringify(state.errors.mobile) && (
                    <div style={{ color: "red" }}>Invalid phone number</div>
                  )}
                </div>
              ))}
              <div className="login-button-container">           
                <button className="login-button" disabled={!state.data.mobile || (state.errors && JSON.stringify(state.errors.mobile))} onClick={() => loginUser()}>
                  SMS me link{state.errors && JSON.stringify(state.errors.mobile)}
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
                    <AccordionComponent accordionInfo={h.modalInfo.accordionInfo}/>
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
