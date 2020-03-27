<template>
    <div style="width:500px">
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
            label-position="left"
        >
            <el-form-item label="认购人账号" prop="num">
                <el-input v-model="ruleForm.num"></el-input>
            </el-form-item>
            <el-form-item label="认购姓名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="认购人性别" prop="sex">
                <el-radio-group v-model="ruleForm.sex">
                    <el-radio label="男"></el-radio>
                    <el-radio label="女"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="电话号码" prop="phone">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="card">
                <el-input v-model="ruleForm.card"></el-input>
            </el-form-item>
            <el-form-item label="开户银行" prop="band">
                <el-input v-model="ruleForm.band"></el-input>
            </el-form-item>
            <el-form-item label="银行卡号" prop="band_card">
                <el-input v-model="ruleForm.band_card"></el-input>
            </el-form-item>
            <el-form-item label="支付宝号码" prop="zfb_num">
                <el-input v-model="ruleForm.zfb_num"></el-input>
            </el-form-item>
            <el-form-item label="联系地址" prop="adress">
                <el-input v-model="ruleForm.adress"></el-input>
            </el-form-item>
            <el-form-item prop="email"  label="邮箱" >
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">提交信息</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            ruleForm: {
                num: '',
                name: '',
                sex: '',
                phone: '',
                card: '',
                band: '',
                band_card: '',
                zfb_num: '',
                adress: '',
                email:''
            },
            rules: {
                num: [{ required: true, message: '请输入认购人账号', trigger: 'blur' }],
                name: [
                    { required: true, message: '请输入认购人姓名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
                ],
                sex: [{ required: true, message: '请选择性别', trigger: 'change' }],
                phone: [{ required: true, message: '请输入电话号码', trigger: 'blur' }],
                card: [{ required: true, message: '请输入身份证号', trigger: 'blur' }],
                band: [{ required: true, message: '请输入开户银行', trigger: 'blur' }],
                band_card: [{ required: true, message: '请输入银行卡号', trigger: 'blur' }],
                zfb_num: [{ required: true, message: '请输入支付宝号码', trigger: 'blur' }],
                adress: [{ required: true, message: '请输入联系地址', trigger: 'blur' }],
                email:[
                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    }
};
</script>