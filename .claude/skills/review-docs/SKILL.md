Zweryfikuj poprawność składni i aktualność użytych bibliotek/frameworków w wskazanym pliku lub katalogu.

Procedura:

1. **Identyfikacja zależności** — przeczytaj wskazany plik (lub pliki w katalogu). Wylistuj wszystkie importowane biblioteki, frameworki i ich wersje z package.json.

2. **Weryfikacja składni przez context7** — dla każdej wykrytej biblioteki/frameworka:
   - Użyj `mcp__context7__resolve-library-id` aby znaleźć ID biblioteki.
   - Użyj `mcp__context7__query-docs` aby pobrać aktualną dokumentację.
   - Porównaj użytą składnię (API, hooki, komponenty, konfigurację) z oficjalną dokumentacją.
   - Sprawdź czy użyte API nie jest oznaczone jako deprecated.

3. **Sprawdzenie aktualności wersji** — porównaj wersje z package.json z najnowszymi stabilnymi wersjami z dokumentacji context7. Zgłoś przestarzałe wersje.

4. **Raport** — dla każdego znalezionego problemu podaj:
   - **Plik i linia** — gdzie występuje problem
   - **Poziom**: `outdated` (stara wersja) / `deprecated` (wycofane API) / `syntax-error` (błędna składnia) / `ok` (zgodne z docs)
   - **Obecna składnia** — co jest w kodzie
   - **Poprawna składnia** — jak powinno wyglądać wg aktualnej dokumentacji
   - **Link do docs** — sekcja dokumentacji, z której pochodzi poprawka

5. **Podsumowanie** — na końcu podaj:
   - Liczbę sprawdzonych bibliotek
   - Liczbę problemów wg poziomu
   - Listę bibliotek wymagających aktualizacji wersji
   - Jeśli wszystko jest aktualne i poprawne — powiedz to wprost
