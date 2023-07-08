Feature: Add category KasirAja

        Background:
            Given I login with email tokoscincare@gmail.com and password devy123

        Scenario : As a user, I add a new category
             When I click on the menu kategori
             When I click on the button tambah
             When I input nama kategori "<namaKategori>" and deskripsi "<deskripsi>"
             When I click on button simpan
             Then I must see a successful message "<sukses>" "<ditambahkan>"

        Examples:
            | namaKategori | deskripsi      | sukses  | ditambahkan      |
            | Scincare     | Scincare wajah | success | item ditambahkan |
 