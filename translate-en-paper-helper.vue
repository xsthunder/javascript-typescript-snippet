<template>
<div>
    <div>
        <textarea v-model="text" cols="30" rows="10"></textarea>
        <button @click="go">go</button>
        <button @click="copy">copy</button>
        <textarea v-model="result_text" id="id_result_text" cols="30" rows="10"></textarea>
    </div>
    <div>
        <textarea v-model="text_en" cols="30" rows="10"></textarea>
        <button @click="go_en">go</button>
        <button @click="copy_en">copy</button>
        <textarea v-model="result_text_en" id="id_result_text_en" cols="30" rows="10"></textarea>
    </div>
</div>
</template>
<script>
// yarn global add @vue/cli
// yarn global add @vue/cli-service-global
// vue serve <this_file>
export default {
    data:function(){
        return {
            text:'123',
            result_text:'123',
            text_en:'123 en',
            result_text_en:'123',
        }
    },
    methods:{
        go_en(){
            this.result_text_en = this.text_en
            // repalce newline by space
            this.result_text_en = this.result_text_en.replace(/\n/g,' ')
            // remove special character
            // eslint-disable-next-line no-control-regex
            this.result_text_en = this.result_text_en.replace(/[\u0002]/,'')
        },
        copy_en(){
            const txtarea = document.getElementById("id_result_text_en");
            txtarea.select()
            document.execCommand('copy');
        },
        go(){
            this.result_text = this.text
            // remove newline
            this.result_text = this.result_text.replace(/\n/g,'')
            // remove reference notation like [1,2]
            this.result_text = this.result_text.replace(/\[[\d，,、]+\]/g, '')
            // remove spaces
            this.result_text = this.result_text.replace(/\s/g,'')
        },
        copy(){
            const txtarea = document.getElementById("id_result_text");
            txtarea.select()
            document.execCommand('copy');
        },
    }
}
</script>