const button = document.querySelector('button');

var passwordfinal = "";

button.onclick = function() {

    let num = prompt("¿Choose long of passwor betwen 128 and 8 ?");

    var password = "Inicio";

    if  (isNaN( num )) {
        alert("Your Input is not a number please try again");
        } 
    else 
    {
        if ( num <= 7 )
        {
        alert("Your password is weak with"+ " "+ num  + " "+ "elements try again");
        }
        else if ( num <= 128 && num >= 8 )
        {
            
        alert("Your password is secure an will have  "+ " "+ num  + " "+"elements");

        

        var passDefault = window.confirm('Do you want a default password?');

        if (passDefault) {
            passwordfinal = generateDefaultP(num);
        } else
            {

                //Primero preguntamos todos los settings del password (Siempre tendra lowercase el password)
            var passNum = window.confirm('Do you want numbers in your password?');
            var passUpChar = window.confirm('Do you want Upper Case Letters in your password?');
            var passCharSpecial = window.confirm('Do you want Special Characters in your password?');

            

            if (passNum) {
                //Call function that generate password with number
                passwordN =  passwordWithNumber(1);
                passwordfinal = passwordfinal +passwordN;
                num--;
                // reduces por que ya tienes un caracter
                }

            if (passCharSpecial) {
                //Call function that generate password with char special
                passwordCE =  passworCaracterSpe(1);
                passwordfinal = passwordfinal + passwordCE;
                num--;
                }
            
            if (passUpChar) {
                //Call function that generate password with char  up
                passwordUL = passwordWithUpLetter(1)
                passwordfinal = passwordfinal + passwordUL;
                num--;
                }

            for (var i=0; i<num ; i++)
            {
                //Call function that generate password with char low
                passwordsm =  passwordWithsmLetter(1);
                passwordfinal = passwordfinal + passwordsm;
            }
        }
        console.log(passwordfinal);
        console.log(shuffle(passwordfinal));
        }
    }
    document.getElementById("LongPaswordcomplete").innerHTML = "Your safe password " + shuffle(passwordfinal);
    
}


function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
function shuffle(s) {
  var arr = s.split('');           // Convert String to array
  var n = arr.length;              // Length of the array

    for(var i=0 ; i<n-1 ; ++i) {
    var j = getRandomInt(n);       // Get random of [0, n-1]
    
    var temp = arr[i];             // Swap arr[i] and arr[j]
    arr[i] = arr[j];
    arr[j] = temp;
    }
  s = arr.join('');                // Convert Array to string
  return s;                        // Return shuffled string
}


function passwordWithNumber(num) {

var passwordNumber = [0,1,2,3,4,5,6,7,8,9];
        var texNumber = [ ];
        for (var i=0; i< num; i++) 
        {
        var anyNumber = Math.floor(Math.random() * passwordNumber.length)
        //alert("numero en el array ["+i+"]= "+anyNumber);
        //Se salva como string
        texNumber.push(passwordNumber[anyNumber].toString());
        //print each time when we add a new element 
        //document.write("Array number"+texNumber );
        }
        //document.write("Array Random Numbers = "+texNumber );
return texNumber.toString();
}



function passwordWithUpLetter(num) {

var passwordLetter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
        
        var texLetter = [ ];
        for (var j=0; j< num; j++) 
        {
    var anyLetter = Math.floor(Math.random() * passwordLetter.length);
        
        texLetter.push(passwordLetter[anyLetter]);
        //print each time when we add a new element 

        }
        //document.write("Array Random Letters = "+ texLetter );

return texLetter.toString();
}

function passwordWithsmLetter(num) {

var passwordsmLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        
        var texsmLetter = [ ];
        for (var l=0; l< num; l++) 
        {
    var anysmLetter = Math.floor(Math.random() * passwordsmLetter.length);
        
        texsmLetter.push(passwordsmLetter[anysmLetter]);
        //print each time when we add a new element 

        }
        //document.write("Array Random Letters = "+ texLetter );

return texsmLetter.toString();
}


function passworCaracterSpe(num) {
    var passwordCaracter = ["+", "-", "&", "|", "!", "(", ")", "{", "}", "[", "]", "^","~", "*", "?", ":"]

//  document.write("Array Random Caracteres = "+ passwordCaracter);
    var texCaracter = [ ];
    for (var k=0; k< num; k++) 
    {
var anyCaracter = Math.floor(Math.random() * passwordCaracter.length);

    texCaracter.push(passwordCaracter[anyCaracter ]);
  //print each time when we add a new element 

}

return texCaracter.toString();
}

/* Function to generate combination of password */ 
function generateDefaultP(num) { 
            var pass = ''; 
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +  
                    'abcdefghijklmnopqrstuvwxyz'+'0123456789'+'+-&|!(){}[]^~*?:';               
            for (i = 1; i <= num; i++) { 
                var char = Math.floor(Math.random() 
                            * str.length + 1);                   
                pass += str.charAt(char) 
            }               
            return pass.toString(); 
        } 
