import Handlebars from './handlebars-v4.3.1.js';

export default {
    render(templateName, model) {
        templateName = templateName + 'Template';

        const templateElement = document.getElementById(templateName);
        const templateSource = templateElement.innerHTML;
        const renderFn = Handlebars.compile(templateSource);

        return renderFn(model);
    }
};
