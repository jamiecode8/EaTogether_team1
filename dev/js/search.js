<script>
        Vue.component('location',{
            props: [''],
            template: `
            <p class="sectionIconInf">store.address</p>
            `,
            data(){
                return {
                };
            },
            mounted() {
            },
            methods: {
                // getInf(){
                //     this.$emit('storeinf-emit');
                // },
            },    
        });
        Vue.component('station',{
            template: `
            <p class="sectionIconInf" @click='getInf'>store.station</p>
            `,
        });
        Vue.component('phone',{
            template: `
            <p class="sectionIconInf">store.phone</p>
            `,
        });
        Vue.component('price',{
            template: `
            <p class="sectionIconInf">store.price</p>
            `,
        });
        //search
        new Vue({
            el: '#app',
            data: {
                choices:[],//whatToEat答案
                isSearchBoard:false,
                isShowLine:false,
                mrtLine:['板南線','淡水信義線','松山新店線','文湖線','中和新蘆線'],
                searchLine:'',
                findFood:'',
                searchTags:'',
                isShowTag:false,                                                                               						
                tags:['#日式','#韓式','#美式','#義式','#台式','#法式','#中式','#夜市','#商業午餐','#早午餐','#下午茶','#銅板美食','#簡餐','#聚餐','#餐酒館','#咖啡店','#甜點','#麵食','#鹽酥雞','#雞排','#咖哩','#火鍋','#牛排','#拉麵','#鐵板燒'],
                isTyped:false,
                content:'',//question compoment
                isSearchStores:false,
                isStoreInf:false,
                stores: [],//ajax
                isSearchNothing:false,
                isSearchReport:false,
                heartGrayscale:1,
                warnOpacity:0.5,
                coupon:'領取優惠',
                report:'',
                inf:'',
                infoOpacity:1,
            },
            methods: { 
                //whatToEat
                nextQ(){
                    this.content = String(parseInt(this.content)+1);
                },
                preQ(){
                    this.content = String(parseInt(this.content)-1);
                },
                answerQ(selected){
                    let index = parseInt(this.content)-1;
                    this.choices[index] = selected;
                    console.log(this.choices);
                },
                callAjaxQ(){
                    console.log(this.choices);
                    alert('send To Backend');
                    this.choices =['','','',''];
                },
                closeQ(){
                    this.content = '';
                    this.choices =['','','',''];
                },
                againQ(){
                    this.content = '1';
                    this.choices =['','','',''];
                },
                //search
                closeSearch(number){
                    if(number == 1){
                        this.isSearchBoard = false;
                        this.searchLine = '';
                        this.findFood = '';
                        this.searchTags ='';
                        this.isSearchNothing=false;
                    }else if(number == 2){
                        this.isSearchStores = false;
                        this.findFood = '';

                    }else if(number == 3){
                        this.isStoreInf = false;
                        this.findFood = '';
                    }else if(number == 4){
                        this.isShowTag = false;
                    }else if(number == 5){
                        this.isSearchReport = false;
                        this.warnOpacity = 0.5;                   
                    }
                   
                },
                show(){
                    this.optionList = !this.optionList;  
                },
                //打開搜尋彈窗
                searchIcon(){
                    this.isSearchBoard = !this.isSearchBoard;  
                },
                //捷運線選單
                showLine(){
                    this.isShowLine = !this.isShowLine;
                },
                myline(line){
                    this.searchLine= line;
                    this.isShowLine = false;
                    this.isSearchNothing=false;
                },
                myTag(tag){
                    this.searchTags = tag;
                    this.isShowTag = false;
                },
                showTag(number){
                    if(number==3 && this.findFood==''){
                        this.isShowTag = !this.isShowTag;
                        this.isSearchNothing=false;
                    }
                    if(number==1){
                        this.searchTags='';
                        this.isSearchNothing=false;
                    }
                },
               
                searchFood(){
                    if(this.findFood !=''||this.searchTags !=''||this.searchLine != ''){
                        this.searchLine = '';
                        this.findFood = '';
                        this.searchTags ='';
                        console.log(this.findFood,this.searchLine,this.searchTags);
                        alert('Ajax send to backend');
                        this.isSearchBoard = false;
                        this.isSearchStores = true;
                        this.isSearchNothing = false;                   
                    }else{
                        this.isSearchNothing =true;                   
                     }
                  
                },
                showStores(){
                    this.isSearchStores = true;
                },
                finalStoreInf(){
                    this.isSearchStores = false;
                    this.isStoreInf = true;
                },
                searchSomething(){
                    if( this.findFood != '' && this.findFood != '請輸入食物'){
                        alert('Ajax send to backend');
                        this.isStoreInf = false;
                        this.isSearchStores = true;
                        this.findFood = '';
                    }else{
                        this.findFood = '請輸入食物';
                    }
                },
              
                getStoreReported(){
                    this.isSearchReport = true;
                    this.warnOpacity = 1;                   
                },
                sendReport(){
                    alert('sent to backend');
                    console.log(this.report);
                    this.report='';
                    this.isSearchReport = false;
                    this.warnOpacity =0.5;
                },
                getCoupon(){
                    alert('Ajax send to backend');
                    this.coupon = "領取過了";   
                },
                toCollect(){
                    if(this.heartGrayscale == 0){
                        this.heartGrayscale=1;
                        alert('remove from collection')
                    }else{
                        alert('send to backend  my collection');               
                        console.log('{{this.store}}');
                        this.heartGrayscale=0;
                    }
                },
            
            },
            computed:{
                findFoodClass(){
                    return{
                        noText: this.findFood.length === 0,                    
                    }
                },
                searchLineClass(){
                    return{
                        noText: this.searchLine.length === 0,                    
                    }
                },
                searchTagsClass(){
                    return{
                        noText: this.searchTags.length === 0,                    
                    }
                },
                collectionClass(){
                    return{
                        filter:`grayscale(${this.heartGrayscale})`,
                    }
                },
                signOpacity(){
                    return{
                        filter:`opacity(${this.warnOpacity})`,
                    }
                },
                storeInfOpacity(){
                    return{
                        filter:`opacity(${this.infoOpacity})`,
                    }
                }

               
                
            },
            //後端傳資料
            // mounted() {
            //     axios.get('stores的json檔')
            //          .then(res => this.stores = res.data)  //成功時候的處理函數
            //          .catch(error => console.log(error))
            //     fetch('stores的json檔').then(res=>res.json()).then(res => this.stores=res);     
            // },
           
        });
    </script>    
