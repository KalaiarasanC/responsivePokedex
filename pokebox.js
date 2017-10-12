var pokeCollection = {
    'crd-1': {
        id: 'pok-1',
        name: 'bulbasaur',
        imglink: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
        rank: '001',
        species: 'Seed Pokemon',
        height: '2′4″ (0.71m)',
        weight: '15.2 lbs (6.9 kg)',
        ability: 'Overgrow'
    },
    'crd-2': {
        id: 'pok-2',
        name: 'ivyaurs',
        imglink: "https://img.pokemondb.net/artwork/ivyaurs.jpg",
        rank: '002',
        species: '3′3″ (0.99m)',
        height: '2′4″ (0.71m)',
        weight: '28.7 lbs (13.0 kg)',
        ability: 'Overgrow'
    },
    'crd-3': {
        id: 'pok-3',
        name: 'venusaur',
        imglink: "https://img.pokemondb.net/artwork/venusaur.jpg",
        rank: '003',
        species: 'Seed Pokémon',
        height: '6′7″ (2.01m)',
        weight: '220.5 lbs (100.0 kg)',
        ability: 'Overgrow'
    },
    'crd-4': {
        id: 'pok-4',
        name: 'charmander',
        imglink: "https://img.pokemondb.net/artwork/charmander.jpg",
        rank: '004',
        species: 'Lizard Pokémon',
        height: '2′0″ (0.61m)',
        weight: '18.7 lbs (8.5 kg)',
        ability: 'Blaze'
    },
    'crd-5': {
        id: 'pok-5',
        name: 'charmeleon',
        imglink: "https://img.pokemondb.net/artwork/charmeleon.jpg",
        rank: '005',
        species: 'Flame Pokémon',
        height: '3′7″ (1.09m)',
        weight: '41.9 lbs (19.0 kg)',
        ability: 'Blaze'
    },
    'crd-6': {
        id: 'pok-6',
        name: 'charizard',
        imglink: "https://img.pokemondb.net/artwork/charizard.jpg",
        rank: '006',
        species: 'Flame Pokémon',
        height: '5′7″ (1.70m)',
        weight: '199.5 lbs (90.5 kg)',
        ability: 'Blaze'
    },
    'crd-7': {
        id: 'pok-7',
        name: 'Squirtle',
        imglink: "https://img.pokemondb.net/artwork/squirtle.jpg",
        rank: '007',
        species: 'Tiny Turtle Pokémon',
        height: "'1′8″ (0.51m)'",
        weight: '19.8 lbs (9.0 kg)',
        ability: 'Torrent'
    },
    'crd-8': {
        id: 'pok-8',
        name: 'Wartortle',
        imglink: "https://img.pokemondb.net/artwork/wartortle.jpg",
        rank: '008',
        species: 'Turtle Pokémon',
        height: "'3′3″ (0.99m)'",
        weight: '49.6 lbs (22.5 kg)',
        ability: 'Torrent'
    },
    'crd-9': {
        id: 'pok-9',
        name: 'Blastoise',
        imglink: "https://img.pokemondb.net/artwork/blastoise.jpg",
        rank: '009',
        species: 'Shellfish Pokémon',
        height: "'5′3″ (1.60m)'",
        weight: '188.5 lbs (85.5 kg)',
        ability: 'Torrent'
    },
    'crd-10': {
        id: 'pok-10',
        name: 'Caterpie',
        imglink: "https://img.pokemondb.net/artwork/caterpie.jpg",
        rank: '010',
        species: 'Worm Pokémon',
        height: '1′0″ (0.30m)',
        weight: '6.4 lbs (2.9 kg)',
        ability: 'Shield Dust'
    },
    'crd-11': {
        id: 'pok-11',
        name: 'Metapod',
        imglink: "https://img.pokemondb.net/artwork/metapod.jpg",
        rank: '011',
        species: 'Cocoon Pokémon',
        height: '2′4″ (0.71m)',
        weight: '21.8 lbs (9.9 kg)',
        ability: 'Shed Skin'
    },
    'crd-12': {
        id: 'pok-',
        name: '',
        imglink: "https://img.pokemondb.net/artwork/.jpg",
        rank: '00',
        species: '',
        height: '',
        weight: '',
        ability: ''
    }
};

var isMenuOpen = true;
var menuElmnt = document.getElementById('openMenu');
var card = document.querySelectorAll('.col-md-2'); 
function sideMenu() {

    if (!isMenuOpen) {
        document.getElementById("menubar").setAttribute('class', 'dispcls');
    } else {
        document.getElementById("menubar").removeAttribute('class', 'dispcls');
    }

    isMenuOpen = isMenuOpen ? false : true;
}

menuElmnt.addEventListener('click', sideMenu);

for (var i = 0; i < card.length; i++) {

    card[i].addEventListener('click', showModal, true);
}

function showModal(e) {
    key = this.id;
    obj = pokeCollection[key];

    document.getElementById('pokeName').innerHTML = obj.name;
    document.getElementById('pokeImg').src = obj.imglink;
    document.getElementById('rank').innerHTML = obj.rank;
    document.getElementById('speci').innerHTML = obj.species;
    document.getElementById('hght').innerHTML = obj.height;
    document.getElementById('weight').innerHTML = obj.weight;
    document.getElementById('ability').innerHTML = obj.ability;

}

function filterByName(){

var key = document.getElementById('search_poke').value;
// console.log(key);
    var cards = document.getElementById('cards');
    var item =  cards.getElementsByClassName('col-md-2');
// console.log(cards);
    for(var i=0; i<item.length; i++){       
      var val = item[i].getElementsByClassName('name')[0].innerHTML;
          if(val.toUpperCase().indexOf(key.toUpperCase()) > -1 )
          {
              item[i].style.display='';
        } else{
            item[i].style.display='none';
        }
    }
        // console.log(val);
}