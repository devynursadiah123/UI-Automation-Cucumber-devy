import page from './page.js';

class CategoryPage extends page{

    get buttonTambah(){
        return $('a[href="/categories/create"]')
    }

    get successMessage(){
        return $('//*[contains(text(),"success")]')
    }

    get itemDitambahkan(){
        return $('//*[contains(text(),"item ditambahkan")]')
    }

    get namaTextfield () {
        return $('#nama')
    }
    
    get deskripsiTextfield () {
        return $('#deskripsi')
    }
    
    get buttonSimpan () {
        return $('//*[contains(text(),"simpan")]')
    }

    get errorMessage () {
        return $('div[role="alert"]')
    }
}
export default new CategoryPage();