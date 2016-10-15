# Andos_N3Y1YS_alkfejl
Andó Sándor Zsolt N3Y1YS Alkalmazások fejlesztése beadandó

# Közösségi Blogger program

Dokumentáció

1. Funkcionális követelmények
  - Vendégként a főoldalon szeretnék kiemelt blogokat látni kategóriánként.
  - Vendégként szeretnék a blogok, és bloggerek között szabadon böngészni.
  - Vendégként szeretnék egy blogot, bloggert, blogokhoz hozzászólásokat megtekinteni.
  - Vendégként szeretnék blogot, bloggert keresni.
  - Vendégként szeretnék tudni regisztrálni az oldalra.
  
  - Felhasználóként szeretnék tudni bejelentkezni az oldalra.
  - Felhasználóként szeretném tudni a profiladataimat szerkeszteni.
  - Felhasználóként szeretnék új blogot írni.
  - Felhasználóként szeretném a saját blogjaimat módosítani vagy törölni.
  - Felhasználóként szeretnék a blogokhoz hozzászólást írni, azokat értékelni.
  - Felhasználóként szeretnék embereket követni(Az ő új bejegyzéseik megjelennek az oldalamon.).
  
  
2. Nem funkcionális követelmények
  - Felhasználóbarát, ergonomikus elrendezés és kinézet.
  - Gyors működés.
  - Biztonságos működés: jelszavak tárolása, funkciókhoz való hozzáférés.
  
3. Szerepkörök
  - Vendég: A blogbejegyzéseket, bloggereket tekinthet meg.
  - Felhasználó: A vendég szerepkörén túl saját blogokat, hozzászólásokat írhat, mások bejegyzéseit értékelheti, és követhet más bloggereket, valamint módosíthatja a saját adatait blogbejegyzéseit.
  
4. Használatoi eset diagram
![Use-Case diagram](https://github.com/andosandor601/Andos_N3Y1YS_alkfejl/blob/master/images/Use-Case.jpg)

5. Folyamatok meghatározása
  - Felhasználó
    - ![Felhasználó folyamatai](https://github.com/andosandor601/Andos_N3Y1YS_alkfejl/blob/master/images/Felhasznalo_folyamatai.jpg)
  - Vendég
    - ![Vendég folyamatai](https://github.com/andosandor601/Andos_N3Y1YS_alkfejl/blob/master/images/Vend%C3%A9g%20folyamatai.jpg)


6. Oldaltérkép
Publikus:
  - Főoldal
  - Blogbejegyzések böngészése
    + Blogbejegyzés megtekintése
  - Felhasználók böngészése
    + Felhasználó megtekintése
  - Belépés
  - Regisztráció
  
Felhasználó:
  - Kilépés
  - Profiladatok
    + Profiladatok módosítása
  - Új bejegyzés írása
  - Bejegyzések böngészése
    + Saját bejegyzés módosítása
    + Bejegyzés megtekintése
      * Új hozzászólás írása
  - Felhasználók böngészése
    + Felhasználó követése
    + Leiratkozás
    + Profiladatok megtekintése
  
7. Végpontok
  - GET /: főoldal
  - GET /login: bejelentkező oldal
  - POST /login: bejelentkezési adatok felküldése
  - GET /signup: regisztrációs oldal
  - POST /signup: regisztrációs adatok felküldése
  - GET /profile: profiladatok
  - GET /profile/edit: profiladatok szerkesztése
  - POST /profile/edit: profiladatok elküldése
  - GET /blogs: új bejegyzések
  - GET /blogs/:id: blog megtekintése
  - POST /blogs/:id/comment: hozzászlás küldése
  - GET /blogs/create: új bejegyzés felvitele, űrlap megjelenítése
  - POST /blogss/create: új bejegyzés felvitele, adatok küldése
  - GET /blogs/edit: bejegyzés módosítása, űrlap megjelenítése
  - POST /blogss/edit: bejegyzés módosítása, adatok küldése
  - POST /profile/follow: felhasználó követése
  - POST /profile/unfollow: leiratkozás
  - POST /logout: kijelentkezés
