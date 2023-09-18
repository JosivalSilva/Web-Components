class CardNews extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: "open"});
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "card_left");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonimous");

    const linkTitle = document.createElement("a");
    linkTitle.textContent = this.getAttribute("title");
    linkTitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linkTitle);
    cardLeft.appendChild(newsContent);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "card_right");

    const newsImage = document.createElement("img");
    newsImage.setAttribute("class", "img_width")
    newsImage.src = this.getAttribute("photo") || "assets/default-img.png";
    newsImage.alt = "Imagem do Darte Vader"
    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    .card {
      width: 80%;
      margin: 1rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      box-shadow: 4px 8px 13px 0px rgba(0,0,0,0.75);
      -webkit-box-shadow: 4px 8px 13px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 4px 8px 13px 0px rgba(0,0,0,0.75);
    }
    
    .card_left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 10px;
      padding-right: 10px;
    }
    
    .card_left > span {
      font-weight: 400;
      color: #707070;
    }
    
    .card_left > a {
      margin-top: 15px;
      font-size: 25px;
      color: #000;
      text-decoration: none;
      font-weight: 500;
    }
    
    .card_left > p {
      color: #707070;
    }
    
    .img_width {
      width: 15vw;
    }
    `;

    return style;
  }
}

customElements.define("card-news", CardNews)