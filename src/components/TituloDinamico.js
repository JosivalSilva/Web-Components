class TituloDinamico extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode:"open"});

    //Base do componente
    const componentRoot = document.createElement("h1");
    componentRoot.textContent = this.getAttribute('titulo');
    //componentRoot.textContent = "teste";

    //Estilzação do componente
    const style = document.createElement("style");
    style.textContent = `
      h1 {
        color: red;
      }
    `

    //Enviando para a shadow
    shadow.appendChild(componentRoot);
    shadow.appendChild(style);
  }
}

customElements.define("titulo-dinamico", TituloDinamico);