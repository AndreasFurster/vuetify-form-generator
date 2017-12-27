<template>
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
</template>

<script>
    
</script>