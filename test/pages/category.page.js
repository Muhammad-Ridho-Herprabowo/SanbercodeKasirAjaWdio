class CategoryPage {

    //elemen fitur kategori
    get tambahButton(){
        return $('//*[@class="chakra-button css-1piskbq"]'); 
    }
    async tambahCategory(){
        await this.tambahButton.click();
    }

    //elemen input kategori
    get namaInput(){
        return $('//*[@id="nama"]'); //locator field nama
    }
    get deskripsiInput(){
        return $('//*[@id="deskripsi"]'); //locator field deskripsi
    }
    get simpanButton(){
        return $('//button[contains(text(), "simpan")]'); //locator button simpan
    }
    //mendefinisikan action elemen
    async tambah(nama, deskripsi){
        await this.namaInput.setValue(nama);
        await this.deskripsiInput.setValue(deskripsi);
        await this.simpanButton.click();
    }

    //elemen notifikasi halaman
    get textElementSelector() {
        return '.chakra-alert__desc'; // locator peringatan
    }

    // Method peringatan
    get textElement() {
        return $(this.textElementSelector);
    }

 // Method untuk melakukan assert pada teks elemen
    async assertTextIsPresent(success) {
        await expect(this.textElement).toBeDisplayed(success);
}}

module.exports = new CategoryPage();