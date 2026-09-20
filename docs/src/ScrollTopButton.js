class ScrollTopButton extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this._render();
        const scrollButton = this.querySelector('.scroll-to-top-button');
        document.body.classList.remove('hidden');

        if (scrollButton) {

            this.handleScrollChange = () => {
                if (window.scrollY >= 50) {
                    scrollButton.classList.remove('hidden');
                } else {
                    scrollButton.classList.add('hidden');
                }
            }

            this.handleScrollChange();

            window.addEventListener('scroll', () => this.handleScrollChange());

            scrollButton.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
            });
        }
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleScrollChange);
    }

    _render() {
        this.innerHTML = `
            <button class="scroll-to-top-button hidden" aria-label="подняться вверх">
                Наверх
            </button>`;
    }
}

customElements.define('scroll-top-button', ScrollTopButton);