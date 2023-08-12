document.getElementById('setting-bg').addEventListener('click', function () {
    const getFriends = document.getElementsByClassName('friends');
    for (const friend of getFriends) {
        friend.style.backgroundColor = 'pink';
        friend.style.padding = '8px';
        friend.style.margin = '10px';
        friend.style.width = '25%';
        friend.style.borderRadius = '10px';
    }
});

document.getElementById('heading-align').addEventListener('click', function () {
    const headingAlign = document.getElementById('heading-3');
    headingAlign.style.textAlign = 'center';
    headingAlign.style.color = 'blue';
});

document.getElementById('add-element').addEventListener('click', function () {
    const elementContainer = document.getElementById('element-container');
    const div = document.createElement('div');
    div.classList.add('friends');
    div.innerHTML = `
             <h2>New Friend</h2>
            <p>Lorem ipsum dolor sit amet.</p>
`;
    elementContainer.appendChild(div);
});
