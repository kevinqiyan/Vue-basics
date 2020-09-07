<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="wrap">
        <div id="list">
            <div @click = 'test'>测试定位{{time}}</div>
            <div>测试数据1</div>
            <div>定位测试1</div>
            <div>粘性定位1</div>
            <div>固定定位1</div>
        </div>

    </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script>
    new Vue().$mount('#wrap')
    export default{
        data() {
            return {
                time:0
            }
        },
        mounted() {
            
        },
        methods: {
            test(){
                time++
            }
        },
        computed: {
        },
    }
</script>
<script>

</script>
<style>
    ul li{
        list-style: none;
    }
    #wrap{
        width: 360px;
        height:100vh;
        /* background-color: #bbffaa; */
    }
    #list{
        width: 100%;
        height: 100%;
    }
    #list div{
        width: 100%;
        height: 60px;
        font-size: 14px;
        color: black;
        background-color: #bbffcc;
        border-radius: 8px;
        margin:10px 0;
    }
</style>
</html>