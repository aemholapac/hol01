export default async function decorate(block) {
    block.innerHTML = `<em> quote start == ${block.innerText} == quote end </em>`
}