const app = Vue.createApp({
    data() {
        return {
            books: []
        };
    },
    mounted() {
        this.fetchBooks();
    },
    methods: {
        async fetchBooks() {
            try {
                const response = await axios.get('/browse/Books');
                this.books = response.data.value;
                console.log(response);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        },
        async submitOrder(bookId) {
            try {
                await axios.post('/browse/submitOrder', { book: bookId, quantity: 1 });
                alert('Order submitted successfully!');
            } catch (error) {
                console.error('Error submitting order:', error);
                alert('Failed to submit order. Please try again.');
            }
        }
    }
});

app.mount('#app');
