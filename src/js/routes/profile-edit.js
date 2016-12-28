function profileEdit(ctx) {
    render('profile-edit', {
        profile: ctx.user
    });

    const formElement = document.forms['public-info'];
    const NAME_VALIDATOR_RE  = /^\w+\s*\w*$/;
    const PHONE_VALIDATOR_RE = /^\+?\d{10,14}$/;


    window.form = new VForm(formElement, {
        onSubmit: function () {
            console.log(arguments);
        },
        onError: function () {
            console.log('onError');
        },
        onValid: function () {
            console.log('onValid');
        },
        
        
        fields: {
            'publicEmail': {
                validate: 'email'
            },
            'displayName': {
                // validate: 'required',
                customValidator(value) {
                    return NAME_VALIDATOR_RE.test(value)
                        || 'Field can contain only letters, numbers, or underscore sign';
                }
            },
            'phoneNumber': {
                customValidator(value) {
                    return PHONE_VALIDATOR_RE.test(value)
                        || 'Phone must contain from 10 to 14 digits';
                }
            },
            'about': {
                validate: 'maxLength[140]',
                control: 'textarea'
            }
        }
    });
}