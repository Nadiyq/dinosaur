(function() {

  const icons = {
    twitter     : 'fa fa-twitter',
    facebook    : 'fa fa-facebook',
    vkontakte   : 'fa fa-vk',
    website     : 'fa fa-globe',
    publicEmail : 'fa fa-envelope-o',
    phoneNumber : 'fa fa-phone'
  };

  const socialLinkTemplates = {
    twitter     : (param) => `https://twitter.com/${param}`,
    facebook    : (param) => `https://www.facebook.com/${param}`,
    vkontakte   : (param) => `https://vk.com/${param}`,
    website     : (param) => param,
  };

  Handlebars.registerHelper('socialIconFor', (name) => {
    return icons[name] || '';
  });

  Handlebars.registerHelper('socialLinkFor', (name, value) => {
    const tpl = socialLinkTemplates[name];
    if (!tpl) return name;
    return tpl(value);
  });

  Handlebars.registerHelper('decamelize', (str) => {
    return str
      .split(/(?=[A-Z])/)
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
  });

} ());
