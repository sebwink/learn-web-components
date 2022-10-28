(function(){
    class HelloWorld extends HTMLElement {
        constructor() {
            super();
            let template = document.getElementById("hello-world-template");
            let templateContent = template.content;
    
            const shadowRoot = this.attachShadow({ mode: "open" });
            shadowRoot.appendChild(templateContent.cloneNode(true));

            const slot = this.shadowRoot.querySelector('slot');
            slot.innerText = this.hasAttribute("importance")
                ? '!'.repeat(this.getAttribute("importance"))
                : '!';
        }
    }

    customElements.define('hello-world', HelloWorld);
})();