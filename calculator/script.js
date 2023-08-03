
let input = document.getElementById('inputbox');
 
function display(num)
{
    input.value += num; 
}

function Calculate()
{
    try{
        input.value = eval(input.value);
    }
    catch(err)
    {
        alert("Invalid entry");
    }
}
function AC()
{
    input.value = "";
}
function del()
{
  input.value = input.value.slice(0,-1);
}