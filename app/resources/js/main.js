
//User click add button
//If theres any text add that to the list
document.getElementById('add').addEventListener('click', function(){
  var value = document.getElementById('item').value
  if (value) addItemTodo(value);


});

function addItemTodo(item) {
   var item = document.createElement('li');
   item.innerText = text;

   var buttons = document.createElement('div');
   buttons.classList.add('buttons');

   var remove = document.createElement('button');
   remove.classList.add('remove');

   var complete = document.createElement('button');
   complete.classList.add('complete'); 
}
