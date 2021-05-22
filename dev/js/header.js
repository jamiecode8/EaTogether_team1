// 會員登出與修改資料的彈窗
new Vue({
    el: '.app',
    data: {
        toggle: false,
    },
    methods: {
        header_toggle(){
            this.toggle = !this.toggle;
        },
    },
});