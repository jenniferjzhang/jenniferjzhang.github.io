document.addEventListener('DOMContentLoaded', function () {
    const sidebarHTML = `
      <div id="picture">
        <img src="/jennifer.png" id="jennifer-picture" alt="Jennifer Zhang">
      </div>
      <div id="greeting">
        <h1>Jennifer Zhang</h1>
      </div>
      <div id="links">
        <nav id="navigation">
          <a href="/index.html">about</a>
          <a href="/gotos/index.html">my go-to's</a>
        </nav>
        <nav id="navigation">
          <a href="/resume.pdf" target="_blank">resume</a>
          <a href="https://www.linkedin.com/in/jennifer-zhang-41404478" target="_blank">linkedin</a>
          <a href="mailto:jenniferjuliazhang@gmail.com">email</a>
        </nav>
      </div>
    `;
    document.getElementById('jennifer').innerHTML = sidebarHTML;
});