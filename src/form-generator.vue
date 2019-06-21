<template>
    <div>
        <div v-for="(schemaItem, schemaItemIndex) in schema">
            <div v-if="schemaItemIndex == 'groups'">
                <v-tabs>
                    <v-tabs-bar class="cyan" dark>
                        <v-tabs-item
                            v-for="group in schemaItem"
                            :key="group.key"
                            :href="'#' + group.key"
                            ripple>
                            {{group.legend}}
                        </v-tabs-item>
                        <v-tabs-slider color="yellow"></v-tabs-slider>
                    </v-tabs-bar>
                    <v-tabs-items>
                        <v-tabs-content
                          v-for="group in schemaItem"
                          :key="group.key"
                          :id="group.key">
                            <div class="ma-3">
                              <div v-for="field in group.fields">
                                <v-form-generator-field 
                                    :field="field" 
                                    :value="model[field.model]"
                                    @blur="onBlur"
                                    @change="onChange"
                                    @focus="onFocus"
                                    @input="onInput"/>
                              </div>
                            </div>
                        </v-tabs-content>
                    </v-tabs-items>
                </v-tabs>

            </div>
            <div v-if="schemaItemIndex == 'fields'">
                <div v-for="field in schemaItem">
                    <v-form-generator-field 
                        :field="field" 
                        :value="model[field.model]" 
                        @blur="onBlur"
                        @change="onChange"
                        @focus="onFocus"
                        @input="onInput">
                    </v-form-generator-field>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'v-form-generator',
        props: {
            'model': Object,
            'schema': Object,
            'options': Object
        },
        components: {
            'v-form-generator-field': require('./form-field.vue').default
        },
        data(){
            return {
                
            }
        },
        created: function () {
            // On load
        },
        methods: {
            onBlur: function(){
                console.info('blur')
                this.$emit('blur')
            },
            onChange: function(evt){
                console.info('change')
                this.$emit('change', evt)
            },
            onFocus: function(){
                console.info('focus')
                this.$emit('focus')
            },
            onInput: function(evt){
                console.log('input')
                this.$emit('input', evt)
            },
        }
    }
</script>