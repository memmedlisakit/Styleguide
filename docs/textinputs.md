<section id="Form">
	<h2>From elements</h2>
<div id="Inputs">
<h3>Inputs</h3>
<form action="#" class="wt-form">
	<div class="wt-form__row">
		<div class="wt-form-group wt-form-group__no-margin">	
			<label for="info_sname" class="wt-form-group__label">Input</label>
			<input type="text" class="wt-form-group__input" id="info_sname" placeholder="Company">
		</div>
		<div class="wt-form-group">
			<label for="info_error" class="wt-form-group__label">Error</label>
			<input type="text" class="wt-form-group__input wt-form-group__input--error" id="info_error">
			<span class="wt-form-group__message--error">Wrong password. Please try again.</span>
		</div>
		<div class="wt-form-group">
			<label for="disabled" class="wt-form-group__link-helper">Disabled State</label>
			<input type="text" class="wt-form-group__input" id="disabled" placeholder="Disabled" disabled>
		</div>
		<div class="wt-form-group">	
			<label for="custom_disabled" class="wt-form-group__label">Disabled State&Class</label>
			<input type="text" class="wt-form-group__input wt-form-group__input--disabled" id="custom_disabled" placeholder="Disabled" disabled>  
		</div>  
	</div>
</form>
</div>
```
<form action="#" class="wt-form">
	<div class="wt-form__row">
		<div class="wt-form-group wt-form-group__no-margin">	
			<label for="info_sname" class="wt-form-group__label">Input</label>
			<input type="text" class="wt-form-group__input" id="info_sname" placeholder="Company">
		</div>
		<div class="wt-form-group">
			<label for="info_error" class="wt-form-group__label">Error</label>
			<input type="text" class="wt-form-group__input wt-form-group__input--error" id="info_error">
			<span class="wt-form-group__message--error">Wrong password. Please try again.</span>
		</div>
		<div class="wt-form-group">
			<label for="disabled" class="wt-form-group__link-helper">Disabled State</label>
			<input type="text" class="wt-form-group__input" id="disabled" placeholder="Disabled" disabled>
		</div>
		<div class="wt-form-group">	
			<label for="custom_disabled" class="wt-form-group__label">Disabled State&Class</label>
			<input type="text" class="wt-form-group__input wt-form-group__input--disabled" id="custom_disabled" placeholder="Disabled" disabled>  
		</div> 
	</div>
</form>
```