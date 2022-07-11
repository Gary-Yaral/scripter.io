import { Tag } from "../../libs/Tag.js";

// Create a global container
let tagContainer = new Tag("div")
tagContainer.setClasses("container-dashboard")
let Container = tagContainer.getTag()


export { Container }