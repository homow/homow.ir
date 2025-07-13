export const createTagLink = href => {
    const style = document.createElement("link")
    style.setAttribute("rel", "stylesheet")
    style.setAttribute("href", href)
    return style
}

export const addStyle = href => {
    const styleTag = createTagLink(href);
    const head = document.querySelectorAll("head link[rel=stylesheet]")
    head[head.length - 1].insertAdjacentElement("afterend", styleTag);
}
