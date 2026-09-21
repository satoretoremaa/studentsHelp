class IssueCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.articleTitle = this.getAttribute("title");
        this.articleHref = this.getAttribute("href");
        this.articleDate = this.getAttribute("date");
        this.articleDescription = this.getAttribute("description");
        this.articleImage = this.getAttribute("imageUrl");
        this.articleImageAlt = this.getAttribute("imageAlt") ?? "";

        this._render();
    }

    _render() {
        this.innerHTML = `
            <a class="article-preview" href="${this.articleHref}" draggable="false">
                <img class="wide-image" src="${this.articleImage}" alt="" draggable="false"/>
                <img class="preview-image" src="${this.articleImage}" alt="${this.articleImageAlt}" draggable="false"/>

                <div class="preview-text">
                    <div class="date">${this.articleDate}</div>
                    <h4>${this.articleTitle}</h4>
                    <p>${this.articleDescription}</p>
                </div>
            </a>`;
    }
}

customElements.define('issue-card', IssueCard);