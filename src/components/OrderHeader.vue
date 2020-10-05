<template>
    <div class="order-header">
        <div class="container clearfix">
            <div class="header-logo">
                <a href="/#/index"></a>
            </div>
            <div class="title">
                <h2>{{title}}<slot name="tip"></slot></h2>
            </div>
            <div class="username">
                <a href="javascript:;">jack</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'order-header',
    props:{
        title:String
    }
}
</script>
<style lang="scss">
    .order-header{
        padding: 30px 0;
        .header-logo{
            float: left;
        }
        .title,.username{
            display: inline-block;
            height: 55px;
            line-height: 55px;
        }
        .title{
            font-size: 18px;
            float: left;
            color: #333333;
            margin-left: 54px;
            span{
                font-size: 12px;
                margin-left: 17px;
                color: #999999;
                font-weight: bold;
            }
        }
        .username{
            float: right;
            a{
                color: #666666;
                font-size: 16px;
            }
        }
    }
</style>