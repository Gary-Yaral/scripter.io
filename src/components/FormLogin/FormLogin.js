import { Tag } from "../../libs/Tag.js";

// Create form
let form= new Tag("form")
form.setClasses("form-control")

// Create input username
let tagName = new Tag("input")
tagName.setClasses("input-username")
tagName.setAttr({
    placeholder: "username",
    name: "username",
    id: "username"
})

let inputName = tagName.getTag()

// Create input password
let tagPassword = new Tag("input")
tagPassword.setClasses("input-password")
tagPassword.setAttr({
    placeholder: "password",
    name: "password",
    id: "password"
})
let inputPassword = tagPassword.getTag()

// Create button submit
let tagSubmit = new Tag("input")
tagSubmit.setClasses("btn-submit")
tagSubmit.setAttr({
    value:"Acceder",
    type:"submit"
})

let inputSubmit = tagSubmit.getTag()

// Insert inputs in form
let FormLogin = form.getTag()
FormLogin.appendChild(inputName)
FormLogin.appendChild(inputPassword)
FormLogin.appendChild(inputSubmit)

// Create a global container
let tagContainer = new Tag("div")
tagContainer.setClasses("container-login")
let Container = tagContainer.getTag()

// Add form to global container
Container.appendChild(FormLogin)

export { Container }