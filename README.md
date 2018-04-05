Zadanie 1. 
Napisz funkcję encodeStrings, która będzie przyjmować nieokreśloną ilość argumentów typu string
każdy z nich będzie zamieniać zgodnie z zasadą:
jeżeli litera w danym stringu występuje tylko raz to na jej miejscu ma się pojawić znak 0
jeżeli litera występuje więcej razy to ma się tam pojawić znak +
na koniec funkcja ma zwrócić podane napisy złączone w jeden, którego kolejność znaków będzie odwrócona od tyłu do przodu
przykład: encodeStrings('abc', 'aab', 'cbd') -> '0000++000'

Zadanie 2. 
Napisz komponent paginacji, który bedzie przyjmowal propsy:
itemsCount:
itemsPerPage:
currentPage:
onChange:

paginacja ma zawsze wyswietlac:
strzalke do tylu
maksymalnie trzy numerki
strzalke do przodu
strzalki maja sie blokowac w uzasadnionych przypadkach

W pliku App.js przeprowadzone zostało testowanie komponentu oraz funkcji encodeStrings.
Funkcja encodeStrings wyświetla wynik w konsoli, umieszczona została w pliku functions.js.
