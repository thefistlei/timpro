var app = new Vue({
    el: '#app',
    data: {
        totalNum: 1, 
        server_list: [], 
    },
    created () {
        console.log('1') 
         
        this.getAllFile();
        this.get_block_detail();
    },
    destroyed() {
         //页面关闭时清空
         this.clear();
    },
    methods:{
        // 停止定时器
        clear() { 
            console.log("clear ----------------------");
        },
 
        getFileData: function(i){    
            var data = {};    
            data["name"] = i;                      
            data["filesize"] = "1M";
            data["state"] = "OK"
            data["attr"] = "XXX"
              
            this.server_list.push(data); 
        },        
        
        getAllFile: function(){ 
             this.server_list = [];  
             var nLen = 2;
             for (i=0; i < nLen; i++) {  
                this.getFileData("0");  
             }                
        },

        isArrayContain: function(arr, val){    
            let result = false;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === val) {
                    return i;
                }
            }
            return -1;
        }, 
           
        getArrayMax: function(arr){    
            let val = -1;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] > val) {
                    val = arr[i];
                }
            }
            return val;
        },      
         
        isNumber(val) {
            var regPos = /^\d+(\.\d+)?$/; //非负浮点数
            if(regPos.test(val)) {
                return true;
            } 
            else {
                return false;
            }
        },

        search_block(){ 
        },

        appendTx:function(){ 
             
            var trObj1 = document.createElement("tr");  

            //txin and txout
            //
            var text = "<tr style='border: none;'><td>";
            text += "<table width=1351 class = 'chtable'>\
            <colgroup><col width='200'>\
            <col width='601'>\
            </colgroup>\
            <tbody><tr width=1351px style='border: none;'>";

            text += "<tr><td>区块高度：</td><td>522</td></tr>";   
            text += "<tr><td>区块哈希：</td><td>DADA9DA0000D9AD0A00000000000000000000000000000000</td></tr>";      
 
            text += "<tr><td>区块高度：</td><td>522</td></tr>";   
            text += "<tr><td>区块哈希：</td><td>DADA9DA0000D9AD0A00000000000000000000000000000000</td></tr>";

            //col table end
            text += "</tr></tbody></table>";  
 
            text += "</td></tr>";  
            trObj1.innerHTML = text; 
            document.getElementById("tb").appendChild(trObj1); 
        },

        get_block_detail: function(){ 
            this.appendTx();                
        },
    }
});
