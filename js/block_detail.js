var app = new Vue({
    el: '#app',
    data: {
        blockNumber: 0, 
        difficulty: 0,
        nonce:0,
        time:0, 
        nTx:0,
        hash:0,
        transaction_list: [],
        vin: [],
        out: [],
        query: window.location.search,
        block_detail: '',
        block_detail_str: '',
        nextHash:0,
        priHash:0,
        merkerRoot:0,
        bits:0,
        fee:1,
        pay:1,
        weight:0,
        size:0,
        total:1,
        firstTx:[]
    }, 

    created () {
        this.get_block_detail();
    },
    methods:{
        
    }
});
