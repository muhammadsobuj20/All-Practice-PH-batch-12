const student ={
    name:'Shahrukh khaan',
    id: 444,
    address: 'movie cenema',
    isSingle:true,
    friends:['Shilpa sethi','Catrina kife','Salman khan','Amir khan','Kajal'],
    movies:[{name:'Diwali dulhania', year:2017},
    {name:'Diwali dulhania2', year:2017},
    {name:'Race', year:2012},
    {name:'Channai express', year:2015},
    {name:'Murder', year:2013},

    ],
    act: function(){
        console.log('acting shahrukh khan');
    },
    car:{
        brand: 'Tesla',
        price:2000000,
        made:2025,
        manufacture:{
            name:'Tesla',
            ceo:'Elon mask',
            country:'USA'
        }
    }
    
}

// console.log(student.movies)
console.log(student.act);
student.act();