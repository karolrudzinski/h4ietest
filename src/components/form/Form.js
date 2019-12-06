import React from "react";
import styles from "./form.module.less";
import Input from "../input/Input";
import Button from "../button/Button";
import Mailchimp from "react-mailchimp-form";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Form = ({ status, message, onValidated, inputValue }) => {
  let email, name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value
    });

  return (
    <div
      style={{
        background: "#efefef",
        borderRadius: 2,
        padding: 10,
        display: "inline-block"
      }}
    >
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (name = node)}
        type="text"
        placeholder="Your name"
      />
      <br />
      <input
        style={{ fontSize: "2em", padding: 5 }}
        ref={node => (email = node)}
        type="email"
        placeholder="Your email"
      />
      <br />
      <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
        Submit
      </button>
    </div>
  );
};

// export default class Form extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isValidated: false };
//   }

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     const form = e.target;
//     const data = {
//       name: this.state.name,
//       companyName: this.state.company,
//       emailAddress: this.state.email,
//       message: this.state.message
//     };

//     const dataJson = JSON.stringify(data);

//     fetch(
//       "https://bccq2kq7i2.execute-api.eu-west-2.amazonaws.com/production/send",
//       {
//         method: "POST",
//         body: dataJson
//       }
//     )
//       .then(() => {
//         this.setState({ name: "", company: "", email: "", message: "" });
//         alert("Mail sent!");
//       })
//       .catch(error => alert(error));
//   };

//   render() {
//     return (
//       <form
//         name="contactForm"
//         method="POST"
//         action="/contact/thanks/"
//         className={styles.form}
//         onSubmit={this.handleSubmit}
//       >
//         <input type="hidden" onChange={this.handleChange} />
//         <input type="hidden" name="form-name" value="contactForm" />

//         <Input
//           labelText="Your email"
//           placeholder="So we can contact you..."
//           name={"email"}
//           id={"email"}
//           type="email"
//           value={this.state.email}
//           onChange={this.handleChange}
//         ></Input>

//         <Input
//           tag="textarea"
//           name={"message"}
//           onChange={this.handleChange}
//           id={"message"}
//           styleType="textarea"
//           labelText="Tell us a little bit more (optional)"
//           value={this.state.message}
//           placeholder="So we can know more about what you need..."
//         ></Input>

//         <p className={styles.ppText}>
//           Hype4 needs the contact information you provide to us to contact you
//           about our products and services. You may unsubscribe from these
//           communications at anytime. For information on how to unsubscribe, as
//           well as our privacy practices and commitment to protecting your
//           privacy, check out our{" "}
//           <a class={styles.ppLink} href="/">
//             Privacy Policy
//           </a>
//         </p>

//         <Button>Send</Button>
//       </form>
//     );
//   }
// }
