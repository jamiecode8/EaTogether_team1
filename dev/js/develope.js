        Vue.component('jamie',{
            template: `
                <div class="develope_form jamie">
                    <h2>組長</h2>
                    <br>
                    <h1>邱博英</h1>
                    <br>
                    <ul>
                        <li>商家頁面及功能</li>
                        <li>系統分析</li>
                        <li>系統分析</li>
                    </ul>
                    <br>
                    <a href="https://jamiecode8.github.io/tfd101010/" target="_blank">
                        <button class="btn_submit btn_submit_develope">個人網站</button>
                    </a>
                </div>
            `
        });

        Vue.component('chris',{
            template: `
                <div class="develope_form chris">
                    <h2>組員</h2>
                    <br>
                    <h1>楊書旻</h1>
                    <br>
                    <ul>
                        <li>廠商專區頁面</li>
                        <li>登入系統</li>
                        <li>開發架構建置</li>
                    </ul>
                    <br>
                    <a href="https://diary2017.github.io/Gladyme/" target="_blank">
                        <button class="btn_submit btn_submit_develope">個人網站</button>
                    </a>
                </div>
            `
        });

        Vue.component('mimi',{
            template: `
                <div class="develope_form mimi">
                    <h2>組員</h2>
                    <br>
                    <h1>賴彥勳</h1>
                    <br>
                    <ul>
                        <li>廠商專區頁面</li>
                        <li>登入系統</li>
                        <li>開發架構建置</li>
                    </ul>
                    <br>
                    <a href="https://judy8108.github.io/WD101003/landingpage.html" target="_blank">
                        <button class="btn_submit btn_submit_develope">個人網站</button>
                    </a>
                </div>
            `
        });

        Vue.component('levis',{
            template: `
                <div class="develope_form levis">
                    <h2>組員</h2>
                    <br>
                    <h1>顏宏鈞</h1>
                    <br>
                    <ul>
                        <li>廠商專區頁面</li>
                        <li>登入系統</li>
                        <li>開發架構建置</li>
                    </ul>
                    <br>
                    <a href="https://levisedwin.github.io/tdf10121/index.html" target="_blank">
                        <button class="btn_submit btn_submit_develope">個人網站</button>
                    </a>
                </div>
            `
        });

        Vue.component('bobo',{
            template: `
                <div class="develope_form bobo">
                    <h2>組員</h2>
                    <br>
                    <h1>蕭洛棠</h1>
                    <br>
                    <ul>
                        <li>廠商專區頁面</li>
                        <li>登入系統</li>
                        <li>開發架構建置</li>
                    </ul>
                    <br>
                    <a href="https://bobo52400.github.io/Lakeside-Chalet/" target="_blank">
                        <button class="btn_submit btn_submit_develope">個人網站</button>
                    </a>
                </div>
            `
        });

        Vue.component('pamela',{
            template: `
                <div class="develope_form pamela">
                    <h2>組員</h2>
                    <br>
                    <h1>李靜瑩</h1>
                    <br>
                    <ul>
                        <li>視覺規劃</li>
                        <li>首頁頁面</li>
                        <li>搜尋系統</li>
                    </ul>
                    <br>
                    <a href="https://ginny-li.github.io/tanaka/loading.html" target="_blank">
                        <button class="btn_submit btn_submit_develope">個人網站</button>
                    </a>
                </div>
            `
        });

        new Vue({
            el: '#app',
            data: {
                content: 'jamie',
            },
            methods: {
      
            },
            computed: {

            },
        })


        //Vue animation
        // new Vue({
        //     el: '#app',
        //     data: {
        //         content: 'jamie',
        //         show: true
        //     },
        //     mounted: function () {
        //         var self = this;
        //         setInterval(function () {
        //             self.show = !self.show;
        //         }, 1000);
        //     },
        //     methods: {
                
        //     },
        //     computed: {

        //     },
        // })

        // css
        // .fade-enter-active, 
        // .fade-leave-active {
        // transition: opacity 1s;
        // }

        // .fade-enter, 
        // .fade-leave-to {
        // opacity: 0;
        // }
