<div id="React_checkout_input">
<h2>React Checkout Input</h2>
	<div class="react_checkout_input">
		 
	</div>
</div>
```
<Input
    label="Simple" 
    id="username" 
    type="password" 
    formClass="form-group" 
    required = {true} 
    edit={true}
/> 
<Input 
	label="Error" 
    validationMessage="This field is required!!" 
    bsStyle="error" 
    className="input_error"
/> 
<Input  
    label="Disabled" 
    disabled 
    value="This field is disabled"
/> 
```
<table class="bs-table bs-table__striped">
<h2>Props</h2>
	<thead>
		<tr>
			<th>Name</th>
			<th>Type</th>
			<th>Default</th>
			<th>Example</th>
		</tr>
	</thead>
	<tbody> 
		<tr>
			<td>id</td>
			<td>String</td>
			<td>Unique Id</td>
			<td>input_username</td>
		</tr>  
		<tr>
			<td>label</td>
			<td>String</td>
			<td>null</td>
			<td>Email Address</td>
		</tr>  
		<tr>
			<td>...attributes</td>
			<td></td>
			<td></td>
			<td>type="number" value="55"</td>
		</tr>  
         <tr>
			<td>formClass</td>
			<td>String</td>
			<td>' '</td>
			<td>from-group</td>
		 </tr>  
		 <tr>
			<td>formStyle</td>
			<td>Object</td>
			<td></td>
			<td>{ "border": "2px solid grey","padding":"10px" }</td>
		 </tr>  
         <tr>
			<td>required </td>
			<td>Boolean</td>
			<td>true</td>
			<td>false</td>
		</tr>  
        <tr>
			<td>edit </td>
			<td>Boolean</td>
			<td>true</td>
			<td>true</td>
		</tr> 
        <tr>
			<td>validationMessage </td>
			<td>String</td>
			<td>' '</td>
			<td>Please enter a valid password</td>
		</tr> 
        <tr>
			<td>bsStyle </td>
			<td>String</td>
			<td>' '</td>
			<td>error</td>
		</tr> 
        <tr>
			<td>className </td>
			<td>String</td>
			<td>' '</td>
			<td>custom_class_name</td>
		</tr>
	</tbody>
</table>