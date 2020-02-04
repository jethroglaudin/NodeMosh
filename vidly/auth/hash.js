const bcrypt = require('bcrypt');

// A salt is a random stirng that's addded before or after pass


async function run (){
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash('12323', salt)
    console.log(salt);   
    console.log(hashed);
}
run();