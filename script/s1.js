document.addEventListener('DOMContentLoaded', () => {
    const heads = document.querySelectorAll('h2');;
    //alert(heads.length);
    if (heads && heads.length) {
        let contents = '';
        heads.forEach((head, i) => {
            contents += `<li><a href="#head${i}">${head.textContent}</a></li>`;
            head.innerHTML += `<a id="head${i}"></a>`;
        })
        document.querySelector('#table-of-content').innerHTML += `<ol>${contents}</ol>`;
    }
});