function makeid(l) {
  // write your code here
	 let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.l;

  for (let i = 0; i < l; i++) {
    const randomChar = characters.charAt(Math.floor(Math.random() * charactersLength));
    result += randomChar;
  }
  return result;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
