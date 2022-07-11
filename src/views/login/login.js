import { rewriteHeaderLinks } from "../../libs/rewriteHeaderLinks.js"

import { Container } from "../../components/FormLogin/FormLogin.js"
import { Tag } from "../../libs/Tag.js"
let app = document.querySelector("#app") 
let cssLink = new Tag('link')
cssLink.setAttr({
    "data-id": "login",
    rel: "stylesheet",
    href: "src/components/FormLogin/style.css"
})

rewriteHeaderLinks("Login | App", [cssLink.getTag()])
app.appendChild(Container)


