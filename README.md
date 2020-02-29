# CV-builder

Aplikacja internetowa do tworzenia CV i eksportu do pdf.

![alt text](https://maciejf.pl/cv-builder/images/cv-builder_01.png)

### Live demo

[https://maciejf.pl/cv-builder](https://maciejf.pl/cv-builder)

### Użyte technologie

![alt text](https://maciejf.pl/cv-builder/images/cv-builder_caption.png)

### Opis i prezentacja

Single page aplication zrealizowana przy użyciu <b> React, React-router, Redux, Redux-thunk, Axios, PHP5, MySql </b>.
Struktura komponentów zgodna z założeniami [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
Aplikacja umożliwia rejestrację oraz logowanie przy użyciu standardowego formularza lub przez API facebooka.
Rejestrację i logowanie obsługuje <b>PHP</b> i <b>MySQL</b>.

#### Rejestracja

Rejestrować można się za pomocą formularza lub facebooka.

![rejestracja-img](https://maciejf.pl/cv-builder/images/rejestracja.gif)

#### Logowanie

![logowanie-img](https://maciejf.pl/cv-builder/images/logowanie.gif)

#### Resizer

Resizer umożliwia dodanie zdjęcia, zmianę proporcji oraz przycięcie do pożądanej wielkości.
![resizer-img](https://maciejf.pl/cv-builder/images/resizer.gif)
Zdjęcie przechowywane jest na serwerze, jedno dla wszystkich CV. Można je w dowolnej chwili zmienić lub usunąć w zakładce "Strona główna" -> Moje konto lub "Edytor" -> dane osobowe.

#### Szablony

Do wyboru są 3 szablony w 7 kolorach.
![szablon-img](https://maciejf.pl/cv-builder/images/szablony.gif)

#### Podgląd

Podgląd pozwala ocenić ostateczny wygląd CV, pobrać lub wydrukować.
Użyta biblioteka nie obsługuje podglądu na urządzeniach mobilnych.
![podglad-img](https://maciejf.pl/cv-builder/images/podglad.gif)

##### Na zakończenie

Aplikacja ma swoje ograniczenia, ale jest w pełni funkcjonalna i pozwala na stworzenie w pełni wartościowego CV.

Główną motywacją do napisania jej, była dalsza nauka Reacta, Reduxa wraz zewnętrznymi bibliotekami tj:
_react-fontawsome, react-pdf, axios, prop-types, react-facebook-login, react-google-recaptcha, react-image-crop, react-router-dom, react-redux, react-tooltip, redux-thunk, styled-components._
