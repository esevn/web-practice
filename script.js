// selected all filter buttons and filterable cards
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");               

// define the filter function
const filterCards = e => {
    document.querySelector(".aktif").classList.remove("aktif");
    e.target.classList.add("aktif");
    console.log(e.target);
// itereate over each filterable
    filterableCards.forEach(card => {
        // Add "hide class to hide the card initially"
        card.classList.add("hide");         
        
        // check if the card matches the selected filter or "all" is selected
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }   
    });
};                  

console.log(filterButtons, filterableCards);




//add click event listener to each filterbuttons 
filterButtons.forEach(button => button.addEventListener("click", filterCards));