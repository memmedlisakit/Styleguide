<div id="React_w_input">
<h2>React limited Input</h2>
	<div class="react_w_input">
		 
	</div>
</div>
``` 
<Winput
    label="Username: "
    id="limited_input"
    maxLength={30}
/> 
<Winput 
    bsStyle="error"
    validationMessage="Entered value should not be more than 15"
    floatErrorMessage={true} 
/>
<Winput  
    disabled={true}
    value="This field is disabled and maxLength 50"
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
			<td>limited_input</td>
		</tr>  
		<tr>
			<td>label</td>
			<td>String</td>
			<td>null</td>
			<td>Username:</td>
		</tr> 
		<tr>
			<td>validationMessage</td>
			<td>String</td>
			<td>null</td>
			<td>Entered value should not be more than 15</td>
		</tr> 
		<tr>
			<td>bsStyle</td>
			<td>String</td>
			<td>null</td>
			<td>error</td>
		</tr> 
		<tr>
			<td>maxLength</td>
			<td>Number</td>
			<td>null</td>
			<td>35</td>
		</tr>
		<tr>
			<td>value</td>
			<td>String</td>
			<td>' '</td>
			<td>some text</td>
		</tr>
		<tr>
			<td>floatErrorMessage</td>
			<td>Boolean</td>
			<td>null</td>
			<td>true</td>
		</tr>
		<tr>
			<td>onClick</td>
			<td>Function</td>
			<td>null</td>
			<td>onClick={ () =>{console.log("click")} }</td>
		</tr>
			<tr>
			<td>onBlur</td>
			<td>Function</td>
			<td>null</td>
			<td>onBlur={ () =>{console.log("blur")} }</td>
		</tr>
		</tr>
			<tr>
			<td>onFocus</td>
			<td>Function</td>
			<td>null</td>
			<td>onFocus={ () =>{console.log("focus")} }</td>
		</tr>
		</tr>
		<tr>
			<td>...attributes</td>
			<td></td>
			<td></td>
			<td>disabled={ true }    style={{"color":"red"}}</td>
		</tr> 
	</tbody>
</table>