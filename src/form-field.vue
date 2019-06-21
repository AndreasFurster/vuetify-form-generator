<template>
	<div>
		<div v-if="field.type == 'email'">
			 <v-text-field
		      v-model="localValue"
		      :label="field.label"
		      :required="field.required"
		      :readonly="field.readonly"
		      :disabled="field.disabled"
		      :placeholder="field.placeholder"
		      :rules="validationRules.email"
		      @blur="onBlur"
		      @change="onChange"
		      @focus="onFocus"
		      @input="onInput"
		    ></v-text-field>
		</div>

		<div v-else-if="field.type == 'password'">
			 <v-text-field
		      v-model="localValue"
		      :label="field.label"
		      :required="field.required"
		      :readonly="field.readonly"
		      :disabled="field.disabled"
		      :placeholder="field.placeholder"
		      :append-icon="field.passwordVisible ? 'visibility_off' : 'visibility'"
              :append-icon-cb="appendPasswordIconCheckbox()"
              :type="field.passwordVisible ? 'text' : 'password'"
		      @blur="onBlur"
		      @change="onChange"
		      @focus="onFocus"
		      @input="onInput"              
		    ></v-text-field>
		</div>

		<div v-else-if="field.type == 'select'">
		    <v-select
              v-model="localValue"
              :items="field.values"
              :label="field.label"
		      :required="field.required"
		      :readonly="field.readonly"
		      :disabled="field.disabled"
              single-line
              bottom

            ></v-select>
		</div>


		<div v-else-if="field.type == 'checkbox'">
		    <v-checkbox
              v-model="localValue"
              :label="field.label"
		      :required="field.required"
		      :disabled="field.disabled"
            ></v-checkbox>
		</div>

		<div v-else-if="field.type == 'textarea'">
			 <v-text-field
		      v-model="localValue"
		      :label="field.label"
		      :required="field.required"
		      :readonly="field.readonly"
		      :disabled="field.disabled"
		      :placeholder="field.placeholder"
		      multi-line
		      v-bind:textarea="field.featured"
		      @blur="onBlur"
		      @change="onChange"
		      @focus="onFocus"
		      @input="onInput"		      
		    ></v-text-field>
		</div>

		<div v-else>
			 <v-text-field
		      v-model="localValue"
		      :label="field.label"
		      :required="field.required"
		      :readonly="field.readonly"
		      :disabled="field.disabled"
		      :placeholder="field.placeholder"
			  :counter="field.counter"
			  :hint="field.hint"
		      @blur="onBlur"
		      @change="onChange"
		      @focus="onFocus"
		      @input="onInput"			  
		    ></v-text-field>


		    <v-alert v-if="field.type != 'text'" color="error" icon="warning" value="true">
		    	<strong>The {{field.type}} type is not yet implemented.</strong> <br>
		   		{{field}}
		    </v-alert>
		    
		</div>
	</div>
</template>

<script>
	export default{
		name: 'v-form-generator-field',
		props: {
			field: Object,
			value: null
		},
		data(){
			return {
				localValue: this.value,
				validationRules: {
					email: [
						(v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || this.validationErrorMessages.emailInvalid
					]
				},
				validationErrorMessages:{
					'emailInvalid': 'E-mail must be valid'
				}
			}
		},
		created: function () {
			// On load
		},
		methods: {
			onBlur: function(){
				this.$emit('blur')
			},
			onChange: function(evt){
				this.$emit('change', { model: this.field.model, value: evt })
			},
			onFocus: function(){
				this.$emit('focus')
			},
			onInput: function(evt){
				this.$emit('input', { model: this.field.model, value: evt })
			},
			
			appendPasswordIconCheckbox(){
				return () => this.field.passwordVisible = !this.field.passwordVisible
			}
		}
	}
</script>