const { createApp } = Vue  //creo un objeto VUE llamdo createApp


createApp({
        data() {
    return {
        
        url: 'https://dummyjson.com/quotes?limit=3&skip=10',
        citas: []
        }
    },
    methods: {
        async fetchData(url) {
            const res = await fetch(url);
            data = await res.json();
            // console.log(data.results);
            this.citas = data.results;
            // await fetch(url)
            //     .then(response => response.json())
            //     .then(data => {
            //         this.personajes = data.results;
            //         console.log(this.personajes);
            //     } )
            //     .catch( err => {
            //         console.error(err);
            //     })
            }
    },
    async created() {
        await this.fetchData(this.url)
    }
}).mount('#app')
