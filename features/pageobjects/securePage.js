

const Page = require('./page');

class SecurePage extends Page {
  
    get flashAlert () {
        return $('//h3[contains(text(),"kasirAja")]');
    }
}

module.exports = new SecurePage();