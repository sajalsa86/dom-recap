
document.body.style.backgroundColor = 'gray';
const mainContainer = document.getElementById('conatiner');

mainContainer.style.backgroundColor = 'DimGray';
mainContainer.style.display = 'flex';
mainContainer.style.width = '90%';
mainContainer.style.height = '90vh';
mainContainer.style.margin = '0 auto';
mainContainer.style.border = '1px solid goldenrod';
mainContainer.style.boxShadow = '1px 1px 2px 2px azure';
mainContainer.style.marginTop = '50px';
mainContainer.style.borderRadius = '7px';

const sectionBox = document.getElementsByClassName("section-box");
for (let i = 0; i < sectionBox.length; i++) {
    const box = sectionBox[i];
    box.style.backgroundColor = 'DarkSlateGray';
    box.style.width = '33.3%';
    box.style.height = '300px';
    box.style.borderRadius = '10px';
    box.style.boxShadow = '5px 5px 5px 5px DarkSlateGrey';
    box.style.margin = '20px';
    box.style.border = '1px solid azure';

};
const myPara = document.getElementsByClassName("select-p");
for (const pStyle of myPara) {
    pStyle.style.backgroundColor = 'green';
    pStyle.style.color = 'gold';
    pStyle.style.textAlign = 'center';
    pStyle.style.fontSize = '1.5rem';
    pStyle.style.paddingTop = '0.5rem';
    pStyle.style.paddingBottom = '0.5rem';
};

const topSection = document.getElementById('top-section');
const pTag = document.createElement('p');
pTag.className = 'sajal';
pTag.innerText = 'Welcome to i';
topSection.appendChild(pTag);


const styleHeading = document.querySelector('.section-box h1');
styleHeading.style.backgroundColor = 'pink';
styleHeading.style.color = 'blue';
styleHeading.style.textAlign = 'center';
styleHeading.style.fontSize = '1.5rem';
styleHeading.style.paddingTop = '0.5rem';
styleHeading.style.paddingBottom = '0.5rem';


const styleHeading2 = document.querySelectorAll('.section-box h2');

for (const headingTwo of styleHeading2) {
    headingTwo.style.backgroundColor = 'orange';
}

const myTime = new Date();
console.log(myTime);



