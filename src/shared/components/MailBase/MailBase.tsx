import { ReactElement } from "react";

const year = new Date().getFullYear();

const tableSettings = {
  width: "600px",
  margin: "0 auto",
};

const headerStyle = {
  font: "Roboto",
  fontSize: "20px",
  color: "#2e3131",
  marginBottom: "10px",
};

const textStyle = {
  font: "Open sans",
  fontSize: "13px",
  color: "#2e3131",
};

export const MailBase = (props: {
  name: string;
  emailadres: string;
  subject: string;
  message: string;
}): ReactElement => {
  return (
    <>
      <table style={tableSettings}>
        <tbody>
          <tr>
            <td
              style={{
                padding: "30px 69px 30px 69px",
                border: "1px solid #8d736c",
                backgroundColor: "#FFFFFF",
              }}
            >
              <table style={{ width: "100%" }}>
                <tbody>
                  <tr>
                    <td>
                      <div style={headerStyle}>
                        Contact via contactformulier
                      </div>
                      <p style={textStyle}>
                        Naam:{""}
                        {props.name}
                      </p>
                      <p style={textStyle}>
                        E-mail:{""}
                        {props.emailadres}
                      </p>
                      <p style={textStyle}>
                        Onderwerp:{""}
                        {props.subject}
                      </p>
                      <p style={textStyle}>
                        Bericht:{""}
                        {props.message}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      <table style={tableSettings}>
        <tbody>
          <tr>
            <td align="center" className="bottom-tekst">
              Rdewilde © <span>{year}</span> All rights reserved
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
