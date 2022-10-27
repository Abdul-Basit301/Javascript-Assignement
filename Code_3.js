let name="Basit";
let upper_name=name.toUpperCase();
let lower_name=name.toLowerCase();

//function for titlecase
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }

let title_name=titleCase(name);

console.log(upper_name,lower_name,title_name);
