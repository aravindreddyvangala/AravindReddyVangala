
const dictionary = {
    "tea": "A hot drink made by infusing the dried crushed leaves of the tea plant in boiling water.",
    "coffee": "A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.",
    "water": "A colorless, transparent, odorless liquid that forms the seas, lakes, rivers, and rain and is the basis of the fluids of living organisms.",
    "burger": "A sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.",
    "milkshake": "A cold, sweet beverage made from milk, ice cream, and flavorings or syrups.",
    "milk": "An opaque white fluid rich in fat and protein, secreted by female mammals for the nourishment of their young.",
    "chocolate milk": "A sweetened chocolate-flavored version of milk.",
    "warm milk": "Milk that has been heated to a warm temperature, often consumed before bedtime for its calming effects.",
   "bomasum" : "the fourth stomach of a ruminant, such as a cow or sheep (noun)",
    "Absquatulate" : "to leave somewhere abruptly (verb)",
     "Bailiwick" : "a person's area of skill, knowledge, authority, or work (noun)",
     "Bafflegab" : "confusing or generally unintelligible jargon (noun)",
     "Ballistic" : "having its motion determined or describable by the laws of exterior (adjective)",
     " Calamity" : "a great misfortune or disaster (noun)",
      " Calliope" : "a musical instrument consisting of a set of harsh-sounding steam whistles that are activated by a keyboard (noun)",
    " Catamaran" :" a vessel, usually propelled by sail, formed of two hulls or floats held side by side by a frame above them (noun)",
     "Demitasse" : "a small cup for serving strong black coffee after dinner (noun)",
     "Derecho" : "a widespread and severe windstorm that moves rapidly along a fairly straight path and is associated with bands of rapidly moving thunderstorms (noun)",
    " Diphthong" : "a sound formed by the combination of two vowels in a single syllable, in which the sound begins as one vowel and moves toward another (noun)",
    "Related": "300 Words to Describe Yourself",
    " Earwig" :"any of numerous elongate, nocturnal insects of the order Dermaptera, having a pair of large, movable pincers at the rear of the abdomen (noun)",
     "Elixir":"a sweetened, aromatic solution of alcohol and water containing, or used as a vehicle for, medicinal substances (noun)",
     "Ephemeral" :"lasting a very short time (adjective)",
    " Finagle" : "to cheat a person (verb)",    
     "Festooned ": "a string or chain of flowers, foliage, ribbon, etc., suspended in a curve between two points (noun)",
     "Gadzooks" : "an exclamation of surprise or annoyance (interjection)",
     "Gambit" : "a device, action, or opening remark (noun)",
    " Gazebo" :"a freestanding roofed structure usually open on the sides (noun)",
     "Haboob" : "a thick dust storm or sandstorm that blows in the deserts of North Africa and Arabia or on the plains of India (noun)",
     "Halcyon ": "calm (adjective)",
     "Haphazard" : "characterized by lack of order or planning, by irregularity, or by randomness (adjective)",
     "Ignoramus" : "an extremely ignorant person (noun)",
     "Infinitesimal" : "indefinitely or exceedingly small (adjective)",
     "Interrobang" : "a printed punctuation mark (‽), available only in some typefaces, designed to combine the question mark (?) and the exclamation point (!) (noun)",
     "Jabberwocky ": "a playful imitation of language consisting of invented, meaningless words (noun)",
    " Jalopy" : "an old, decrepit, or unpretentious automobile (noun)",
     "Jitney ": "a small bus or car following a regular route along which it picks up and discharges passengers (noun)",
     "Kaput ":" ruined; done for; demolished (adjective)",
     "Kerfuffle ":" a fuss; commotion (noun)",
    "Kerplunk" : "with or as if with a sudden muffled thud (adverb)",
     "Lackadaisical" :" without interest, vigor, or determination; listless; lethargic (adjective)",
     "Lampoon" : "a sharp, often virulent satire directed against an individual or institution (noun)",
     "Limburger" :" a variety of soft white cheese of strong odor and flavor (noun)",
     "Machinations ": "an act or instance of a plot (noun)",
    " Maelstrom" :" a large, powerful, or violent whirlpool (noun)",
    " Manifesto" : "a public declaration of intentions, opinions, objectives, or motives, as one issued by a government, sovereign, or organization (noun)"

};


function searchDictionary() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const resultList = document.getElementById("result-list");
    resultList.innerHTML = ""; // Clear previous results

    if (input.trim() !== "") {
        for (const word in dictionary) {
            if (word.includes(input)) {
                const listItem = document.createElement("li");
                listItem.textContent = `${word}: ${dictionary[word]}`;
                resultList.appendChild(listItem);
            }
        }
    } else {
        resultList.innerHTML = "<li>No results found</li>";
    }
}


document.getElementById("search-input").addEventListener("input", searchDictionary);
