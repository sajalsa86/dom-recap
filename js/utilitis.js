function getUserInputValue(userFieldId) {
    const userInputField = document.getElementById(userFieldId);
    const userInputFieldSting = userInputField.value;
    const userInputFieldValue = parseInt(userInputFieldSting);

    userInputField.value = '';
    return userInputFieldValue;
}

function getCheckValidValue(validId) {
    if (isNaN(validId)) {
        alert('Please Enter A valid Number');
        throw new Error('Invalid number');
    }
};

function setTextElementById(elementId, value) {
    const getElement = document.getElementById(elementId);
    getElement.innerText = value;
};

document.getElementById('sum-btn').addEventListener('click', function () {
    const aValue = getUserInputValue('a-Value');
    getCheckValidValue(aValue);
    setTextElementById('a-element', aValue);

    const bValue = getUserInputValue('b-Value');
    getCheckValidValue(bValue);
    setTextElementById('b-element', bValue);

    const totalSum = aValue + bValue;
    setTextElementById('sum', totalSum);

});