class AdaptiveHeader extends HTMLElement {
    constructor() {
        super();

        this.linksData = [
            {
                href: "",
                text: "Будущем"
            },
            {
                href: "",
                text: "В ближайшем"
            },
            {
                href: "",
                text: "Прямо здесь"
            },
            {
                href: "",
                text: "Появятся"
            },
            {
                href: "",
                text: "Новые разделы"
            }
        ];
    }

    connectedCallback() {
        this._render();
        this.handleScrollChange();
        this.handleMenuExpand();

        const mediaQuery = window.matchMedia('(min-width: 720px)');

        const handleResizeOut = () => {
            const button = this.querySelector('.header-navbar-burger');
            const mobileNav = this.querySelector('.mobile-nav');
            const header = this.querySelector('header');

            if (button && mobileNav && header) {
                mobileNav.classList.add('hidden');
                document.body.classList.remove('non-scrollable');
                header.classList.remove('expanded');
            }
        };


        mediaQuery.addEventListener('change', handleResizeOut);

        window.addEventListener('scroll', () => this.handleScrollChange());
    }

    disconnectedCallback() {
        window.removeEventListener('scroll', () => this.handleScrollChange());
    }

    _render() {
        this.innerHTML = `
            <header>
            <nav class="wide header-navbar">
                
                ${this.linksData.map((item) => (`
                       <a class="header-navbar-link" href="${item?.href}">
                           ${item?.text}
                       </a>
                   `)).join("")}
                
                <button class="header-navbar-burger">
                    <svg width="27" height="22" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 20.25L25.25 20.25M1.25 1.25H25.25M6.75 10.75H25.25" stroke-width="2.5" stroke-linecap="round"/>
                    </svg>
                </button>
            </nav>
            
            <nav class="mobile-nav hidden">
                <div class="wide">
                    ${this.linksData.map((item) => (
                        `<a class="header-mobile-link" href=${item.href}>${item.text}</a>`
                    )).join('')}
                </div>
            </nav>
        </header>
        `
    }

    handleScrollChange() {

        const header = this.querySelector('header');

        if (header) {
            if (window.scrollY > 5) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }

    handleMenuExpand() {
        const button = this.querySelector('.header-navbar-burger');
        const mobileNav = this.querySelector('.mobile-nav');
        const header = this.querySelector('header');

        if (button && mobileNav && header) {
            button.addEventListener('click', () => {
                mobileNav.classList.toggle('hidden');
                document.body.classList.toggle('non-scrollable');
                header.classList.toggle('expanded');
            });
        }
    }
}

customElements.define('adaptive-header', AdaptiveHeader);