<template>  
    <div>
        <div class="border"></div>
        <div class="width">我是文字</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.border {
    width: 0;
    border: 100px solid;
    border-color: red green orange blue;
}
.width {
    padding: 20px;
    border: 1px solid #000;
    display: inline-block;
    margin: 20px;
}
</style>
