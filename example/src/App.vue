<template>
	<v-app>
		<div>
			<v-tabs v-model="active">
				<v-tabs-bar class="cyan" dark>
					<v-tabs-item ripple :href="'form'">Form</v-tabs-item>
					<v-tabs-item ripple :href="'model'">Model</v-tabs-item>
					<v-tabs-item ripple :href="'schema'">Schema</v-tabs-item>
					<v-tabs-item ripple :href="'options'">Options</v-tabs-item>
					<v-tabs-slider color="yellow"></v-tabs-slider>
				</v-tabs-bar>
				<v-tabs-items class="ma-5">
					<v-tabs-content :id="'form'">
						<v-form-generator :model="model" :schema="schema" :options="options"/>
					</v-tabs-content>
					<v-tabs-content :id="'model'">
						<pre>{{model}}</pre>
					</v-tabs-content>
					<v-tabs-content :id="'schema'">
						<pre>{{schema}}</pre>
					</v-tabs-content>
					<v-tabs-content :id="'options'">
						<pre>{{options}}</pre>
					</v-tabs-content>
				</v-tabs-items>
			</v-tabs>
		</div>
	</v-app>
</template>

<script>
	export default {
		components: {
			'v-form-generator': require('vuetify-form-generator').default
		},
		data(){
			return {
				model: {
					id: 1,
					name: "John Doe",
					password: "J0hnD03!x4",
					skills: ["Javascript", "VueJS"],
					email: "john.doe@gmail.com",
					status: true,
					usePassword: true
				},
				schema: {
					fields: [{
						type: "number",
						label: "ID (disabled text field)",
						model: "id",
						readonly: true, 
						disabled: true
					},{
						type: "text",
						label: "Name",
						model: "name",
						placeholder: "Your name",
						featured: true,
						required: true
					},
					{
						type: "checkbox",
						label: "Use password?",
						model: "usePassword"
					}, {
						type: "password",
						label: "Password",
						model: "password",
						disabled: false,
						min: 6,
						required: true,
						hint: "Minimum 6 characters",
						passwordVisible: false
					},{
						type: "select",
						label: "Skills",
						model: "skills",
						values: ["Javascript", "VueJS", "CSS3", "HTML5"]
					},{
						type: "email",
						label: "E-mail",
						model: "email",
						placeholder: "User's e-mail address"
					},{
						type: "checkbox",
						label: "Status",
						model: "status",
						default: true
					}],
					groupedFields: {
						name: "Advanced",
						display: "tabs",
						groups: [
							{
								key: "userDetails",
								legend: "User Details",
								fields: [
									{
										type: "textarea",
										label: "My story",
										model: "story"
									},
									{
										type: "email",
										id: "email",
										label: "Email Address",
										model: "email"
									}
								]
							},
							{
								key: "preferences",
								legend: "Preferences",
								fields: [
									{
										type: "select",
										label: "Color",
										model: "color",
										values: [
											"Red",
											"Green",
											"Blue"
										]
									},
									{
										type: "number",
										id: "timeout",
										label: "Timeout in Seconds",
										model: "timeout"
									}
								]
							}
						]
					}
				},
				options: {

				}
			}
		},
	}
</script>
