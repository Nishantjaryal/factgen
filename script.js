let factlist = new Array(
    {
      category: "india",
      fact: "The name India is derived from the river Indus. It is a valley around which people settled in earlier times.",
    },
    {
      category: "indusvally",
      fact: "India is the world's oldest, largest and continuous civilization  the Indus Valley civilization.",
    },
    {
      category: "democracy",
      fact: "India is also one of the largest democracies in the world.",
    },
    {
      category: "indiapost",
      fact: "India has the largest postal system in the world with more than 150,000 post offices, which is thrice the size of that of China. India has the world's only floating post office on Dal Lake, Sri Nagar. The office provides all regular postal services.",
    },
    {
      fact: "Sonam Wangchuk, an engineer and innovator born in Ladakh, India, designed the SECMOL campus that runs on solar energy. The campus also provides clean energy for heating, lighting and cooking. The building is designed in such a way that even when the minimum outside temperature falls to minus 25 degrees Celsius, the normal evening temperature inside this campus in the coldest part of the winter stays around plus 14 degrees Celsius. The building has south facing windows to collect heat during winter and insulation is also used in the roof, outer walls and some places under the floor. The building is made from earth. So they dig and use the same material and mix some sand and clay to get the desired strength for the building's constitution. The construction of the building is such that no electric lights are needed during the day.",
    },
    {
      fact: "India has more than 300,000 active mosques. This outnumbers any other country in the world, even the Muslim countries.",
    },
    {
      fact: "The second largest pool of engineers and scientists is from India.",
    },
    {
      fact: "India is the second largest English speaking country in the world  125,226,449 numbers of English speakers.",
    },
    {
      fact: "India has the worlds largest Hindu population. Nearly 81% of its population identifies itself as Hindu. India is one of the three countries (other are Nepal and Mauritius) in the world where Hinduism is the majority.",
    },
    {
      fact: " Did you know that a sharp shooter from India who is more than 80 years old; and who started her shooting career in her late sixties is the oldest (woman) sharp shooter in the world? Chandro Tomar known as “Shooter Dadi” was born in Shamli, Uttar Pradesh, India. To date she has won more than 25 national championships and counting. She has won gold at the Veteran Shooting Championship held in Chennai. Her top honour is a national bronze. Interestingly, she began shooting by chance when she took her granddaughter to a nearby rifle club. Apart from her shooting skills, she also looks after her big family and does regular household chores. She also maintains a Twitter account. ",
    },
    {
      fact: "India is the only country to have an entire ocean named after it, i.e. Indian Ocean. Commonly, there are a total of five oceans in the world, namely; Atlantic Ocean, Arctic Ocean, Indian Ocean, Pacific Ocean and Southern Ocean.",
    },
    {
      fact: "India has the fastest growing telecom market and cheapest telecom tariff in the world.",
    },
    {
      fact: " Navi Mumbai, a planned satellite township of Mumbai, is the largest planned city in the world. Its development was started in 1972 to de-congest Mumbai.",
    },
    { fact: "London has more Indian restaurants than Mumbai or Delhi." },
    {
      fact: "If you are amazed after reading about the Shooter Dadi, here is another fascinating person for you to learn about: Fauja Singh  the oldest marathon runner in the world. He was born on 1st April, 1908 in Beas Pind, Punjab, British India. To inspire you further, it is important to mention here that Fauja Singh was not able to walk until he was five years old. He took up running at the age of 89 and when he first showed up for the marathon running training, he was in three-piece suit. He was featured alongside Mohammad Ali and David Beckham in an advertising campaign in 2004 by Adidas. He competed in his last marathon race in Hong Kong in 2013 clocking 1 hour 32 minutes and 28 seconds until he reached the finish line.",
    }
  );
   

  /// never touch the code if it is working

    ///------ never ever put title in all capital words it will ruin the work of javascript in the page

    // ---------generate a number

    let factindex = Math.floor(Math.random() * factlist.length - 1);

    // ---------if else statement in the favour of interest

    if (factindex != -1) {
      let a = document.getElementById("fact");
        let b = a.innerHTML = factlist[factindex].fact;
      // console.log("fact-grabber : fact submitted")
    } else {
      console.log("fact-solver-code executed: error solved");

      try {
        
        
        let factindex = Math.floor(Math.random() * (factlist.length - 1));
        //console.log(factindex);
        let a = document.getElementById("fact");
        let b = a.innerHTML = factlist[factindex].fact;
        //let c = (a.innerHTML = factlist[factindex].category);
        // console.log(b);
        
      }
      catch(error){

        console.log("fact-solver-code executed: error solved");

      }
    }

    
    //----------- refresh vbutton

    let refresher = document
      .getElementById("refresh")
      .addEventListener("click", () => {
        let factindex = Math.floor(Math.random() * factlist.length - 1);

    if (factindex != -1) {
      let a = document.getElementById("fact");
        let b = a.innerHTML = factlist[factindex].fact;
      // console.log("fact-grabber : fact submitted")
    } else {
      console.log("fact-solver-code executed: error solved");

      try {
        
        
        let factindex = Math.floor(Math.random() * (factlist.length - 1));
        //console.log(factindex);
        let a = document.getElementById("fact");
        let b = a.innerHTML = factlist[factindex].fact;
        //let c = (a.innerHTML = factlist[factindex].category);
        // console.log(b);
        
      }
      catch(error){

        console.log("fact-solver-code executed: error solved");

      }
    }
});