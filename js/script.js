//Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
//Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
new Vue (
    {
        el: "#app",
        data: {
            text: "Ciao Noemi! Ricorda: il caldo non esiste!",
            model: "",
            img: "https://via.placeholder.com/150",   //img dentro al v-bind
            classContent: "hidden"
        }, 
        methods: {
            showElement : function(){
                this.classContent = "show";
                this.img = "./img/girasole.jpg"
            } 
        }
        
    }
)



