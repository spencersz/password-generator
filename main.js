document.addEventListener('DOMContentLoaded', () => {
    const title = document.createElement('h1');
    title.innerText = 'Password Generator';
    document.querySelector('body').appendChild(title);

    //create password generator form 
    const passwordForm = document.createElement('form');

    //create each label and submission box on the form 
    const characters = document.createElement('label');
    characters.innerText = 'characters';
    const charactersBox = document.createElement('input');
    charactersBox.setAttribute('id', 'charactersBox');
    charactersBox.setAttribute('type', 'number');
    charactersBox.setAttribute('min', '1');
    charactersBox.setAttribute('max', '50');
    
    const numbers = document.createElement('label');
    numbers.innerText = 'numbers';
    const numbersBox = document.createElement('input');
    numbersBox.setAttribute('id', 'numbersBox');
    numbersBox.setAttribute('type', 'number');
    numbersBox.setAttribute('min', '1');
    numbersBox.setAttribute('max', '50');

    const uppercase = document.createElement('label');
    uppercase.innerText = 'uppercase characters';
    const uppercaseBox = document.createElement('input');
    uppercaseBox.setAttribute('id', 'uppercaseBox');
    uppercaseBox.setAttribute('type', 'number');
    uppercaseBox.setAttribute('min', '1');
    uppercaseBox.setAttribute('max', '50');
    
    const specialCharacters = document.createElement('label')
    specialCharacters.innerText = 'special characters'
    const specialCharactersBox = document.createElement('input');
    specialCharactersBox.setAttribute('id', 'specialCharactersBox');
    specialCharactersBox.setAttribute('type', 'number');
    specialCharactersBox.setAttribute('min', '1');
    specialCharactersBox.setAttribute('max', '50');
    
    //create "generate password" button
    const button = document.createElement('button');
    button.innerText = 'Generate Password';
    button.setAttribute('type', 'submit');

    passwordForm.appendChild(characters);
    passwordForm.appendChild(charactersBox);
    passwordForm.appendChild(numbers);
    passwordForm.appendChild(numbersBox);
    passwordForm.appendChild(uppercase);
    passwordForm.appendChild(uppercaseBox);
    passwordForm.appendChild(specialCharacters);
    passwordForm.appendChild(specialCharactersBox);
    passwordForm.appendChild(button);
    title.appendChild(passwordForm);


    //when user clicks button, generate a password with set parameters for number of inputs
    button.addEventListener('click', () => {
        const numCharacters = document.getElementById('charactersBox').value;
        const numNumbers= document.getElementById('numbersBox').value;
        const numUpperCase = document.getElementById('uppercaseBox').value;
        const numSpecialCharacter = document.getElementById('specialCharactersBox').value;

        const lowercase = 'abcdefghijklmnopqrstuvwxyz';
        const number = '0123456789';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const specialCharacterString = '!@#$%^&*()-_=+|[]{};:/?.<>';
        // find each string length
        // we need to randomize the INDEX and then add string[RANDOM INDEX] into password
        
        let password = '';
        function generatePassword() {
                //run for loop for numCharacters
                for(let i = 0; i < numCharacters; i++){ //populates password until it reaches numCharacters length
                    let randomIndex = Math.floor(Math.random()*lowercase.length); //returns 0-25
                    password += lowercase[randomIndex];
                }
                //run for loop for numNumbers
                for(let i = 0; i < numNumbers; i++){ //populates password until it reaches numCharacters length
                    let randomIndex = Math.floor(Math.random()*number.length); //returns 0-25
                    password += number[randomIndex];
                }
                //run for loop for numUppercase
                for(let i = 0; i < numUpperCase; i++){ //populates password until it reaches numCharacters length
                    let randomIndex = Math.floor(Math.random()*uppercase.length); //returns 0-25
                    password += uppercase[randomIndex];
                }
                //run for loop for numSpecial
                for(let i = 0; i < numSpecialCharacter; i++){ //populates password until it reaches numCharacters length
                    let randomIndex = Math.floor(Math.random()*specialCharacterString.length); //returns 0-25
                    password += specialCharacterString[randomIndex];
                }
            return password;
        }
        //alert(generatePassword());
        generatePassword();
        alert('Generated Password has been copied to the clipboard!')
        
        //Once password is generated, we have 3 options for where to put it
        //1. Display it in a popup or the extension itself for the user to copy/paste where they like
        //2. Input it directly into the input field where they are making the password
            // extension works with gmail , instagram , twitch
                // find where the password input is so that our generated password can put in that placeholder
        //3. Copy it directly to the user's clipboard so they can paste it wherever they want
   
        const writeTextInClipboard = () => {
            navigator.clipboard.writeText(password)
              .then(() => {
                console.log('Text copied to clipboard');
              })
              .catch(err => {
                console.error('Failed to copy text: ', err);
              });
          };
        writeTextInClipboard();  

    })
})