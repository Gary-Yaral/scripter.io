import { fetchApi } from "../../libs/fetchApi.js";
import { Tag } from "../../libs/Tag.js";

// Create a global container
let tagContainer = new Tag("div")
tagContainer.setClasses("index-container")
let Container = tagContainer.getTag()

window.onload = async () => {
    // Read data from server
    let data = await fetchApi("src/controllers/test.php")
    
    let UlTag = new Tag("ul")
    UlTag.setClasses("tag-ul")
    UlTag.setAttr({id: "names-ul"})
    UlTag = UlTag.getTag()

    data.forEach((element, index) => {
        let LiTag = new Tag("li")
        LiTag.setAttr({
            id: "li-"+index
        })
        LiTag.setText(element)
        UlTag.appendChild(LiTag.getTag())
    });

    let H1Tag = new Tag("h1")
    H1Tag.setText("Lista de nombres")
    H1Tag = H1Tag.getTag()
    Container.appendChild(H1Tag)
    Container.appendChild(UlTag)
}

export { Container }