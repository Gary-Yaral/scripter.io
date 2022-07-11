class Tag {
    dataTag = {
        name:"div",
        className: [],
        attrs: [],
        text: "",
    }

    constructor(tagName="div") {
        this.dataTag.name = tagName   
    }  

    setAttr(attrs = []){
        this.dataTag.attrs = attrs
    }

    setClasses(className=[]) {
        this.dataTag.className = className
    }

    setText(text="") {
        if(this.dataTag.name !=="input" && this.dataTag.name !== "select") {
            this.dataTag.text = text
        }
    }

    getTag() {
        return HTMLTag(this.dataTag).cloneNode(true)
    }

}

function HTMLTag(attributes) {
    let { className, attrs, text } = attributes
    let tag = document.createElement(attributes.name || "div")
    if(className) {
        let isArray = Array.isArray(className)
        let isText = typeof className === "string" ? true : false
        if(isArray) {
            className.forEach(name =>{
                tag.classList.add(name)
            })
        }

        if(isText) {
            tag.classList.add(className)
        }
    } 

    if(attrs) {
        let keys = Object.keys(attrs)
        keys.forEach(key => {
           tag.setAttribute(key, attrs[key])
        })
    } 

    tag.innerHTML = attributes.text || ""  
    return tag
}

export {Tag}