import { Tag } from "./Tag.js"

function rewriteHeaderLinks(title, newLinks = []){ 
    let head = document.querySelector("head")
    let headerTitle = head.querySelector("title") 
    let links = head.querySelectorAll("link") 
    head.removeChild(headerTitle)
    links.forEach(link => {
        if(link.dataset.id !== "app"){
            head.removeChild(link)
        }
    })

    newLinks.forEach(link => {
        head.appendChild(link)
    })

    let newTitle = new Tag("title")
    newTitle.setText(title)
    head.append(newTitle.getTag())

}

export {rewriteHeaderLinks}
