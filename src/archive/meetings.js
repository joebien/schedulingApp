var meetingsDoc = [
  { 
    type:type,
    open:open,
    name:'Capitol Hill',
    id:'capHill',
    location:'CH OF THE REFORMATION /n 212 E CAPITOL ST, NE', 
    directions:'Basement',
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.481288605662!2d-77.00537632165691!3d38.89010797967172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b82f22084beb%3A0xb1b66000c9724513!2s204+East+Capitol+St+NE%2C+Washington%2C+DC+20003!5e0!3m2!1sen!2sus!4v1463360781140",

    days:'Monday 8:00PM /n Thursday 8:30PM',
    
    monday:{
      day:'Monday',
      time:'8:00 PM',
      open: 'Open Meeting',
      type: 'Discussion',
    },

    thursday:{
      day:'Thursday',
      time:'8:30 PM',
      open: 'Closed Meeting',
      type: 'Step',
    }
  },

{type:type,
open:open,
    name:'Celebration on the Hill',
    id:'celebration',
    location:'CH OF THE REFORMATION /n 212 E CAPITOL ST, NE', 
    directions:'Basement',
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.481288605662!2d-77.00537632165691!3d38.89010797967172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b82f22084beb%3A0xb1b66000c9724513!2s204+East+Capitol+St+NE%2C+Washington%2C+DC+20003!5e0!3m2!1sen!2sus!4v1463360781140" ,

    days:'Saturday 8:30PM',

    saturday:{
    day:'Saturday', 
    time:'8:30 PM',
    open:'Open Meeting',
    type:'Celebration',
    }
  },

    {type:type,
open:open,
    name:'High on the Hill',
    id:'highHill',
    location:'ST MARK`S EPISCOPAL CH  /n 301 A ST, SE  ', 
    directions:'Basement',
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.551211797802!2d-77.00393378464992!3d38.888508579572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b82e5fb038ef%3A0x22515496849a7783!2s301+A+St+SE%2C+Washington%2C+DC+20003!5e0!3m2!1sen!2sus!4v1461557834019" ,

    days:'Saturday 7:00 PM',

    saturday:{
    day:'Saturday', 
    time:'7:00 PM',
    open:'Open Meeting',
    type:'Discussion',
    }
  },

  {type:type,
open:open,
    name:'Hill Lunch',
    id:'hillLunch',
    location:"ST PETER'S RECTORY /n 212 E CAPITOL ST, NE",  
    directions:'',
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.6784479537414!2d-77.00591648465!3d38.88559807957243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b82c6d022db7%3A0xce4eb5114b8627e6!2s313+2nd+St+SE%2C+Washington%2C+DC+20003!5e0!3m2!1sen!2sus!4v1461551133116",

    days:'Monday - Friday Noon',

    monday:{
    day:'Monday', 
    time:'12:00 PM',
    open:'Open Meeting',
    type:'Beginner - Discussion'
    },

    tuesday:{
    day:'Tuesday',  
    time:'12:00 PM',
    open:'Open Meeting',
    type:'Big Book'
    },

    wednesday:{
    day:'Wednesday',  
    time:'12:00 PM',
    open:'Open Meeting',
    type:'Living Sober'
    },

    thursday:{
    day:'Thursday', 
    time:'12:00 PM',
    open:'Open Meeting',
    type:'Step'
    },

    friday:{
    day:'Friday', 
    time:'12:00 PM',
    open:'Open Meeting',
    type:'Discussion'
    }


  },

  {type:type,
open:open,
    name:'New Beginnings',
    id:'newBegin',
    location:'ST MARK`S EPISCOPAL CH  /n 118 3RD ST, SE  ', 
    directions:'',
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.551211797802!2d-77.00393378464992!3d38.888508579572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b82e5fb038ef%3A0x22515496849a7783!2s301+A+St+SE%2C+Washington%2C+DC+20003!5e0!3m2!1sen!2sus!4v1461557834019",

    days:'Friday 6:30PM',

    friday:{
    day:'Friday', 
    time:'6:30 PM',
    open:'Open Meeting',
    type:"Discussion, Women's",
    }
  },

  {type:type,
open:open,
    name:'Room with a view',
    id:'roomView',
    location:'11TH STREET N.E.',
    directions:'Basement',
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.618345502565!2d-76.99432241819947!3d38.88697293320132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b831683b3bd9%3A0xe87e86d596831fb2!2s222+8th+St+SE%2C+Washington%2C+DC+20003!5e0!3m2!1sen!2sus!4v1461021436399",
  
    days:'Monday, Wednesday /n and Friday 6:30PM ',

    monday:{
    day:'Monday', 
    time:'6:30 PM',
    open:'Open Meeting',
    type:'Speaker',
    },
    
    wednesday:{
    day:'Wednesday',  
    time:'6:30 PM',
    open:'Open Meeting',
    type:'Speaker',
    },

    friday:{
    day:'Friday', 
    time:'6:30 PM',
    open:'Open Meeting',
    type:'Speaker',
    }
  },

{type:type,
open:open,
    name:'Simplicity',
    id:'simpLicity',
    location:'1302 E Capital STREET N.E.',
    directions:'Stair Step Center',
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.469755467124!2d-76.9910712846499!3d38.89037177957174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b8378c0f3399%3A0x550bc2cbd0c06f0d!2s1302+East+Capitol+St+NE%2C+Washington%2C+DC+20002!5e0!3m2!1sen!2sus!4v1461548161677",

    days:'Monday 8:00PM, Friday 8:00PM /n and Saturday 11:30AM',
  
    saturday:{
    day:'Saturday', 
    time:'11:30 AM',
    open:'Open Meeting',
    type:'Discussion',
    },
    
    monday:{
    day:'Monday', 
    time:'8:00 PM',
    open:'Open Meeting',
    type:'Steps and Traditions',
    },

    friday:{
    day:'Friday', 
    time:'8:00 PM',
    open:'Open Meeting',
    type:'Discussion',
    }
    },

{ type:type,
open:open,
    name: 'Sunday Night Steps and Traditions',
    id:'sundaySteps',
    location:'CH OF THE REFORMATION /n 212 E CAPITOL ST, NE', 
    directions:'Basement',
    map:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.618345502565!2d-76.99432241819947!3d38.88697293320132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b831683b3bd9%3A0xe87e86d596831fb2!2s222+8th+St+SE%2C+Washington%2C+DC+20003!5e0!3m2!1sen!2sus!4v1461021436399",

    days:'Sunday 6:00PM',
    
    sunday:{
    day:'Sunday', 
    time:'6:00 PM',
    open:'Open Meeting',
    type:'Steps and Traditions'
    }

}

];