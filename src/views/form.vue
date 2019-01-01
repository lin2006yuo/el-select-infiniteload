<template>
    <div>
        <Card>
            <p slot="title">基础</p>
            <Form
                    ref="form"
                    :model="formDate"
                    :label-width="80"
                    :rules="rules"
            >
                <FormItem label="姓名" prop="name">
                    <Input v-model="formDate.name" placeholder="qwe"/>
                </FormItem>
                <FormItem label="年龄">
                    <Input v-model="formDate.age" placeholder="qwe"/>
                </FormItem>
                <FormItem>
                    <Button @click="handleSubmit" type="primary">提交</Button>
                </FormItem>
            </Form>
        </Card>
        <Card>
            <p slot="title">动态表单</p>
            <form-group :list="formList"></form-group>
        </Card>
        <Card>
            <p slot="title">自定义组件</p>
            <component is="el-input"></component>
        </Card>
        <Card>
            <p slot="title">保持总数</p>
            <div><span>计算属性：</span><input type="text" v-model="com"></div>
            <div><span>总数</span>{{sum}}</div>
            <div><span>良品：</span><input min="0" :max="sum" type="number" :value="liang" @input="e => {l = e.target.value;c = sum - e.target.value}"></div>
            <div><span>次品：</span><input min="0" :max="sum" type="number" :value="chi" @input="e => {c = e.targer.value;l = sum - e.target.value}"></div>
        </Card>
    </div>
</template>

<script type="text/ecmascript-6">
    import {sendFormData} from '@/api/data'
    import FormGroup from '@/components/form-group'

    //自定义验证
    const validateName = (rule, value, callback) => {
        if (value !== 'lxy') {
            callback(new Error('Name error'))
        } else {
            callback()
        }
    }
    export default {
        components: {
            FormGroup
        },
        data() {
            return {
                sum: 5,
                formDate: {
                    name: '',
                    age: ''
                },
                rules: {
                    name: [
                        {required: true, message: '不能为空', trigger: 'blur'},
                        {validator: validateName, message: '名字填写错误', trigger: 'blur'}
                    ]
                },
                formList: [
                    {
                        name: 'name',
                        type: 'i-input',
                        value: '',
                        label: '姓名',
                        rules: [
                            {required: true, message: '不能为空', trigger: 'blur'}
                        ]
                    },
                    {
                        name: 'range',
                        type: 'slider',
                        value: [10, 40],
                        range: true,
                        label: '范围'
                    },
                    {
                        name: 'sex',
                        type: 'i-select',
                        value: '',
                        label: '性别',
                        children: {
                            type: 'i-option',
                            list: [
                                {value: 'man', label: '男'},
                                {value: 'woman', label: '女'}
                            ]
                        }
                    },
                    {
                        name: 'education',
                        type: 'radio-group',
                        value: '',
                        label: '学历',
                        children: {
                            type: 'radio',
                            list: [
                                {label: '本科', title: '本科'},
                                {label: '研究生', title: '研究生'},
                                {label: '博士', title: '博士'},
                            ]
                        }
                    },
                    {
                        name: 'skill',
                        type: 'checkbox-group',
                        value: [],
                        label: '技能',
                        children: {
                            type: 'checkbox',
                            list: [
                                {label: 'vue', title: 'vue2'},
                                {label: 'nodejs', title: 'nodejs2'},
                                {label: 'mysql', title: 'mysql2'},
                            ]
                        }
                    },
                    {
                        name: 'inWork',
                        type: 'i-switch',
                        value: true,
                        label: '在职'
                    }
                ],
                l: 5,
                c: 0
            }
        },
        computed: {
            liang() {
                return +this.sum - +this.c
            },
            chi() {
                return +this.sum - +this.l
            },
            com: {
                get() {
                    return 1
                },
                set(old) {
                    console.log(old)
                }
            }
        },
        methods: {
            handleSubmit() {
                this.$refs.form.validate(valid => {
                    if (valid) {
                        sendFormData().then(res => {
                            console.log(res)
                        })
                    }
                })
            },
            handleInput(e) {
                console.log(e)
            }
        }
    };
</script>

<style scoped lang="stylus">
</style>
