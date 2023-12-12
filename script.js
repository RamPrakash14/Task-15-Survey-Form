//!Creating div elements and h1 for heading

const div = document.createElement("div")
div.setAttribute("class","heading")
const h1 = document.createElement("h1")
h1.setAttribute("id","title")
h1.innerText = "Day 15 Task - Survey Form";
div.append(h1);

//!creating p elements for paragraph

const p = document.createElement("p")
p.setAttribute("id","description")
p.innerText= "This Survey form gets the values from the user and display  it in table "
div.append(p)
document.body.append(div)

//!creating the form elements using id 
const form = document.createElement("form")
form.setAttribute("id","survey form")
form.setAttribute("class","surveyform")

const container = document.createElement("div")
container.setAttribute("class","form-group")

//!creating first name and  input form 
const firstNameLabel = document.createElement("label")
firstNameLabel.setAttribute("id","name-label")
firstNameLabel.innerText = "First-Name : ";
const firstNameInput = document.createElement("input");
firstNameInput.setAttribute("type", "text");
firstNameInput.setAttribute("id", "first-name");
firstNameInput.setAttribute("placeholder", "First-Name");
firstNameInput.required = true;
container.append(firstNameLabel, firstNameInput);

//!creating lastname and input form

const lastNameLabel = document.createElement("label")
lastNameLabel.setAttribute("id","name-label")
lastNameLabel.innerText="Last-Name :";
const lastNameInput = document.createElement("input");
lastNameInput.setAttribute("type","text")
lastNameInput.setAttribute("id","last-name");
lastNameInput.setAttribute("placeholder", "Last-Name");
lastNameInput.required=true;
container.append(lastNameLabel, lastNameInput);

//!creating Email and input form

const emailLabel = document.createElement("label")
emailLabel.setAttribute("id","name-label")
emailLabel.innerText="Email: ";
const emailInput =document.createElement("input")
emailInput.setAttribute("type","text")
emailInput.setAttribute("id","email")
emailInput.setAttribute("placeholder","E-mail");
emailInput.required=true;
container.append(emailLabel, emailInput);

//!creating  Address and input form

const addressLabel = document.createElement("label")
addressLabel.setAttribute("id","name-label")
addressLabel.innerText="Address:";
const addressInput = document.createElement("input")
addressInput.setAttribute("type","text")
addressInput.setAttribute("id","address")
addressInput.setAttribute("placeholder","Address")
addressInput.required=true;
container.append(addressLabel,addressInput)

//! Creating Pincode and input form

const pincodeLabel = document.createElement("label")
pincodeLabel.setAttribute("id","name-label")
pincodeLabel.innerText="pincode:";
const pincodeInput =document.createElement("input")
pincodeInput.setAttribute("type","text")
pincodeInput.setAttribute("id","address")
pincodeInput.setAttribute("placeholder","Pincode")
pincodeInput.required=true;
container.append(pincodeLabel,pincodeInput);

//!creating gender Label and input form

const genderLabel = document.createElement("label")
genderLabel.innerText="Gender"

const maleLabel = document.createElement("label");
maleLabel.innerText = "Male";
const maleInput = document.createElement("input");
maleInput.setAttribute("type", "radio");
maleInput.setAttribute("id", "male");
maleInput.setAttribute("value", "male");
maleInput.setAttribute("name", "gender");
maleInput.required = true;
genderLabel.append(maleLabel, maleInput);

const femaleLabel = document.createElement("label")
femaleLabel.innerText = "Female";
const femaleInput = document.createElement("input");
femaleInput.setAttribute("type","radio")
femaleInput.setAttribute("id","female")
femaleInput.setAttribute("value","female")
femaleInput.setAttribute("name","gender")
femaleInput.required =true;
genderLabel.append(femaleLabel,femaleInput);
container.append(genderLabel)

//!creating foodLabel and input form
const foodLabel = document.createElement("label");
foodLabel.innerText = "Choice of Food : ";
foodLabel.setAttribute("id", "foodLabel");

const food1Label = document.createElement("label")
food1Label.innerText="Pizza"
const food1Input = document.createElement("input")
food1Input.setAttribute("type","checkbox")
food1Input.setAttribute("id","food1")
food1Input.setAttribute("value", "Pizza");
food1Input.setAttribute("name", "food");
container.append(food1Label, food1Input);

const food2Label = document.createElement("label")
food2Label.innerText="Burger"
const food2Input = document.createElement("input")
food2Input.setAttribute("type","checkbox")
food2Input.setAttribute("id","food2")
food2Input.setAttribute("value", "Burger");
food2Input.setAttribute("name","food")
container.append(food2Label,food2Input);

const food3Label =document.createElement("label")
food3Label.innerText="Waffle"
const food3Input = document.createElement("input")
food3Input.setAttribute("type","checkbox")
food3Input.setAttribute("id","food3")
food3Input.setAttribute("value", "Waffle");
food3Input.setAttribute("name", "food");
container.append(food3Label, food3Input);

const food4Label =document.createElement("label")
food4Label.innerText="Donut"
const food4Input = document.createElement("input")
food4Input.setAttribute("type","checkbox")
food4Input.setAttribute("id","food4")
food4Input.setAttribute("value", "donut");
food4Input.setAttribute("name", "food");
container.append(food4Label, food4Input);

const food5Label =document.createElement("label")
food5Label.innerText="Tea"
const food5Input = document.createElement("input")
food5Input.setAttribute("type","checkbox")
food5Input.setAttribute("id","food5")
food5Input.setAttribute("value", "Donut");
food5Input.setAttribute("name", "food");
container.append(food5Label, food5Input);

//!creating state and input form

const stateLabel = document.createElement("label")
stateLabel.setAttribute("id","name-label")
stateLabel.innerText="State:";
const stateInput =document.createElement("input")
stateInput.setAttribute("type","text")
stateInput.setAttribute("id","address")
stateInput.setAttribute("placeholder","State")
stateInput.required=true;
container.append(stateLabel,stateInput);

//creating country and input form
const countryLabel = document.createElement("label");
countryLabel.innerText = "Country : ";
const countryInput = document.createElement("input");
countryInput.setAttribute("type", "text");
countryInput.setAttribute("id", "country");
countryInput.setAttribute("placeholder", "Country");
countryInput.required = true;
container.append(countryLabel, countryInput);

//! Creating the Comments label and inputs for form
const commentsLabel = document.createElement("label");
commentsLabel.innerText = "Additional Comments : ";
const commentsTextArea = document.createElement("textarea");
commentsTextArea.setAttribute("id", "comments");
container.append(commentsLabel, commentsTextArea);

//!creating  table

const table = document.createElement("table")
table.setAttribute("id","table-data")
const thead = document.createElement("thead")
const trow = document.createElement("tr")

//!creating heading table

const th1 = document.createElement("th")
th1.innerText ="FirstName"

const th2 = document.createElement("th")
th2.innerText="LastName"

const th3 = document.createElement("th")
th3.innerText="Gender"

const th4 = document.createElement("th")
th4.innerText="Food"

const th5 = document.createElement("th")
th5.innerText="Address"

const th6 = document.createElement("th")
th6.innerText="Pincode"

const th7 = document.createElement("th")
th7.innerText="State"

const th8 = document.createElement("th")
th8.innerText="Country"

trow.append(th1, th2, th3, th4, th5, th6, th7, th8);
thead.append(trow);
table.append(thead);

//! Creating the table Body
const tbody = document.createElement("tbody");
tbody.setAttribute("id", "table-body");

const submitButton = document.createElement("button");
submitButton.innerText = "Submit";
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("class", "btn btn-primary");
submitButton.setAttribute("id", "submit");
container.append(submitButton);
form.append(container);
document.body.append(form);
//! Submit form action
form.addEventListener("submit", (event) => {
  event.preventDefault();

  //! Getting the values from form by ID
  let firstNameInput = document.getElementById("first-name");
  let lastNameInput = document.getElementById("last-name");
  let emailInput = document.getElementById("email");
  let addressInput = document.getElementById("address");
  let pincodeInput = document.getElementById("pincode");
  let genderInputs = document.getElementsByName("gender");
  let foodChoiceInputs = document.querySelectorAll(
    'input[name="food"]:checked'
  );
  let stateInput = document.getElementById("state");
  let countryInput = document.getElementById("country");
  let comments = document.getElementById("comments");

  let firstName = firstNameInput.value;
  let lastName = lastNameInput.value;
  let address = addressInput.value;
  let pincode = pincodeInput.value;
  let gender = getSelectedRadioValue(genderInputs);
  let foodChoices = Array.from(foodChoiceInputs)
    .map((checkbox) => checkbox.value)
    .join(", ");
  let state = stateInput.value;
  let country = countryInput.value;

  //! Creating a new row in the table
  let table = document.getElementById("tableData");
  let tbody = document.getElementById("table-body");
  let newRow = table.insertRow(table.rows.length);

  //! Inserting the values in the row
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);
  let cell6 = newRow.insertCell(5);
  let cell7 = newRow.insertCell(6);
  let cell8 = newRow.insertCell(7);

  cell1.innerHTML = firstName;
  cell2.innerHTML = lastName;
  cell3.innerHTML = address;
  cell4.innerHTML = pincode;
  cell5.innerHTML = gender;
  cell6.innerHTML = foodChoices;
  cell7.innerHTML = state;
  cell8.innerHTML = country;
  newRow.append(cell1, cell2, cell3, cell4, cell5, cell6, cell8);

  //! Making the values as null
  firstNameInput.value = "";
  lastNameInput.value = "";
  addressInput.value = "";
  emailInput.value = "";
  pincodeInput.value = "";
  resetRadioButtons(genderInputs);
  resetCheckBoxes(foodChoiceInputs);
  stateInput.value = "";
  countryInput.value = "";
  comments.value = "";
  tbody.append(newRow);
  table.append(tbody);
});

//! function to get the value of the selected radio button
function getSelectedRadioValue(radioInputs) {
  for (let i = 0; i < radioInputs.length; i++) {
    if (radioInputs[i].checked) {
      return radioInputs[i].value;
    }
  }
  return null;
}

//! function to reset radio buttons
function resetRadioButtons(radioInputs) {
  for (let i = 0; i < radioInputs.length; i++) {
    radioInputs[i].checked = false;
  }
}
function resetCheckBoxes(checkboxInputs) {
  checkboxInputs.forEach((checkbox) => (checkbox.checked = false));
}

document.body.append(table);




















