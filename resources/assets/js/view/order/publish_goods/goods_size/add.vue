<template>
    <el-form ref="size_form" :rules="rules"  :model="form" label-width="80px">
        <el-form-item label="尺码名称"  prop="size_name">
            <el-input v-model="form.size_name" placeholder="请输入尺码名称"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import form_page from '@/mixins/form_page'
    import {sizeAdd} from '@/api/goods'
    export default {
        mixins: [form_page],
        data() {
            return {
                form: {
                    size_name: '',
                    goods_id: this.$route.params.id,
                },
                rules: {
                    size_name: [
                        { required: true, message: '尺码名称必须填写', trigger: 'blur' },
                    ],
                }
            }
        },
        methods: {
            onSubmit() {
                if(this.handleValid('size_form')) {
                    this.handleSubmit(sizeAdd(this.form));
                }
            }
        }
    }
</script>