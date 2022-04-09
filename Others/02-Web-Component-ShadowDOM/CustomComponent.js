class CustomComponent extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: 'open'})
        
        shadow.innerHTML = `
        <div class="background">
            <div class="canvas">
                <p> Hello World </p>
            </div>
        </div>`

        shadow.appendChild(this.styles())
    }

    build() {}

    styles(){
        const style = document.createElement('style')
        style.textContent = `
            .background {
                width: 30rem;
                height: 30rem;
                background: #4a4a4a;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .canvas {
                background: #171717;
                width: 50%;
                height: 50%;
                border: 1px solid #fff;
                
            }
            .canvas p {
                text-align: center;
                color: #fff;
            }

        `
        return style
    }
}

customElements.define('custom-component', CustomComponent)