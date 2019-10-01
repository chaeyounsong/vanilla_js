const age = prompt('How old are you?')

if(age>=18&&age>50){
    alert(`you can drink but you have to quit.`);
}else if(age>=18&&age<50){
    alert(`yes~ enjoy the drunk day!`);
}else{
    alert(`too young.`);
}