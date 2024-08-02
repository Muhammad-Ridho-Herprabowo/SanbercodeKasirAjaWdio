class ProductPage {

    //elemen fitur produk
    get tambahButton(){
        return $('.chakra-button'); 
    }
    async tambahProduct(){
        await this.tambahButton.click();
    }

    //elemen input produk
    get namaInput(){
        return $('//*[@id="nama"]'); //locator field nama
    }
    get deskripsiInput(){
        return $('//*[@id="deskripsi"]'); //locator field deskripsi
    }
    get hargaBeliInput(){
        return $('//*[@id="harga beli"]'); //locator field harga beli
    }
    get hargaJualInput(){
        return $('//*[@id="harga jual"]'); //locator field harga jual
    }
    get stokInput(){
        return $('//*[@id="stok"]'); //locator field stok
    }
    get kategoriButton(){
        return $('//*[@id="kategori"]'); //locator field kategori
    }
    get jenisKategoriButton(){
        return $(':nth-child(1) > .css-u3dlpe'); //locator field jenis kategori
    }
    get simpanButton(){
        return $('//button[contains(text(), "simpan")]'); //locator button simpan
    }
    //mendefinisikan action elemen
    async tambah(nama, deskripsi, beli, jual, stok){
        await this.namaInput.setValue(nama);
        await this.deskripsiInput.setValue(deskripsi);
        await this.hargaBeliInput.setValue(beli);
        await this.hargaJualInput.setValue(jual);
        await this.stokInput.setValue(stok);
        await this.kategoriButton.click();
        await this.jenisKategoriButton.click();
        await this.simpanButton.waitForClickable();
        await this.simpanButton.click();
    }

    //elemen notifikasi halaman
    get textElementSelector() {
        return '.chakra-alert__desc'; // Misalnya, elemen heading dengan class 'page-title'
    }

    // Method untuk mengambil elemen teks
    get textElement() {
        return $(this.textElementSelector);
    }

 // Method untuk melakukan assert pada teks elemen
    async assertTextIsPresent(success) {
        await expect(this.textElement).toBeDisplayed(success);
}}

module.exports = new ProductPage();