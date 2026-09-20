class ArticleHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.date = this.getAttribute('date') ?? "00.00.0000";
        this.title = this.getAttribute('title') ?? "";
        this.subtitle = this.getAttribute('subtitle') ?? "";
        this.imageUrl = this.getAttribute('imageUrl') ?? "";

        this._render();
    }

    disconnectedCallback() {

    }

    _render() {
        this.innerHTML = `
            <div class="article-header">
                <div class="narrow">
                    <span class="date">${this.date}</span>
                    <h1>${this.title}</h1>
                    <span class="h3-like">${this.subtitle}</span>
                </div>
                <img class="article-header-background" src=${this.imageUrl} loading="lazy" alt="" draggable="false"/>
            </div>`;
    }
}

customElements.define('article-header', ArticleHeader);