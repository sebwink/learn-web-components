(function(){
    console.log('Hello, World!');
    //
    const template = document.getElementById('hello-world-template');
    
    const sayHello = (importance) => {
      const node = document.importNode(template.content, true);
      const importanceSpan = node.querySelector('#importance-span');
      importanceSpan.innerText = '!'.repeat(importance ? importance : 1);
      document.body.appendChild(node);
    }

    sayHello();
    sayHello(42);
})();