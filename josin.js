user = { id:404, name:'abdus_shobhan', job:'programmer'};
// console.log(user.id);

// jsvaScript Objects Notation......
// const stringfy = JSON.stringify(user);

// console.log(stringfy);

const shop={



    owner:'Shobhan',
    address:{


        street:'kochukhet voot er goli',
        city: 'Dhaka',
        country:'Bangladesh',
    },
    products:['laptop','mic','keybord'],
    revinu:4500,
    isOpen:true,
    

}
 const result= JSON.stringify(shop);

console.log(result)
// console.log(shop);


const makeObject= JSON.parse(result);
console.log(makeObject);