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
            text += "<table width=1551 border:0 class = 'chtable' id ='thetable'>\
            <colgroup><col width='100'>\
            <col width='600'>\
            <col width='100'>\
            <col width='751'>\
            </colgroup>\
            <tbody><tr width=1551px style='border: none;'>";
      
            text += "<tr><td></td><td></td><td></td><td></td></tr>"; 

            text += "<tr><td style=\"border:0 none;\"> 区块高度</td><td style=\"border:0 none;\"> 522</td>";
            text += "<td style=\"border:0 none;\">区块哈希：</td><td style=\"border:0 none;\">DADA9DA0000D9AD0A00000000000000000000000000000000aa:</td></tr>";   
                  
            text += "<tr><td style=\"border:0 none;\">区块数据：</td><td height=\"200px\" style=\"border:0 none;\"><input name=\"txtname\" type=\"text\" style=\"width:400px;height:200px;border: 1px solid;\" ></td>"; 
            text += "<td style=\"border:0 none;\">数据：</td><td height=\"200px\" style=\"border:0 none;\"><input name=\"txtname\" type=\"text\" style=\"width:400px;height:200px;border: 1px solid;\" ></td></tr>"; 

            text += "<tr><td></td><td></td><td></td><td></td></tr>";

            text += "<tr><td style=\"border:0 none;\"> 区块高度</td><td style=\"border:0 none;\"> 522</td>";
            text += "<td style=\"border:0 none;\">区块哈希：</td><td style=\"border:0 none;\">DADA9DA0000D9AD0A00000000000000000000000000000000aa:</td></tr>";   
                  
            text += "<tr><td style=\"border:0 none;\">区块数据：</td><td height=\"200px\" style=\"border:0 none;\"><input name=\"txtname\" type=\"text\" style=\"width:400px;height:200px;border: 1px solid;\" ></td>"; 
            text += "<td style=\"border:0 none;\">数据：</td><td height=\"200px\" style=\"border:0 none;\"><input name=\"txtname\" type=\"text\" style=\"width:400px;height:200px;border: 1px solid;\" ></td></tr>"; 


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
