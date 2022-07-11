import { rewriteHeaderLinks } from "../../libs/rewriteHeaderLinks.js"
import { Tag } from "../../libs/Tag.js"

import { Container } from "../../components/Index/index.js"
let app = document.querySelector("#app") 
let cssLink = new Tag('link')
cssLink.setAttr({
    "data-id": "index",
    rel: "stylesheet",
    href: "src/components/Index/style.css"
})

rewriteHeaderLinks("Index | App", [cssLink.getTag()])
app.appendChild(Container)


