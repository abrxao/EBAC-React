import React from "react";
import TextInput from "../TextInput";
import NumberInput from "../NumberInput";
import RadioInput from "../RadioInput";
import OptionsInput from "../OptionsInput";
import DocumentArea from "../DocumentArea";
import ModalErro from "../ModalErro";
import AnswersArea from "../AnswersArea";
import ModalAnswer from "../AnswersArea/ModalAnswer";
import axios from "axios";
import validCPF from "../../utils/validCPF";
import validCNPJ from "../../utils/validCNPJ";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: "",
      genders: ["Male", "Feminine", "Others"],
      maritalStatus: ["", "Married", "Single", "Divorced", "Widowed"],
      answers: {
        name: {
          value: "",
          area: "Name",
        },
        age: {
          value: "",
          area: "Age",
        },
        gender: {
          value: "",
          area: "Gender",
        },
        maritalStatus: {
          value: "",
          area: "",
        },
        document: {
          area: "CPF2",
          type: "",
          number: "",
        },
      },
      results: [],
      status: true,
    };
  }

  async handleSend() {
    await axios({
      method: "post",
      url: "/api/send_answers",
      data: {
        name: this.state.answers.name.value,
        age: this.state.answers.age.value,
        gender: this.state.answers.gender.value,
        maritalStatus: this.state.answers.maritalStatus.value ?? null,
        documentType: this.state.answers.document.type ?? null,
        documentNumber: this.state.answers.document.number ?? null,
      },
    });
    this.handleRefresh()
  }

  async handleRefresh() {
    const { data } = await axios({
      method: "get",
      url: "/api/get_docs"
    });
    this.setState({
      ...this.state,
      results: data
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      status: false,
    });
    const erroCamps = [];
    const answers = this.state.answers;
    const invalids = document.querySelectorAll(".invalid");
    invalids.forEach((e) => {
      e.classList.remove("invalid");
    });

    if (answers.document.type === "CPF") {
      validCPF(answers.document.number) ? "" : erroCamps.push(answers.document);
    } else if (answers.document.type === "CNPJ") {
      validCNPJ(answers.document.number)
        ? ""
        : erroCamps.push(answers.document);
    }

    if (!answers.gender.value) {
      erroCamps.push(answers.gender);
    }

    if (
      parseFloat(answers.age.value) < 0 ||
      parseFloat(answers.age.value) > 125
    ) {
      erroCamps.push(answers.age);
    }

    if (answers.name.value.length < 4) {
      erroCamps.push(answers.name);
    }

    erroCamps.forEach((elem) => {
      const area = document.querySelector(`#${elem.area}`);
      area.classList.add("invalid");
    });

    if (erroCamps.length > 0) {
      this.setState({
        ...this.state,
        modal: "visible",
      });
      setTimeout(() => {
        this.setState({
          ...this.state,
          modal: "",
        });
      }, 4000);
    } else {
      this.setState({
        ...this.state,
        status: true,
      });
      this.handleSend();

      this.setState({
        ...this.state,
        answers: {
          name: {
            value: "",
            area: "Name",
          },
          age: {
            value: "",
            area: "Age",
          },
          gender: {
            value: "",
            area: "Gender",
          },
          maritalStatus: {
            value: "",
            area: "",
          },
          document: {
            area: "CPF2",
            type: "",
            number: "",
          },
        },
      });

      const inputs = document.querySelectorAll("input");
      const option = document.querySelector("option");

      option.selected = true;

      inputs.forEach((input) => {
        input.value = "";
        if (input.checked) {
          input.checked = false;
        }
      });
    }
  }

  render() {
    return (
      <div className="webApp">
        <div className="Form">
          <form>
            <div className="Form__title">
              <h1>FORMS</h1>
              <span></span>
            </div>

            <TextInput
              name="Name"
              id="Name"
              className="Form__TextInput"
              onChange={(e) =>
                this.setState({
                  ...this.state,
                  answers: {
                    ...this.state.answers,
                    name: {
                      ...this.state.answers.name,
                      value: e.target.value,
                    },
                  },
                })
              }
            />

            <NumberInput
              name="Age"
              id="Age"
              required={true}
              className="Form__NumberInput"
              onChange={(e) =>
                this.setState({
                  answers: {
                    ...this.state.answers,
                    age: {
                      ...this.state.answers.age,
                      value: e.target.value,
                    },
                  },
                })
              }
            />

            <RadioInput
              name="Gender *"
              id="Gender"
              erro=""
              required={true}
              options={this.state.genders}
              className="Form__RadioBox"
              onChange={(e) =>
                this.setState({
                  answers: {
                    ...this.state.answers,
                    gender: {
                      ...this.state.answers,
                      value: e.target.value,
                    },
                  },
                })
              }
            />

            <OptionsInput
              options={this.state.maritalStatus}
              name="Marital Status"
              className="Form__OptionsInput"
              onChange={(e) => {
                this.setState({
                  ...this.state,
                  answers: {
                    ...this.state.answers,
                    maritalStatus: { value: e.target.value },
                  },
                });
              }}
            />

            <DocumentArea
              erro=""
              id="CPF"
              name="Document Type"
              className="Form__DocumentArea"
              onChange={(e) =>
                this.setState({
                  ...this.state,
                  answers: {
                    ...this.state.answers,
                    document: {
                      ...this.state.answers.document,
                      type: e.target.value,
                    },
                  },
                })
              }
              onKeyDown={(e) =>
                this.setState({
                  ...this.state,
                  answers: {
                    ...this.state.answers,
                    document: {
                      ...this.state.answers.document,
                      number: e.target.value,
                    },
                  },
                })
              }
            />

            <button
              className="Form__submitBtn"
              type="submit"
              onClick={(e) => this.handleSubmit(e)}
            >
              SEND
            </button>

            <ModalErro visible={this.state.modal} />
          </form>
        </div>
        {this.state.status && (
          <AnswersArea className="answersArea" results={this.state.results} />
        )}
        {<ModalAnswer></ModalAnswer>}
      </div>
    );
  }
}

export default Form;
