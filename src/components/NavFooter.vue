<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="">
            <p>博睿商城</p>
        </div>
        <div class="footer-link">
            <a href="https://github.com/ljr7822" target="_blank">iwen大大怪Github</a><span>|</span>
            <a href="https://www.jianshu.com/u/1487025239ff" target="_blank">大大怪简书主页</a><span>|</span>
            <a href="https://juejin.im/user/3702810894932487" target="_blank">大大怪掘金主页</a><span>|</span>
            <a href="https://blog.csdn.net/qq_43681227" target="_blank">大大怪CSDN主页</a>
        </div>
        <div class="Copyright">Copyright @2020 mimall</div>
    </div>
</template>
<script>
export default {
    name:'nav-footer'
}
</script>
<style lang="scss">
@import './../assets/sass/config.scss';
    .footer{
        height: 234px;
        border-top: 4px solid $colorA;
        background-color: $colorB;
        color: $colorD;
        font-size: 16px;
        text-align: center;
        .footer-logo{
            margin-top: 46px;
            margin-bottom: 31px;
            img{
                width: 53px;
                height: 36px;
                margin-bottom: 13px;
            }
        }
        .footer-link{
            a{
                color: $colorD;
                display: inline-block;
            }
            span{
                margin: 0 10px;
            }
            margin-bottom: 13px;
        }
    }
</style>