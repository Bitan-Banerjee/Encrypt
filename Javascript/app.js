
//;--------------THIS IS THE DEFAULT SINARIO IF THERE IS NO INPUT BY USER--------------------//
var cypher_technique=$("select").children(":selected").attr("value");



//;-----------------------DEFAULT IS SET TO CEASER CYPHER------------------------------//
if(cypher_technique=="CS")
{
    //;----------Validating and Inputing the key-----------//

    $("#input").val(5);
    $("#help").attr("title","Enter any number from 0 - 26")
    var key=parseInt($("#input").val());

    $("#input").on("change keyup paste", function(){
        key=parseInt($(this).val());
    });
    key= (key % 26);


    //;----------Encoding------------//

    $("#plntxt").on("change keyup paste", function(){

        const pt=$(this).val();  //;---Entering the plain tex
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var cipherFinish = '';  //;----Result
        var fullAlphabet = alphabet + alphabet + alphabet;

        for(i=0;i<pt.length;i++)
        {
            var letter =pt[i];  //;----chopping each lette
            var upper=(letter == letter.toUpperCase());  //;-----If upper case then keeping is memory to convert to answer to upper case too
            letter = letter.toLowerCase();

            var index= alphabet.indexOf(letter);
            if(index == -1)   //;------If given letter is not an alphabet then just add it as it is
            {
                cipherFinish += letter;
            }
            else{
                index = ((index + key) + alphabet.length);  //;----Moving the characters k places to the right
                var nextLetter = fullAlphabet[index];
                if(upper) nextLetter = nextLetter.toUpperCase();  //;----Convert a letter which was initially upper case back to upper case
                cipherFinish += nextLetter;
            }
        }
        
        $("#cyptxt").val(cipherFinish);   //;----Finally adding the result to the cipher text section
    });


    //;-----------Decoding------------//

    $("#cyptxt").on("change keyup paste", function(){

        const ct=$(this).val();  //;--------Entering the cypher text
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        var cipherFinish = '';  //;-----Result
        var fullAlphabet = alphabet + alphabet + alphabet;   //;----This creates an illusion of a cyclic array

        for(i=0;i<ct.length;i++)
        {
            var letter =ct[i];  //;------chopping each letter
            var upper=(letter == letter.toUpperCase());  //;-----If upper case then keeping is memory to convert to answer to upper case too
            letter = letter.toLowerCase();

            var index= alphabet.indexOf(letter);
            if(index == -1)  //;------If given letter is not an alphabet then just add it as it is
            {
                cipherFinish += letter;
            }
            else{
                index = ((index - key) + alphabet.length);   //;----Moving the characters k places to the left 
                var nextLetter = fullAlphabet[index];
                if(upper) nextLetter = nextLetter.toUpperCase();    //;----Convert a letter which was initially upper case back to upper case
                cipherFinish += nextLetter;
            }
        }
        
        $("#plntxt").val(cipherFinish);  //;----Finally adding the result to the cipher text section
    });

}



//;----------------------WHER USER PROVIDES AN INPUT----------------------------//
$("select").on("change keyup" , function(){

    var cypher_technique=$("select").children(":selected").attr("value");


    //;-------------------------CEASER CYPHER-----------------------------//

    if(cypher_technique=="CS")
    {
        $("#input").val(5);
        $("#help").attr("title","Enter any number from 0 - 26")

        //;----------Validating and Inputing the key-----------//

        var key=parseInt($("#input").val());
        $("#input").on("change keyup paste", function(){
            key=parseInt($(this).val());
        });
        key= (key % 26);

        //;----------Encoding------------//

        $("#plntxt").on("change keyup paste", function(){

            const pt=$(this).val();  //;---Entering the plain text
            var alphabet = "abcdefghijklmnopqrstuvwxyz";
            var cipherFinish = '';  //;----Result 
            var fullAlphabet = alphabet + alphabet + alphabet;  //;----This creates an illusion of a cyclic array

            for(i=0;i<pt.length;i++)
            {
                var letter =pt[i];  //;----chopping each letter
                var upper=(letter == letter.toUpperCase());  //;-----If upper case then keeping is memory to convert to answer to upper case too
                letter = letter.toLowerCase();

                var index= alphabet.indexOf(letter);
                if(index == -1)  //;------If given letter is not an alphabet then just add it as it is
                {
                    cipherFinish += letter;
                }
                else{
                    index = ((index + key) + alphabet.length);  //;----Moving the characters k places to the right
                    var nextLetter = fullAlphabet[index];
                    if(upper) nextLetter = nextLetter.toUpperCase();  //;----Convert a letter which was initially upper case back to upper case
                    cipherFinish += nextLetter;
                }
            }
            
            $("#cyptxt").val(cipherFinish);  //;----Finally adding the result to the cipher text section
        });


        //;-----------Decoding------------//

        $("#cyptxt").on("change keyup paste", function(){

            const ct=$(this).val();   //;--------Entering the cypher text
            var alphabet = "abcdefghijklmnopqrstuvwxyz";
            var cipherFinish = '';   //;-----Result
            var fullAlphabet = alphabet + alphabet + alphabet;   //;----This creates an illusion of a cyclic array

            for(i=0;i<ct.length;i++)
            {
                var letter =ct[i];    //;------chopping each letter
                var upper=(letter == letter.toUpperCase());   //;-----If upper case then keeping is memory to convert to answer to upper case too
                letter = letter.toLowerCase();

                var index= alphabet.indexOf(letter);
                if(index == -1)  //;------If given letter is not an alphabet then just add it as it is
                {
                    cipherFinish += letter;
                }
                else{
                    index = ((index - key) + alphabet.length);  //;----Moving the characters k places to the left 
                    var nextLetter = fullAlphabet[index];
                    if(upper) nextLetter = nextLetter.toUpperCase();   //;----Convert a letter which was initially upper case back to upper case
                    cipherFinish += nextLetter;
                }
            }
            
            $("#plntxt").val(cipherFinish);   //;----Finally adding the result to the cipher text section
        });

    }


    //;------------------------PLAYFAIR CYPHER--------------------------//
    
    else if(cypher_technique=="PF")
    {
        $("#help").attr("title","Enter a string of length 0-25 with unique alphabets");
        $("#input").val("key");

        var key = $("#input").val();

        //;----------If key is changed---------//

        $("#input").on("change keyup paste", function(){
            key= $(this).val();

            key = key.toUpperCase().replace(/\s/g,'')

            
            var kl = key.length;   //;---------Length of Key 
            

            //;----Check if the key is valid-----//

            if(kl>25) alert("Key length should not exceed 25 characters");

            let chArray = key.split('');
            chArray.sort();
            var g=true;
            for(i=0;i<chArray.length -1 ;i++)
            {
                if(chArray[i] != chArray[i+1]) continue;
                else g=false;
            }

            if(g===false) alert("key should have all unique characters");
        })


        //;---------Removing the spaces and replacing "j" with "i"------------//

        key = key.toUpperCase().replace(/\s/g,'');


        //;-----------------------ENCODING---------------------------//

        $("#plntxt").on("change keyup paste",function(){


            //;----Inputting the Plain Text---//

            const pt=$(this).val();

            key=key.replace(/J/g,"I")
            var alphabet = "abcdefghiklmnopqrstuvwxyz".toUpperCase();

            //;---------Declaring the key matrix-----------//

            var keyT = new Array(5);
            for(j=0;j<5;j++) keyT[j] = new Array(5);



            //;----Filling the key matrix-----//

            var k=0,flag=0;
            var ii,jj;
            var kl=key.length;
            for (i = 0; i < 5; i++)
            {
                for (j = 0; j < 5; j++)
                {
                    if(kl==k){
                        flag=1;
                        ii=i;
                        jj=j;
                        break;
                    }
                    keyT[i][j] = key[k];
                    k++;
                }
                if(flag==1) break;
            }


            var temp_str="";
            for(let l=0;l<25;l++)
            {
                if(key.includes(alphabet[l])===false)
                {
                    temp_str+=alphabet[l];
                }
            }


            k=0;
            for (i=ii; i < 5; i++)
            {
                for (j=jj; j < 5; j++)
                {
                    keyT[i][j] = temp_str[k];
                    k++;
                }
                jj=0;
            }


            var ptl = pt.length;  //;-----------The plain text length


            //;------Removing Spaces from plaintext--------//

            temp="";
            var prev='';
            for(i=0;i<ptl;i++)
            {
                if(/[a-zA-Z]/.test(pt[i]))
                {
                    if(pt[i] === prev)
                    {
                        temp+='z';
                    }
                    
                    temp+=pt[i];
                }
                prev=pt[i];
            }
            console.log(temp)


            //;-----Making plain texts length even-----//

            if(temp.length%2 != 0 ){
                temp += 'z';
            }

            temp=temp.toUpperCase();

            $("#cyptxt").val(playfairEncode(temp,keyT));   //;---------Finally getting the answer string from the playfairEncode methord and printing it
        });


        //;----------------------DECODING--------------------------//
        
        $("#cyptxt").on("change keyup paste", function(){

            //;----Inputting the Cypher Text---//

            const ct=$(this).val();

            key=key.replace(/J/g,"I")
            var alphabet = "abcdefghiklmnopqrstuvwxyz".toUpperCase();


            //;---------Declaring the key matrix-----------//

            var keyT = new Array(5);
            for(j=0;j<5;j++) keyT[j] = new Array(5);



            //;----Filling the key matrix-----//

            var k=0,flag=0;
            var ii,jj;
            var kl=key.length;
            for (i = 0; i < 5; i++)
            {
                for (j = 0; j < 5; j++)
                {
                    if(kl==k){
                        flag=1;
                        ii=i;
                        jj=j;
                        break;
                    }
                    keyT[i][j] = key[k];
                    k++;
                }
                if(flag==1) break;
            }


            var temp_str="";
            for(let l=0;l<25;l++)
            {
                if(key.includes(alphabet[l])===false)
                {
                    temp_str+=alphabet[l];
                }
            }


            k=0;
            for (i=ii; i < 5; i++)
            {
                for (j=jj; j < 5; j++)
                {
                    keyT[i][j] = temp_str[k];
                    k++;
                }
                jj=0;
            }

            var ctl = ct.length;   //;-----------The cypher text length

            //;-------Removing spaces from cypher text--------//

            temp="";
            for(i=0;i<ctl;i++)
            {
                if(/[a-zA-Z]/.test(ct[i]))
                {
                    temp+=ct[i];
                }
            }


            //;-----Making cypher texts length even-----//

            if(temp.length%2 != 0 ){

                $("#cyptxt").attr("title","Cypher text can only have even number of characters")
            }

            temp=temp.toUpperCase();

            $("#plntxt").val(playfairDecode(temp,keyT));   //;---------Finally getting the answer string from the playfairDecode methord and printing it

        });
        
    }


    //;--------------FUTURE CYPHER TECHNIQUES ARE TO BE ADDED HERE------------------//
});


function playfairEncode(tmp,keyT)
{
    var tl= tmp.length;
    var str="";
    for(i=0;i<tl;i+=2)
    {
        var ltrone = tmp[i];
        var ltrtwo= tmp[i+1];

        var arr=new Array(4);


        //;--------Search----------//
        if (ltrone == 'J')
            ltrone = 'I';
        else if (ltrtwo == 'J')
            ltrtwo = 'I';

        for (v = 0; v < 5; v++) {

            for (j = 0; j < 5; j++) {
    
                if (keyT[v][j] === ltrone) {
                    arr[0] = v;
                    arr[1] = j;
                }
                else if (keyT[v][j] === ltrtwo) {
                    arr[2] = v;
                    arr[3] = j;
                }
            }
        }
        

        //;---------Making of the resultant string----------//
        if (arr[0] === arr[2]) 
        {
            str += keyT[arr[0]][(arr[1] + 1)%5];
            str += keyT[arr[0]][(arr[3] + 1)%5];
        }
        else if (arr[1] === arr[3]) 
        {
            str += keyT[(arr[0] + 1)%5][arr[1]];
            str += keyT[(arr[2] + 1)%5][arr[1]];
        }
        else 
        {
            str += keyT[arr[0]][arr[3]];
            str += keyT[arr[2]][arr[1]];
        } 
    }
    console.log(keyT)
    return(str)
}

function playfairDecode(tmp,keyT)
{

    var tl= tmp.length;
    var str="";
    for(i=0;i<tl;i+=2)
    {
        var ltrone = tmp[i];
        var ltrtwo= tmp[i+1];

        var arr=new Array(4);


        // //;--------Search----------//
        if (ltrone == 'J')
            ltrone = 'I';
        else if (ltrtwo == 'J')
            ltrtwo = 'I';

        for (v = 0; v < 5; v++) {

            for (j = 0; j < 5; j++) {
    
                if (keyT[v][j] === ltrone) {
                    arr[0] = v;
                    arr[1] = j;
                }
                else if (keyT[v][j] === ltrtwo) {
                    arr[2] = v;
                    arr[3] = j;
                }
            }
        }
        

        //;---------Making of the resultant string----------//
        if (arr[0] === arr[2]) 
        {
            str += keyT[arr[0]][(arr[1] - 1)%5];
            str += keyT[arr[0]][(arr[3] - 1)%5];
        }
        else if (arr[1] === arr[3]) 
        {
            str += keyT[(arr[0] - 1)%5][arr[1]];
            str += keyT[(arr[2] - 1)%5][arr[1]];
        }
        else 
        {
            str += keyT[arr[0]][arr[3]];
            str += keyT[arr[2]][arr[1]];
        } 
    }
    console.log(keyT)
    return(str)
}