# RecruitmentTaskReact

Zadanie polega na stworzeniu aplikacji CRUDowej dotyczącej książek. 

Twoje zadania:
- Dodaj do widoku nagłówek, który powinien być stały niezależnie od tego, jak widok jest zescrollowany. Na nagłówku powinniśmy mieć
    - z lewej strony dowolna nazwa aplikacji i dowolne logo
    - z prawej strony 2 pozycje:
        - lista książek
        - dodaj książkę
- Dodaj w nawigacji aplikacji 2 oddzielne ścieżki, 
    - lista książek, która powinna być jednocześnie stroną główną
    - formularzem do dodania nowej książki
    
    W ścieżce `src/data` znajduje się fake serwis `FakeBookApi.js` do symulowania zapytań HTTP o pobranie listy książek, tworzenia nowych wpisów itd.

    Po pomyślnym utworzeniu nowego wpisu z książką, użytkownik powinien zostać przekierowany do widoku z listą książek, gdzie wyświetli się lista rozszerzona o właśnie dodaną pozycję.
- Dodaj filtr typu multiselect umożliwiający wyświetlenie książki od wybranego/wybranych wydawcy/wydawców. Jeśli żaden z filtrów nie jest wybrany, powinny wyświetlić się wszystkie. 
- Dodaj przycisk do czyszczenia filtrów. 
- Dodaj efekt podświetlenia rekordu po najechaniu na niego myszką korzystając nie tylko z CSSa.
